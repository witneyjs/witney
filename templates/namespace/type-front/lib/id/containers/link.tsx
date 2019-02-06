import React from "react";
import { GlobalContext } from "./app";
import idx from "idx.macro";

export const Link = function(props: {
  route: string;
  children;
  ctx: GlobalContext;
}) {
  if (!props.ctx.router) return props.children;
  const currentPath = idx(props, _ => _.ctx.routerState.path);
  const linkPath = props.ctx.router.buildPath(props.route);
  const isActive = linkPath === currentPath;

  return (
    <a
      className={isActive ? "active" : ""}
      href={linkPath}
      onClick={e => {
        e.preventDefault();
        props.ctx.router.navigate(props.route);
      }}
    >
      {props.children}
    </a>
  );
};
