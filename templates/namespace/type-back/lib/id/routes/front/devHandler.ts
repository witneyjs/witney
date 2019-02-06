import proxy from "express-http-proxy";
import { createRouteContext, postHandleContext, CreateEnvRouteFunc } from ".";

export const createHandler: CreateEnvRouteFunc = function({
  beforeResData,
  afterResData
}) {
  let config: any = {};
  if (beforeResData || afterResData) {
    config.userResDecorator = function(
      proxyRes,
      proxyResData,
      userReq,
      userRes
    ) {
      let routeContext = createRouteContext();

      if (beforeResData) {
        routeContext = beforeResData(userReq, userRes, routeContext);
      }
      routeContext.resData = proxyResData.toString("utf8");
      if (afterResData) {
        routeContext = afterResData(userReq, userRes, routeContext);
      }

      routeContext = postHandleContext(routeContext);

      return routeContext.resData;
    };
  }

  // TODO: Dynamically get the port :()
  return proxy("localhost:8080", config);
};
