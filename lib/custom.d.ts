declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.txt" {
  const content: any;
  export default content;
}

declare module "*.css" {
  const content: any;
  export default content;
}

declare module "*.pcss" {
  const content: any;
  export default content;
}

declare module "*.worker.js" {
  const content: any;
  export default content;
}

declare module "*.worker.ts" {
  const content: any;
  export default content;
}

declare const BUILD: {
  NAMESPACE_ID: string;
  NODE_ENV: string;
  TEST: boolean;
  IS_NODE: boolean;
  IS_DEV: boolean;
  IS_PROD: boolean;
};
