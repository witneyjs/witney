const path = require("path");
const shell = require("shelljs");

const GIT_GET_CONFIG_COMMAND = "git config --global --get ";

const getAuthorName = function() {
  const authorName = shell.exec(GIT_GET_CONFIG_COMMAND + "user.name").stdout;
  if (!authorName) {
    return;
  }

  return authorName.trim();
};

const getAuthorEmail = function() {
  const authorEmail = shell.exec(GIT_GET_CONFIG_COMMAND + "user.email").stdout;
  if (!authorEmail) {
    return;
  }

  return authorEmail.trim();
};

const prepare = function(hoppla) {
  hoppla.input.name = hoppla.input.name || path.basename(hoppla.destination);
  hoppla.input.authorName =
    hoppla.input.authorName || getAuthorName() || "<REPLACE>";
  hoppla.input.authorEmail =
    hoppla.input.authorEmail || getAuthorEmail() || "<REPLACE>";
};

module.exports = prepare;
