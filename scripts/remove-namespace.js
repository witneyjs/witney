#!/usr/bin/env node

const shell = require("shelljs");
const { paths, writeJsonFile } = require("../lib/node");
const yargs = require("yargs");
const fs = require("fs");
const path = require("path");

// TODO: Remove namespace from configs (scripts) kinda done, test this further, also remove webpack configs ;)
// TODO: Move namespace scripts to scripts/namespace/xyz done too (not all scripts tested yet)

const argv = yargs.options({
  n: {
    alias: "namespace",
    type: "string",
    describe: "Namespace to remove",
    demandOption: true
  },
  f: { alias: "force", type: "boolean" }
}).argv;

const nameSpaceId = argv.namespace;

const filesToDelete = [
  paths.lib(nameSpaceId),
  paths.config(nameSpaceId),
  paths.static(nameSpaceId),
  paths.dist(nameSpaceId),
  paths.project(`typings/${nameSpaceId}`),
  paths.scripts(nameSpaceId)
]
  .filter(file => {
    return fs.existsSync(file);
  })
  .sort();

const projectPath = paths.project();

const deleteConfirmation = function() {
  console.log("Files to be deleted:");

  const filesToDeleteRelative = filesToDelete.map(file => {
    return path.relative(projectPath, file);
  });
  console.log(JSON.stringify(filesToDeleteRelative, null, "  "));

  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(res => {
    readline.question(
      `Do you want to delete the namespace "${nameSpaceId}" and all of its files? (y/j/n) `,
      answer => {
        res(answer);
        readline.close();
      }
    );
  }).then(answer => {
    return ["y", "j"].indexOf(answer) >= 0;
  });
};

const cleanScriptsConfig = function({ nameSpaceId }) {
  const scriptsConfigPath = paths.config("scripts.json");
  const scriptsConfig = require(scriptsConfigPath);
  let changes = 0;
  Object.keys(scriptsConfig).forEach(scriptName => {
    const scriptConfig = scriptsConfig[scriptName];
    const nameSpaces = scriptConfig.nameSpaces;
    if (!nameSpaces) {
      return;
    }

    const nameSpaceIdIdx = nameSpaces.indexOf(nameSpaceId);
    if (nameSpaceIdIdx < 0) {
      return;
    }

    changes++;
    nameSpaces.splice(nameSpaceIdIdx, 1);
  });

  if (changes === 0) {
    return;
  }

  console.log(path.relative(projectPath, scriptsConfigPath));
  writeJsonFile(scriptsConfigPath, scriptsConfig);
};

const cleanNameSpacesConfig = function({ nameSpaceId }) {
  const nameSpacesConfigPath = paths.config("namespaces.json");
  const nameSpacesConfig = require(nameSpacesConfigPath);
  const nameSpaceIdIdx = nameSpacesConfig.ids.indexOf(nameSpaceId);
  if (nameSpaceIdIdx < 0) {
    return;
  }

  console.log(path.relative(projectPath, nameSpacesConfigPath));
  nameSpacesConfig.ids.splice(nameSpaceIdIdx, 1);
  writeJsonFile(nameSpacesConfigPath, nameSpacesConfig);
};

Promise.resolve()
  .then(() => {
    if (!filesToDelete.length) {
      console.log("No files to be deleted <3");
      return;
    }

    if (!argv.force) {
      return deleteConfirmation()
        .then(userHasConfirmed => {
          if (!userHasConfirmed) {
            console.log("D:");
            process.exit();
          }
        })
        .then(() => {
          console.log("Deleting files/folders");
          filesToDelete.forEach(file => {
            console.log(path.relative(projectPath, file));
            shell.rm("-rf", file);
          });
        });
    }
  })
  .then(() => {
    console.log("Removing namespace from configs");
    cleanScriptsConfig({ nameSpaceId });
    cleanNameSpacesConfig({ nameSpaceId });
  });
