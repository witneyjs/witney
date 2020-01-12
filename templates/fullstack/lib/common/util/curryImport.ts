export const curryImport = function<
  T extends { [key: string]: any },
  K extends keyof T
>(importFn: () => Promise<T>, key: K) {
  return async () => (await importFn())[key];
};
