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

    const readmeCommand = `node ${paths.scripts("readme.js")}`;
    pino.info(readmeCommand);
    shell.exec(readmeCommand);

    const docsCommand = `node ${paths.scripts("docs.js")}`;
    pino.info(docsCommand);
    shell.exec(docsCommand);
  });
