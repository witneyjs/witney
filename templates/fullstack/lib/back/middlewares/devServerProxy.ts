import got from "got";
import { Response } from "express";
import { logger } from "../logger";

export const createDevServerProxyMiddleware = function({ frontDevUrl }) {
  return async function(req, res: Response, next) {
    const matches = req.url.match(/\/[a-zA-Z0-9.].*\.[a-zA-Z0-9.].*$/);
    if (!matches) {
      return next();
    }

    try {
      await new Promise(function(resolve, reject) {
        const readStream = got
          .stream(`${frontDevUrl}${req.url}`)
          .on("error", function(err) {
            reject(err);
          })
          .on("end", function() {
            resolve();
          });
        readStream.pipe(
          res,
          { end: false }
        );
      });
    } catch (err) {
      if (err.response.statusCode !== 404) {
        logger.error("Proxy error", { error: err });
      }

      return next();
    }

    res.end();
  };
};
