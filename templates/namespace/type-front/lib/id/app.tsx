import React from "react";
import { render as _render } from "react-dom";
import { App } from "./containers/app";

const registerWorkBox = function() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
};

const render = function() {
  _render(<App />, document.querySelector("#app"));
};

registerWorkBox();
render();

if (module.hot) {
  module.hot.accept("./containers/app", render);
}
