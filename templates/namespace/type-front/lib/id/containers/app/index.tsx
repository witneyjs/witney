import React from "react";
require("sanitize.css");

import "./app.pcss";
import "./app.scss";
import svg from "../../assets/svgs.svg.txt";
import { createRouter } from "../../router";
import { Router, Subscription } from "router5";
import { Unsubscribe } from "router5/types/types/base";
import { appendSvg, getAppendSvgString } from "./svg";
import { SsrData } from "common/types";
import { createUpdate as createPageMetaUpdate } from "../../util/pageMeta";
import { PageNotFound } from "../../screens/pageNotFound";
import { Home } from "../../screens/home";
import { Profile } from "../../screens/profile";

export type GlobalContext = {
  router: Router;
  routerState?: ReturnType<Router["getState"]>;
  pageMeta: SsrData["result"]["pageMeta"];
  updatePageMeta: Function;
};
type AppState = { count: boolean; data: any };
type AppSubscriptions = {
  router?: Subscription | Unsubscribe;
  count?;
  reload?;
};

export const RouterContext = React.createContext<{ router: Router | null }>({
  router: null
});

export class App extends React.Component {
  state: AppState = {
    count: false,
    data: {}
  };
  ctx: GlobalContext;
  subscriptions: AppSubscriptions = {};
  webSocketClient: null | { subscribe } = null;

  constructor(props: { ssr?: SsrData }) {
    super(props);

    let updatePageMeta = createPageMetaUpdate();

    this.ctx = {
      router: createRouter(),
      pageMeta: props.ssr
        ? props.ssr.result.pageMeta
        : { title: "", description: "", keywords: "" },
      updatePageMeta: () => {
        updatePageMeta(this.ctx.pageMeta);
      }
    };

    if (!props.ssr) {
      this.webSocketClient = new Faye.Client("/faye");
    }

    this.bootstrapRouteData(props.ssr);
    this.bootstrapSvg(props.ssr);
    this.bootstrapRouter(props.ssr);
  }

  bootstrapRouteData(ssr?: SsrData) {
    if (ssr) {
      if (ssr.routeData) {
        this.state.data = ssr.routeData;
      }
    } else if (window["data"]) {
      this.state.data = window["data"];
    }
  }

  bootstrapSvg(ssr?: SsrData) {
    if (ssr) {
      ssr.result.appendToBody.push(getAppendSvgString(svg));
    } else {
      appendSvg(svg);
    }
  }

  bootstrapRouter(ssr?: SsrData) {
    if (ssr) {
      this.ctx.router.start(ssr.url, ssr.routerCallBack);
    } else {
      this.ctx.router.start();
    }

    const routerState = this.ctx.router.getState();
    if (routerState) this.ctx.routerState = routerState;
    if (ssr && !routerState) {
      ssr.result.pageFound = false;
    }
  }

  componentDidMount() {
    this.subscriptions.router = this.ctx.router.subscribe(state => {
      this.ctx.routerState = state.route;
      this.setState(Object.assign({}, this.state));
    });

    if (this.webSocketClient) {
      this.subscriptions.count = this.webSocketClient.subscribe(
        "/count",
        count => {
          this.setState(Object.assign({}, this.state, { count }));
        }
      );
      this.subscriptions.reload = this.webSocketClient.subscribe(
        "/reload",
        () => {
          location.href = location.href;
        }
      );
    }
  }

  componentWillUnmount() {
    if (this.subscriptions.router) {
      (this.subscriptions.router as Unsubscribe)();
    }
    if (this.subscriptions.count) {
      this.subscriptions.count.cancel();
    }
    if (this.subscriptions.reload) {
      this.subscriptions.reload.cancel();
    }
  }

  render() {
    return (
      <>
        {this.ctx.routerState && this.ctx.routerState.name === "home" ? (
          <Home
            ctx={this.ctx}
            data={this.state.data}
            count={this.state.count}
          />
        ) : null}
        {this.ctx.routerState && this.ctx.routerState.name === "profile" ? (
          <Profile ctx={this.ctx} />
        ) : null}
        {!this.ctx.routerState ? <PageNotFound ctx={this.ctx} /> : null}
      </>
    );
  }
}
