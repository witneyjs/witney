import paths from "@lib/node/paths";
import { RequestHandler } from "express";

export const frontNameSpaceId = "front";
export const frontStaticDir = paths.static(frontNameSpaceId);
export const frontDistDir = paths.dist(frontNameSpaceId);

export type RouteContext = {
  resData: string;
  frontData: boolean | object;
};

export const createRouteContext = function(): RouteContext {
  return {
    resData: "",
    frontData: false
  };
};

type HandleFunc = (req, res, ctx: RouteContext) => RouteContext;

export const postHandleContext = function(ctx: RouteContext) {
  if (ctx.frontData) {
    ctx.resData = ctx.resData.replace(
      "<!-- NODE_DATA -->",
      `<script>var data = ${JSON.stringify(ctx.frontData)}</script>`
    );
  }

  return ctx;
};

export type CreateRouteParams = {
  beforeResData?: HandleFunc;
  afterResData?: HandleFunc;
};
export type CreateEnvRouteFunc = (options: CreateRouteParams) => RequestHandler;

export const createRoute = function(options: CreateRouteParams) {
  if (BUILD.IS_PROD) {
    return require("./prodHandler").createHandler(options);
  } else {
    return require("./devHandler").createHandler(options);
  }
};
