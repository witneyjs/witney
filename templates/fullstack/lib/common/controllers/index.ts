export const createFrontActionResult = function(result) {
  return {
    data: result.data,
    redirect: result.redirect
  };
};
