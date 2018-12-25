const path = require("path");
const shell = require("shelljs");

const mergeDirectories = function({ sourceDir, destinationDir }) {
  if (!shell.ls("-A", sourceDir).length) {
    return;
  }

  sourceDir = path.join(sourceDir, "*");
  shell.cp("-r", sourceDir, destinationDir);
};

module.exports = mergeDirectories;
