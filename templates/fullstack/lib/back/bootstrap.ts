import http from "http";

import { config } from "../common/config";
import { createIoc } from "./ioc";
import { createExpress } from "./express";
import { logger } from "./logger";

const frontNameSpaceId = "front";

export const loadRouteParts = async function({
  aConfig
}: {
  aConfig: typeof config;
}) {
  const routeParts = {};

  for (const [routeName, route] of Object.entries(aConfig.routes)) {
    if (typeof route.controller === "boolean")
      throw new Error("Controller was missing in config");

    const controller = await route.controller();

    routeParts[routeName] = {
      controller,
      controllerIsFunction: typeof controller === "function",
      view: await route.view()
    };
  }

  return routeParts;
};

export const bootstrap = async function() {
  const routeParts = await loadRouteParts({ aConfig: config });
  const ioc = createIoc();
  const express = await createExpress({
    config,
    ioc,
    frontNameSpaceId,
    routeParts
  });
  const server = http.createServer(express);

  const port = 20000;
  server.listen(port);

  logger.info("Server start", {
    pid: process.pid,
    port,
    url: `http://localhost:${port}`
  });
};
