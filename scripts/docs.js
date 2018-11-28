#!/usr/bin/env node

const shell = require("shelljs");
const paths = require("common").paths;
shell.exec(`npx mallery ${paths.config("mallery.config.js")}`);
