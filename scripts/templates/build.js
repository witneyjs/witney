const shell = require("shelljs");
const pino = require("pino")({ prettyPrint: { forceColor: true } });
const yargs = require("yargs");

const { paths } = require("common");
const concat = require("./concatJs");

const checkStaticTypes = function({ nameSpaceId }) {
  const result = require("./type")({
    nameSpaceId: nameSpaceId
  });

  return result.code === 0;
};

const buildRawJsBundles = function({
  minify = true,
  nameSpaceId,
  rawJsBundles
}) {
  Object.entries(rawJsBundles).forEach(([fileName, bundle]) => {
    const outputPath = paths.dist(`${nameSpaceId}/${fileName}`);

    const concatOptions = Object.assign(
      {
        destination: outputPath,
        minify: minify
      },
      bundle
    );

    concat(concatOptions);
  });
};

const addFilesToDist = function({ outputPath, nameSpaceId }) {
  // TODO: Add check if there actually are static files
  const staticDirFiles = paths.static(`${nameSpaceId}/*`);
  shell.cp('-r', staticDirFiles, outputPath);
}

const runWebpack = function({
  testing,
  argv,
  useDevServer,
  nameSpaceId,
  endOfOptions
}) {
  // Create webpack command
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
};

const build = function({
  nameSpaceId,
  useDevServer = false,
  useBundleAnalyzer = false,
  // Creates extra bundles with files which will be concatinated without webpack
  rawJsBundles = false,
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

  if (!testing && !argv.watch) {
    if (!checkStaticTypes({ nameSpaceId })) {
      pino.error(
        "Error while checking the static types, please check previous logs"
      );
      return;
    }
  }

  const outputPath = paths.dist(nameSpaceId);
  // Custom version of clean-webpack-plugin =)
  shell.rm("-rf", outputPath);
  shell.mkdir(outputPath);

  // Create raw js file bundles
  if (!testing && rawJsBundles) {
    pino.info("Building raw js bundles");
    buildRawJsBundles({ nameSpaceId, rawJsBundles, minify: !argv.development });
  }

  runWebpack({
    testing,
    argv,
    nameSpaceId,
    useDevServer,
    endOfOptions
  });

  if (!testing && !argv.watch) {
    addFilesToDist({
      outputPath,
      nameSpaceId
    });
  }
};

module.exports = build;
