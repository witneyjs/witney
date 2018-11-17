const shell = require("shelljs");
const { paths } = require("common");
const pkg = require(paths.project("package.json"));

const runScripts = function(scriptType) {
  const args = process.argv.slice(2).join(" ");
  pkg.common.scripts[scriptType].nameSpaces.forEach(nameSpaceId => {
    shell.exec(
      `node ${paths.scripts(`${scriptType}-${nameSpaceId}.js`)} ${args}`
    );
  });
};

module.exports = runScripts;
