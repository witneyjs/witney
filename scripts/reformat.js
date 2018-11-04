#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("common");
const pino = require("pino")({ prettyPrint: { forceColor: true } });

let directories = [
  paths.lib(),
  paths.packages(),
  paths.config(),
  paths.scripts()
];

directories.forEach(directory => {
  pino.info(directory);
  shell.exec(`npx prettier --write "${directory}/**/*(*.js|*.jsx|*.ts|*.tsx)"`);
});
