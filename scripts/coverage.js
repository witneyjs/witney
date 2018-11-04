#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");

shell.exec(`node ${paths.scripts("coverage-salami-front.js")}`);
shell.exec(`node ${paths.scripts("coverage-salami-back.js")}`);
