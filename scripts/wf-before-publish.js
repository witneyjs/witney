#!/usr/bin/env node
const shell = require("shelljs");
const paths = require("common").paths;
const pino = require("pino")({ prettyPrint: { forceColor: true } });

const reformatCommand = `node ${paths.scripts("reformat.js")}`;
pino.info(reformatCommand);
shell.exec(reformatCommand);

const buildCommand = `node ${paths.scripts("build.js")}`;
pino.info(buildCommand);
shell.exec(buildCommand);

const readmeCommand = `node ${paths.scripts("readme.js")}`;
pino.info(readmeCommand);
shell.exec(readmeCommand);

const docsCommand = `node ${paths.scripts("docs.js")}`;
pino.info(docsCommand);
shell.exec(docsCommand);
