import { batchStart, batchEnd } from "alo";
import { Router } from "router5";
import ky from "ky-universal";

import { createRouter } from "./router";
import { config } from "../common/config";
import { createController } from "./controller";
import { createGlobals } from "@lib/common/globals";
import { App } from "../common/containers/app";

const globals = createGlobals();

if (window["ACTION_RESULT"]) {
  globals.data = window["ACTION_RESULT"].data;
}

let router: Router;
let unsubscribe;
const init = function(App) {
  let controller = createController({ config, globals, App });

  if (router) {
    unsubscribe();
    router.stop();
  }

  batchStart();

  router = createRouter({ config });
  globals.router = router;
  unsubscribe = router.subscribe(function({ route }) {
    globals.route = route;
    if (!route) {
      console.error("Something is fishy");
    }
    controller(route);
  });
  router.start();

  batchEnd();
};

init(App);

if (module.hot) {
  module.hot.accept(
    ["../common/config", "../common/containers/app.tsx"],
    function() {
      const App = require("../common/containers/app").App;
      init(App);
    }
  );
  let reloadInterval;
  module.hot.addStatusHandler(function(status) {
    // TODO: Check if webpack 5 might bring a better solution
    // After a syntax error HMR stops updating itself and stays in "check"
    // We have to reload the page to fix HMR again :/
    if (reloadInterval != null) clearInterval(reloadInterval);
    if (status !== "check") {
      return;
    }
    reloadInterval = setInterval(async function() {
      if (module!.hot!.status() !== "check") {
        clearInterval(reloadInterval);
        return;
      }

      const result = await ky("/dev-status", {
        timeout: false,
        retry: 0
      }).text();
      if (result === "ok") location.reload();
    }, 2000);
  });
}
