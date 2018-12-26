#!/usr/bin/env node

const shell = require("shelljs");
const paths = require("common").paths;
const pino = require("pino")({ prettyPrint: { forceColor: true } });

shell.exec(`npx mallery ${paths.config("mallery.config.js")}`);
pino.info(
  'Manual docs action: Commit and run: "git subtree push --prefix static/docs origin gh-pages"'
);
