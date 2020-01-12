import express from "express";
import bodyParser from "body-parser";

import paths from "@lib/node/paths";
import { createDevServerProxyMiddleware } from "./middlewares/devServerProxy";
import { createControllerMiddleware } from "./middlewares/controller";
import { createLoggerMiddleware } from "./middlewares/logger";

export const createExpress = async function({
  config,
  ioc,
  frontNameSpaceId,
  routeParts
}) {
  const app = express();

  app.use(createLoggerMiddleware());

  const frontNameSpaceConfig = __non_webpack_require__(
    paths.config(`${frontNameSpaceId}/config.js`)
  )();
  const frontDevUrl = `http://localhost:${frontNameSpaceConfig.devServerPort}`;

  if (BUILD.IS_WATCH) {
    app.get("/dev-status", (req, res) => {
      res.send("ok");
    });
    app.use(createDevServerProxyMiddleware({ frontDevUrl }));
  } else {
    app.use(
      express.static(paths.dist(frontNameSpaceId), {
        index: false
      })
    );
  }
  app.use(express.static(paths.static(BUILD.NAMESPACE_ID)));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    await createControllerMiddleware({
      aConfig: config,
      ioc,
      frontDevUrl,
      frontNameSpaceId,
      routeParts
    })
  );

  return app;
};
