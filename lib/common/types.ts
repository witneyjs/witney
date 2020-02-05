import { Router, Route } from "router5";
import { Component } from "react";

export type Globals = {
  data: any;
  router: Router;
  route: Route;
  view: string;
  loadError: any;
  loading: boolean;
  helmetContext: any;
};
