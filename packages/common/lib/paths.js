const path = require("path");

const project = (suffix = "") => path.resolve(__dirname, "../../..", suffix);
const scripts = (suffix = "") => path.resolve(project(), "scripts", suffix);
const lib = (suffix = "") => path.resolve(project(), "lib", suffix);
const config = (suffix = "") => path.resolve(project(), "config", suffix);
const dist = (suffix = "") => path.resolve(project(), "dist", suffix);
const tmp = (suffix = "") => path.resolve(project(), "tmp", suffix);
const staticDir = (suffix = "") => path.resolve(project(), "static", suffix);
const testDist = (suffix = "") => path.resolve(tmp(), "test", suffix);
const packages = (suffix = "") => path.resolve(project(), "packages", suffix);

module.exports = {
  project,
  packages,
  scripts,
  lib,
  config,
  dist,
  testDist,
  tmp,
  static: staticDir
};
