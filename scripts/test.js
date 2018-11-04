#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");

shell.exec(`node ${paths.scripts("test-salami-front.js")}`);
