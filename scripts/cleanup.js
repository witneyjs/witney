#!/usr/bin/env node

const { paths } = require("../packages/common");
const shell = require("shelljs");

shell.rm("-rf", paths.tmp("*"));
shell.rm("-rf", paths.tmp(".*"));
shell.echo("-n", "").to(paths.tmp(".gitkeep"));
