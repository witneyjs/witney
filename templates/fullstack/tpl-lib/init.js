const path = require("path");

module.exports = function(hoppla) {
  const nameSpaceTemplate = path.join(
    hoppla.destination,
    "templates",
    "namespace"
  );

  const config = {
    template: nameSpaceTemplate,
    destination: hoppla.tmp
  };

  return Promise.resolve()
    .then(() => {
      return hoppla.call({
        ...config,
        input: {
          id: "front"
        }
      });
    })
    .then(() => {
      return hoppla.call({
        ...config,
        input: {
          id: "back",
          isNode: true
        }
      });
    });
}