const shell = require("shelljs");
const { paths } = require("common");
const pino = require("pino")({ prettyPrint: { forceColor: true } });
const yargs = require("yargs");

const build = function({
  nameSpaceId,
  useDevServer = false,
  useBundleAnalyzer = false,
  testing = false
}) {
  let yargsOptions = {
    w: { alias: "watch", type: "boolean" },
    d: { alias: "development", default: false, type: "boolean" },
    t: { alias: "test", type: "boolean" }
  };

  if (useBundleAnalyzer) {
    yargsOptions["bundle-analyzer"] = {
      type: "boolean"
    };
  }

  const argv = yargs.options(yargsOptions).argv;
  const endOfOptions = argv._.join(" ");

  testing = testing || argv.test;

  let command = "";

  command += "npx cross-env";

  if (testing) {
    command += " TEST=1";
  }

  if (argv.development) {
    command += " NODE_ENV=development";
  } else {
    command += " NODE_ENV=production";
  }

  if (argv.bundleAnalyzer) {
    command += " BUNDLE_ANALYZER=1";
  }

  if (argv.watch) {
    if (!testing && useDevServer) {
      command += " npx webpack-dev-server";
      // To access the server from other devices
      command += " --host 0.0.0.0";
      command += " --color";
    } else {
      command += " npx webpack";
      command += " --watch";
      command += " --colors";
    }
  } else {
    command += " npx webpack";
    command += " --colors";
  }

  command += ` --config ${paths.config(`webpack.${nameSpaceId}.config.js`)}`;
  command += ` ${endOfOptions}`;

  pino.info(command);
  shell.exec(command);

  require("./type")({
    nameSpaceId: nameSpaceId
  });
};

module.exports = build;
