import { logger } from "../logger";

export const createLoggerMiddleware = function() {
  return function(req, res, next) {
    res.on("finish", function() {
      logger.info("Req/Res", {
        protocol: req.protocol,
        url: req.originalUrl,
        host: req.hostname,
        status: res.statusCode
      });
    });

    next();
  };
};
