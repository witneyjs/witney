const path = require("path");
const { execSync } = require("child_process");

const finalize = function(hoppla) {
  if (hoppla.input.type === "demo") {
    execSync(`npm install --prefix "${hoppla.destination}"`, {
      stdio: "inherit"
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
};

module.exports = finalize;
