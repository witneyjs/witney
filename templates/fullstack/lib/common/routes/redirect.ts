import { addRoute } from "../services/routes";
import { curryImport } from "../util/curryImport";

export const REDIRECT_ROUTE = "redirect";

export default function(routes) {
  addRoute(routes, {
    id: REDIRECT_ROUTE,
    path: "/redirect",
    controller:
      BUILD.IS_NODE &&
      curryImport(() => import("@lib/back/controllers/home"), "default"),
    action: "redirect",
    view: curryImport(() => import("@lib/front/screens/home"), "default")
  });

  return routes;
}
