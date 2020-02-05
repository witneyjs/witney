import React from "react";
import { render } from "react-dom";
import { constants } from "router5";
import ky from "ky-universal";

import { createFrontActionResult } from "@lib/common/controllers";
import { batchEnd, batchStart } from "alo";

const loadActionResult = async function(globals, route) {
  let actionResultResponse: Response | null = null;
  let actionResult: ReturnType<typeof createFrontActionResult> | undefined;

  let error = null;

  try {
    actionResultResponse = await ky(route.path, {
      retry: 5,
      headers: {
        Accept: "application/json"
      }
    });
  } catch (err) {
    error = err;
  }

  if (actionResultResponse && actionResultResponse.ok) {
    actionResult = await actionResultResponse.json();
  }

  if (actionResult && actionResult.redirect) {
    location.replace(actionResult.redirect.url);
  }

  batchStart();
  if (actionResult) {
    globals.data = actionResult.data;
    globals.loadError = null;
  } else {
    globals.loadError = error || "Request json invalid";
  }
  globals.loading = false;
  batchEnd();
};

export const createController = function({ config, globals, App }) {
  let initialUpdate = true;

  return async function(route) {
    let routeName =
      route.name === constants.UNKNOWN_ROUTE
        ? config.notFoundRoute
        : route.name;

    batchStart();
    globals.view = config.routes[routeName].view;
    if (!initialUpdate) {
      globals.loading = true;
      globals.loadError = null;
    }
    batchEnd();

    if (!initialUpdate) {
      loadActionResult(globals, route);
    }

    if (initialUpdate) {
      render(<App globals={globals} />, document.querySelector(".root")!);
    }
    initialUpdate = false;
  };
};
