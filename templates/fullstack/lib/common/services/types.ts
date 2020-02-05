export type NewRoute = {
  id: string;
  path: string;
  controller: Function | boolean;
  action?: string;
  view: string;
};
export type Route = NewRoute & { action: string };
