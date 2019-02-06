import React from "react";
import { GlobalContext } from "../containers/app";
import { Title } from "../components/title";
import { Base } from "../layouts/base";

export const Profile = function(props: { ctx: GlobalContext }) {
  props.ctx.pageMeta.title = "Profile";
  props.ctx.pageMeta.description = 'This is a profile page">>';
  props.ctx.pageMeta.keywords = "Some profile keywords";
  props.ctx.updatePageMeta();

  return (
    <Base ctx={props.ctx}>
      <Title>
        <h1>
          <span>Profile route</span>
          <small>&nbsp;</small>
        </h1>
      </Title>
    </Base>
  );
};
