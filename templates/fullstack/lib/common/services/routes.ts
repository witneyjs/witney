import { Route, NewRoute } from "./types";

// The regex makes sure that files are not importet twice (with and without file-extension)
const context = require.context("../routes", true, /\.\w+$/);
const routeReducers: Function[] = context.keys().map(function(key) {
  const result = context(key);
  return result.default;
});

export const createRoutes = function() {
  let routes: { [key: string]: Route } = {};
  for (const reducer of routeReducers) {
    if (!reducer) continue;

    routes = reducer(routes);
  }

  return routes;
};

export const addRoute = function(routes, config: NewRoute) {
  if (routes[config.id]) {
    throw new Error(`Route Id "${config.id}" already exists`);
  }

  const route: Route = {
    ...config,
    action: config.action || "index"
  };

  routes[config.id] = route;
};
