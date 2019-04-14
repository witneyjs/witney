import express from "express";
import faye from "faye";
import http from "http";
import {
  frontDistDir,
  frontStaticDir,
  createRoute as createFrontRoute
} from "./routes/front";

export class App {
  init() {
    const app = express();
    const server = http.createServer(app);

    const bayeux = new faye.NodeAdapter({ mount: "/faye" });
    bayeux.attach(server);

    app.use(function(err, req, res, next) {
      console.error(err.stack);
      res.send(500);
    });

    app.all(
      "/",
      createFrontRoute({
        beforeResData: (req, res, ctx) => {
          ctx.frontData = {
            items: [1, 2, 3]
          };

          return ctx;
        }
      })
    );
    app.get(
      "/user/:id",
      createFrontRoute({
        beforeResData: (req, res, ctx) => {
          ctx.frontData = {
            userId: req.params.id
          };

          return ctx;
        }
      })
    );

    if (BUILD.IS_PROD) {
      app.use(express.static(frontDistDir));
      app.use(express.static(frontStaticDir));

      app.use("/", createFrontRoute({}));
    } else {
      app.use("/", createFrontRoute({}));

      app.use(express.static(frontDistDir));
      app.use(express.static(frontStaticDir));
    }

    server.listen(20000);

    const client = bayeux.getClient();

    let count = 0;
    setInterval(() => {
      client.publish("/count", count);
      count++;
    }, 1000);

    setTimeout(() => {
      client.publish("/reload", true);
    }, 6000);
  }
}
