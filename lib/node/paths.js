// WARNING: DONT MOVE this file around without updating the "project" function
// __dirname in built node files is = dist/nameSpaceId folder, but it is lib/node in non-webpack
// we are LUCKY that ../.. is the same in webpack and non-webpack

const path = require("path");

const project = (suffix = "") => path.resolve(__dirname, "../..", suffix);
const scripts = (suffix = "") => path.resolve(project(), "scripts", suffix);
const lib = (suffix = "") => path.resolve(project(), "lib", suffix);
const config = (suffix = "") => path.resolve(project(), "config", suffix);
const dist = (suffix = "") => path.resolve(project(), "dist", suffix);
const tmp = (suffix = "") => path.resolve(project(), "tmp", suffix);
const staticDir = (suffix = "") => path.resolve(project(), "static", suffix);
const testDist = (suffix = "") => path.resolve(tmp(), "test", suffix);

module.exports = {
  project,
  scripts,
  lib,
  config,
  dist,
  testDist,
  tmp,
  static: staticDir
};
