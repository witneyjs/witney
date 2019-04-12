const shell = require("shelljs");
const { paths } = require(".");
const scriptsConfig = require(paths.config("scripts.json"));
const fs = require("fs");

const runConfiguredScripts = function({ scriptType }) {
  const args = process.argv.slice(2).join(" ");
  scriptsConfig[scriptType].nameSpaces.forEach(nameSpaceId => {
    runScript({ scriptType, nameSpaceId, args });
  });
};

const runScript = function({ scriptType, nameSpaceId, args }) {
  const scriptPath = nameSpaceId
    ? paths.scripts(`${nameSpaceId}/${scriptType}.js`)
    : paths.scripts(`${scriptType}.js`);
  if (!fs.existsSync(scriptPath)) {
    throw `Script "${scriptPath}" could not be started because its not existing`;
  }

  return shell.exec(`node ${scriptPath} ${args}`);
};

module.exports = {
  runConfiguredScripts,
  runScript
};
