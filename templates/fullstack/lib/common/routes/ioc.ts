import { addRoute } from "../services/routes";
import { curryImport } from "../util/curryImport";

export default function(routes) {
  addRoute(routes, {
    id: "ioc",
    path: "/ioc",
    controller:
      BUILD.IS_NODE &&
      curryImport(() => import("@lib/back/controllers/iocTest"), "default"),
    action: "index",
    view: curryImport(() => import("@lib/front/screens/home"), "default")
  });

  return routes;
}
