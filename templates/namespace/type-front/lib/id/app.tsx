import React from "react";
import { render as _render } from "react-dom";
import { App as AppContainer } from "./containers/app";

export class App {
  init() {
    this.registerWorkBox();

    if (module.hot) {
      module.hot.accept("./containers/app", () => {
        this.render();
      });
    }

    this.render();
  }

  registerWorkBox() {
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
  }

  render() {
    _render(<AppContainer />, document.querySelector("#app"));
  }
}
