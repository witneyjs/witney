import React from "react";
import { Observer } from "./observer";
import { Globals } from "./globals";
import { RouterProvider } from "react-router5";
import { HelmetProvider } from "react-helmet-async";

export class App extends Observer<{ globals }> {
  view(props) {
    const globals = props.globals;
    const View = globals.view;

    return (
      <HelmetProvider context={globals.helmetContext}>
        <Globals.Provider value={globals}>
          <RouterProvider router={globals.router}>
            {View ? (
              <View
                data={globals.data}
                route={globals.route}
                router={globals.router}
              />
            ) : (
              <span>'Loading...'</span>
            )}
          </RouterProvider>
        </Globals.Provider>
      </HelmetProvider>
    );
  }
}
