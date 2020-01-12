import { addRoute } from "../services/routes";
import { curryImport } from "../util/curryImport";

export const HOME_ROUTE = "home";

export default function(routes) {
  addRoute(routes, {
    id: HOME_ROUTE,
    path: "/?name&color",
    controller:
      BUILD.IS_NODE &&
      curryImport(() => import("@lib/back/controllers/home"), "default"),
    action: "index",
    view: curryImport(() => import("@lib/front/screens/home"), "default")
  });

  return routes;
}
