import { createRouter, cloneRouter, constants } from "router5";
import { renderStylesToString } from "emotion-server";
import { render } from "preact-render-to-string";
import got from "got";
import { h } from "preact";
import _ from "lodash";
import fs from "fs";
import { promisify } from "util";
const readFile = promisify(fs.readFile);

import { IocInterface } from "wald";
import paths from "@lib/node/paths";
import { createActionResult } from "./../controllers";
import { createFrontActionResult } from "./../../common/controllers";
import { App } from "@lib/common/containers/app";
import { config } from "../../common/config";
import { logger } from "../logger";
import { createRouter5Config } from "@lib/common/util/router5Config";
import { createGlobals } from "@lib/common/globals";

let indexHtml;
const getIndexHtml = async function({ frontDevUrl, frontNameSpaceId }) {
  if (!BUILD.IS_WATCH) {
    if (!indexHtml) {
      indexHtml = await readFile(`${paths.dist(frontNameSpaceId)}/index.html`, {
        encoding: "utf8"
      });
    }

    return indexHtml;
  } else {
    return (await got(frontDevUrl)).body;
  }
};

export const createControllerMiddleware = async function({
  aConfig,
  ioc,
  frontDevUrl,
  routeParts,
  frontNameSpaceId
}: {
  aConfig: typeof config;
  ioc: IocInterface;
  frontDevUrl: string;
  routeParts;
  frontNameSpaceId: string;
}) {
  const router5Config = createRouter5Config(aConfig);
  const baseRouter = createRouter(router5Config.routes, router5Config.options);

  return function(req, res) {
    const aRouter = cloneRouter(baseRouter);
    aRouter.start(req.originalUrl, async function(error, state) {
      if (error || !state) {
        if (error) {
          logger.info("Controller Error", { url: req.url, error });
        } else if (!state) {
          logger.info("Controller Error", {
            url: req.url,
            error: "Router didn't set the state"
          });
        }
        res.status(500).send("Something went wrong");
        return;
      }

      let routeName = state.name;
      if (routeName === constants.UNKNOWN_ROUTE) {
        routeName = aConfig.notFoundRoute;
        res.status(404);
      }

      const route = aConfig.routes[routeName];
      const routePart = routeParts[routeName];
      const Controller = routePart.controller;
      const controller = routePart.controllerIsFunction
        ? new Controller()
        : ioc.get({ blueprint: Controller });

      let action = req.method.toLowerCase() + _.upperFirst(route.action);
      if (!controller[action]) action = route.action;
      const actionResult: ReturnType<typeof createActionResult> = controller[
        action
      ](state, req, res);
      const frontActionResult = createFrontActionResult(actionResult);

      if (req.header("Accept") === "application/json") {
        return res.send(frontActionResult);
      } else {
        if (actionResult.redirect) {
          res.redirect(actionResult.redirect.url);
          return;
        }
      }

      const globals = createGlobals();
      globals.data = actionResult.data;
      globals.router = aRouter;
      globals.route = state;
      globals.view = routePart.view;

      const viewResult = renderStylesToString(
        render(<App globals={globals} />)
      );

      let indexHtml = await getIndexHtml({ frontDevUrl, frontNameSpaceId });

      indexHtml = indexHtml.replace("<!-- SSR_YIELD_APP -->", viewResult);
      indexHtml = indexHtml.replace(
        "<!-- SSR_ACTION_RESULT -->",
        `<script>var ACTION_RESULT = ${JSON.stringify(
          frontActionResult
        )}</script>`
      );

      const helmet = globals.helmetContext.helmet;
      indexHtml = indexHtml.replace(
        "<!-- SSR_HELMET -->",
        `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        `
      );
      const htmlTagAttributes = helmet.htmlAttributes.toString();
      const bodyTagAttributes = helmet.bodyAttributes.toString();
      indexHtml = indexHtml.replace(
        " data-ssr-html",
        htmlTagAttributes ? " " + htmlTagAttributes : ""
      );
      indexHtml = indexHtml.replace(
        " data-ssr-body",
        bodyTagAttributes ? " " + bodyTagAttributes : ""
      );

      res.send(indexHtml);
    });
  };
};
