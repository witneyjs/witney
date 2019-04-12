const { paths, writeJsonFile } = require("../../../lib/node");

const finalize = function(hoppla) {
    const namespacesConfigPath = paths.config('namespaces.json');
    const namespacesConfig = require(namespacesConfigPath);
    if (namespacesConfig.ids.indexOf(hoppla.input.id) < 0) {
        namespacesConfig.ids.push(hoppla.input.id);
        writeJsonFile(namespacesConfigPath, namespacesConfig);
    }

    const scriptsConfigPath = paths.config('scripts.json');
    const scriptsConfig = require(scriptsConfigPath);
    [
        scriptsConfig.build.nameSpaces,
        scriptsConfig.coverage.nameSpaces,
        scriptsConfig.test.nameSpaces
    ].forEach((registeredNameSpaces) => {
        if (registeredNameSpaces.indexOf(hoppla.input.id) < 0) {
            registeredNameSpaces.push(hoppla.input.id)
        }
    })
    writeJsonFile(scriptsConfigPath, scriptsConfig);
}

module.exports = finalize;