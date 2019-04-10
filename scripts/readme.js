#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("../packages/common");
const yargs = require("yargs");

const argv = yargs.options({
  q: { alias: "quick", type: "boolean", describe: "Skip js build and tests" }
}).argv;

const input = {
  runQuick: argv.quick
};

let command = "npx hoppla -f";
command += ` -t ${paths.project("templates/readme")}`;
command += ` -d ${paths.project()}`;
command += ` -i "${JSON.stringify(input).replace(/"/g, '\\"')}"`;
shell.exec(command);
