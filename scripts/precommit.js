#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");

shell.exec(`node ${path.scripts("reformat.js")}`);
shell.exec(`node ${path.scripts("build.js")}`);
