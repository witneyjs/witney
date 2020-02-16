import React from "react";
import { RouterProvider } from "react-router5";
import { HelmetProvider } from "react-helmet-async";
import { Observer } from "react-alo";

import { Globals } from "./globals";
import { UniversalView } from "./universalView";

export class App extends Observer<{ globals }> {
  view(props) {
    const globals = props.globals;
    const view = globals.view;
    const router = globals.router;

    return (
      <HelmetProvider context={globals.helmetContext}>
        <Globals.Provider value={globals}>
          <RouterProvider router={router}>
            <UniversalView
              view={view}
              globals={globals}
              routeName={globals.routeName}
              data={globals.data}
              route={globals.route}
              router={router}
            />
          </RouterProvider>
        </Globals.Provider>
      </HelmetProvider>
    );
  }
}
