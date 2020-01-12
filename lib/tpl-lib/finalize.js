const path = require("path");
const { execSync } = require("child_process");

const finalize = function(hoppla) {
  if (hoppla.input.install) {
    execSync("npm install", {
      stdio: "inherit",
      cwd: hoppla.destination
    });
  }
};

module.exports = finalize;
