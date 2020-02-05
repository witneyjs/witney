import { addRoute } from "../services/routes";
import { curryImport } from "../util/curryImport";

export const NOT_HOME_ROUTE = "notHome";

export default function(routes) {
  addRoute(routes, {
    id: NOT_HOME_ROUTE,
    path: "/notHome",
    controller:
      BUILD.IS_NODE &&
      curryImport(() => import("@lib/back/controllers/home"), "default"),
    action: "index",
    view: "notHome"
  });

  return routes;
}
