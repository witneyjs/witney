import { Globals } from "./types";
import { observable } from "alo";

export const createGlobals = function(): Globals {
  let globals = observable(
    {
      data: {},
      router: null as any,
      route: null as any,
      view: null as any,
      helmetContext: {} as any
    },
    false
  );

  return globals;
};
