import React from "react";
import { GlobalContext } from "../containers/app";
import { Title } from "../components/title";
import { Base } from "../layouts/base";

export const PageNotFound = function(props: { ctx: GlobalContext }) {
  props.ctx.pageMeta.title = "404 - Page not found";
  props.ctx.updatePageMeta();

  return (
    <Base ctx={props.ctx}>
      <Title>
        <h1>
          <span>404</span>
          <small>&nbsp;</small>
        </h1>
      </Title>
    </Base>
  );
};
