export type NewRoute = {
  id: string;
  path: string;
  controller: Function | boolean;
  action?: string;
  view: Function;
};
export type Route = NewRoute & { action: string };
