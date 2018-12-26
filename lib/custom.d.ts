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

declare const ENV: {
  TEST: boolean;
  IS_NODE: boolean;
  IS_PROD: boolean;
};
