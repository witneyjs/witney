import { createRouteContext, postHandleContext, CreateEnvRouteFunc } from ".";
import { ssr } from "./ssr";

export const createHandler: CreateEnvRouteFunc = ({
  beforeResData,
  afterResData
}) => (req, res, next) => {
  let routeContext = createRouteContext();

  if (beforeResData) {
    routeContext = beforeResData(req, res, routeContext);
  }
  const ssrResult = ssr(req.originalUrl, routeContext);
  routeContext.resData = ssrResult.pageHtml;
  if (afterResData) {
    routeContext = afterResData(req, res, routeContext);
  }
  routeContext = postHandleContext(routeContext);

  if (!ssrResult.pageFound) {
    res.status(404);
  }

  res.send(routeContext.resData);
};
