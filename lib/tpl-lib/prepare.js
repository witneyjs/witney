const path = require("path");
const { spawn } = require("../../scripts/lib");

const GIT_GET_CONFIG_COMMAND = ["config", "--global", "--get"];

const getAuthorName = function () {
  const authorName = spawn("git", [...GIT_GET_CONFIG_COMMAND, "user.name"], {
    encoding: "utf8",
  }).stdout;
  if (!authorName) {
    return;
  }

  return authorName.trim();
};

const getAuthorEmail = function () {
  const authorEmail = spawn("git", [...GIT_GET_CONFIG_COMMAND, "user.email"], {
    encoding: "utf8",
  }).stdout;
  if (!authorEmail) {
    return;
  }

  return authorEmail.trim();
};

const prepare = function (hoppla) {
  hoppla.input.name = hoppla.input.name || path.basename(hoppla.destination);
  hoppla.input.authorName =
    hoppla.input.authorName || getAuthorName() || "<REPLACE>";
  hoppla.input.authorEmail =
    hoppla.input.authorEmail || getAuthorEmail() || "<REPLACE>";
};

module.exports = prepare;
