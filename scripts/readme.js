#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");

shell.exec(
  `npx hoppla -t ${paths.project("templates/readme")} -f -d ${paths.project()}`
);
