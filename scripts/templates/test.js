const shell = require("shelljs");
const { paths } = require("common");
const pino = require("pino")({ prettyPrint: { forceColor: true } });
const yargs = require("yargs");
const fs = require("fs");

const test = function({ nameSpaceId }) {
  const argv = yargs.options({
    build: { type: "boolean", default: true },
    "no-build": { type: "boolean" },
    w: { alias: "watch", type: "boolean" }
  }).argv;
  const endOfOptions = argv._.join(" ");

  if (argv["build"] && !argv.watch) {
    require("./build")({
      nameSpaceId,
      testing: true
    });
  }

  const testFileGlob = paths.testDist(`${nameSpaceId}/${nameSpaceId}.*.js`);
  const testFiles = shell.ls(testFileGlob);

  pino.info("Files:", testFiles);

  let command = `npx nyc`;
  command += " --instrument false";
  command += " --source-map false";
  command += " --extension .ts";
  // TODO: the all parameter currently doesnt work as expected and reduces the performance a lot
  // command += ' --all'
  command += ` --include lib/${nameSpaceId}`;
  command += " --exclude **/*.spec.*";
  command += " --exclude **/main/test.*";
  command += " --cache";
  command += ` --temp-directory ${paths.tmp(`.nyc_output_${nameSpaceId}`)}`;

  command += " mocha";
  command += argv.watch ? " --watch" : "";
  command += " -r jsdom-global/register";
  command += " --colors";
  command += " --growl";
  command += ` ${testFiles.join(" ")}`;
  command += ` ${endOfOptions}`;

  pino.info(command);
  const result = shell.exec(command);
  const failedTestsCount = result.code;
  fs.writeFileSync(
    paths.tmp(`.nyc_output_${nameSpaceId}/failedTestsCount.txt`),
    failedTestsCount
  );
};

module.exports = test;
