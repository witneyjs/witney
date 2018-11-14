#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");
const pkg = require(paths.project('package.json'));

const scriptType = 'coverage';
const args = process.argv.slice(2).join(" ");
pkg.common.scripts[scriptType].nameSpaces.forEach((nameSpaceId) => {
    shell.exec(`node ${paths.scripts(`${scriptType}-${nameSpaceId}.js`)} ${args}`);
})
