import React from "react";
import { Link } from "../../containers/link";
import "./styles.pcss";
import { GlobalContext } from "../../containers/app";

export const Base = function(props: { children; ctx: GlobalContext }) {
  return (
    <div className="app">
      <div className="app__background" />
      <nav className="app__navigation">
        <Link ctx={props.ctx} route="home">
          Home
        </Link>
        <Link ctx={props.ctx} route="profile">
          Profile
        </Link>
      </nav>

      {props.children}
    </div>
  );
};
