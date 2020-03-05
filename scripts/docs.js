#!/usr/bin/env node

const shell = require("shelljs");
const { paths } = require("../lib/node");
const pino = require("pino")({ prettyPrint: { forceColor: true } });

shell.exec(`npx mallery ${paths.config("mallery.config.js")}`);
pino.info(
  "Manual docs action: Commit and run: `node ./scripts/docs-subtree.js`"
);
