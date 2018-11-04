#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");

shell.exec(`node ${paths.scripts("build-salami-back.js")}`);
shell.exec(`node ${paths.scripts("build-salami-front.js")}`);
