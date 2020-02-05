import React from "react";
import universal from "react-universal-component";

import { LoadingIndicator } from "./loadingIndicator";

let CachedView = null;

const UniversalRender = function(props, Mod, viewLoading, viewError) {
  const error = props.globals.loadError || viewError;
  const loading = !error && (props.globals.loading || viewLoading);

  let View = Mod;
  if (error || loading || !View) {
    View = CachedView;
  } else {
    CachedView = View;
  }

  if (error) console.error("Dependency loading failed", error);

  return (
    <>
      <LoadingIndicator loading={loading} />
      {error ? (
        <div style={{ color: "red" }}>{error.toString()}</div>
      ) : View ? (
        <View {...props} />
      ) : null}
    </>
  );
};

export const UniversalView = universal<any>(
  props => import(`../../front/views/${props.view}`),
  {
    // https://github.com/faceyspacey/webpack-flush-chunks/issues/74#issuecomment-427149421
    ignoreBabelRename: true,
    render: UniversalRender,
    loadingTransition: false
  }
);
