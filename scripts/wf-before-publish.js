#!/usr/bin/env node
const shell = require("shelljs");
const { paths } = require("../lib/node");
const pino = require("pino")({ prettyPrint: { forceColor: true } });
const { yesNoQuestion } = require("../lib/node/readline");

const askForSlowTests = true;

Promise.resolve()
  .then(() => {
    if (!askForSlowTests) {
      return;
    }

    return yesNoQuestion({
      question: "Did you run the slow tests (e2e/integration)?"
    }).then(answer => {
      if (!answer) {
        process.exit();
      }
    });
  })
  .then(() => {
    const reformatCommand = `node ${paths.scripts("reformat.js")}`;
    pino.info(reformatCommand);
    shell.exec(reformatCommand);

    const buildCommand = `node ${paths.scripts("build.js")}`;
    pino.info(buildCommand);
    shell.exec(buildCommand);

    const testCommand = `node ${paths.scripts("test.js")}`;
    pino.info(testCommand);
    shell.exec(testCommand);

    pino.info("Manual action: `npx standard-version -a -r major|minor|patch`");
  });
