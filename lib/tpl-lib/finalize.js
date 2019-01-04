const path = require("path");
const { execSync } = require("child_process");

const finalize = function(hoppla) {
  if (hoppla.input.type === "demo") {
    execSync("npm install", {
      stdio: "inherit",
      cwd: hoppla.destination
    });

    const nameSpaceTemplate = path.join(
      hoppla.destination,
      "templates",
      "namespace"
    );

    const config = {
      template: nameSpaceTemplate,
      destination: hoppla.destination
    };

    Promise.resolve()
      .then(() => {
        return hoppla.call({
          ...config,
          input: {
            id: "front",
            backId: "back"
          }
        });
      })
      .then(() => {
        return hoppla.call({
          ...config,
          input: {
            id: "back",
            frontId: "front",
            isNode: true
          }
        });
      });
  }
};

module.exports = finalize;
