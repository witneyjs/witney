import React from "react";
import { render } from "react-dom";
import { constants } from "router5";
import ky from "ky-universal";

import { App } from "@lib/common/containers/app";
import { createFrontActionResult } from "@lib/common/controllers";
import { batchEnd, batchStart } from "alo";

export const createController = function({ config, globals }) {
  let initialUpdate = true;

  return async function(route) {
    let routeName =
      route.name === constants.UNKNOWN_ROUTE
        ? config.notFoundRoute
        : route.name;

    const nextViewPromise = config.routes[routeName].view();

    let actionResultResponse: Response;
    let actionResult: ReturnType<typeof createFrontActionResult> | undefined;
    if (!initialUpdate) {
      actionResultResponse = await ky(route.path, {
        headers: {
          Accept: "application/json"
        }
      });
      if (actionResultResponse.ok) {
        actionResult = await actionResultResponse.json();
      } else {
        console.error("Something went wrong");
      }
    }

    if (actionResult && actionResult.redirect) {
      location.replace(actionResult.redirect.url);
    }

    const nextView = await nextViewPromise;

    batchStart();
    globals.view = nextView;
    if (!initialUpdate && actionResult) {
      globals.data = actionResult.data;
    }
    batchEnd();

    if (initialUpdate) {
      render(<App globals={globals} />, document.querySelector(".root")!);
    }
    initialUpdate = false;
  };
};
