import React from "react";
import { GlobalContext } from "../../containers/app";
import { Title } from "../../components/title";
import { Base } from "../../layouts/base";
import "./styles.pcss";

export const Home = function(props: { ctx: GlobalContext; data; count }) {
  props.ctx.pageMeta.title = "Home";
  props.ctx.pageMeta.description = "Some home description";
  props.ctx.pageMeta.keywords = "Some home keywords";
  props.ctx.updatePageMeta();

  return (
    <Base ctx={props.ctx}>
      <div className="app__home">
        <Title>
          <div className="app__home-icons">
            <svg viewBox="0 0 25 25">
              <use href="#home" />
            </svg>
            <svg viewBox="0 0 25 25">
              <use href="#rocket" />
            </svg>
            <svg viewBox="0 0 25 25">
              <use href="#smile" />
            </svg>
          </div>
          <h1>
            <span className="app__home-title-namespace-text">
              {BUILD.NAMESPACE_ID}
            </span>{" "}
            namespace
            <small>
              Node Environment: {BUILD.NODE_ENV}
              {props.data ? (
                <>
                  <br />
                  Server Data: <code>{JSON.stringify(props.data)}</code>
                </>
              ) : null}
            </small>
          </h1>
        </Title>
        {props.count !== false ? (
          <div className="app__home-count">{props.count}</div>
        ) : null}
      </div>
    </Base>
  );
};
