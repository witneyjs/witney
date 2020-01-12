export const createActionResult = function<
  R extends { data?: any; redirect?: { url: string } }
>(result: R) {
  return result;
};
