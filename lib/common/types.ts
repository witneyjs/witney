import { Router, Route } from "router5";
import { Component } from "preact";

export type Globals = {
  data: any;
  router: Router;
  route: Route;
  view: Component;
  helmetContext: any;
};
