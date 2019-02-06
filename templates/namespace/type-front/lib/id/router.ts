import _createRouter from "router5";
import browserPlugin from "router5-plugin-browser";

const routes = [
  { name: "home", path: "/" },
  { name: "profile", path: "/profile" }
];

export const createRouter = function() {
  const router = _createRouter(routes);
  router.usePlugin(browserPlugin());
  return router;
};
