const shell = require("shelljs");
const { paths } = require("common");
const pino = require("pino")({ prettyPrint: { forceColor: true } });
const yargs = require("yargs");
const fs = require("fs");
const path = require("path");

module.exports = function({ nameSpaceId }) {
  shell.rm("-rf", paths.project(`typings/${nameSpaceId}`));
  const tmpTsconfig = paths.tmp(`tsconfig.${nameSpaceId}.json`);
  shell.rm("-rf", tmpTsconfig);

  fs.writeFileSync(
    tmpTsconfig,
    JSON.stringify(
      {
        extends: path.relative(paths.tmp(), paths.project("tsconfig.json")),
        include: [
          paths.lib(`${nameSpaceId}/main/*`),
          paths.lib("./custom.d.ts"),
          paths.lib(`${nameSpaceId}/custom.d.ts`),
        ]
      },
      null,
      "  "
    )
  );

  let command = "npx tsc";
  command += ` -p ${tmpTsconfig}`;

  command += ` --noEmit false`;
  command += ` --outDir ${paths.tmp("tsout")}`;
  command += ` --allowJs false`;
  command += ` --declaration true`;
  command += ` --declarationDir ${paths.project(`typings/${nameSpaceId}`)}`;
  command += ` --declarationMap`;

  pino.info(command);
  return shell.exec(command);
};
