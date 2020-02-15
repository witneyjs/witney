const shell = require("shelljs");
const pino = require("pino")({ prettyPrint: { forceColor: true } });
const yargs = require("yargs");
const fs = require("fs");
const path = require("path");
const { copyRecursive } = require("hoppla");

const { paths } = require("../../lib/node");
const { loadConfig } = require("../../lib/node/namespace");
const concat = require("../../lib/node/concatJs");
const { runScript } = require("../../lib/node/scripts");

const copyTypesToDist = function({ nameSpaceId }) {
  const typesSrcPath = paths.project(`typings/${nameSpaceId}`);
  const typesExist = fs.existsSync(typesSrcPath);
  if (!typesExist) {
    return;
  }

  const mainTypeFilesSrcPath = path.join(typesSrcPath, "main");
  if (!fs.existsSync(mainTypeFilesSrcPath)) {
    return;
  }

  const typesOutPath = paths.dist(`${nameSpaceId}/types`);
  shell.cp("-r", typesSrcPath, typesOutPath);

  const mainFiles = fs.readdirSync(path.join(typesOutPath, "main"));
  mainFiles.forEach(fileName => {
    if (!fileName.endsWith("ts")) {
      return;
    }

    const typeProxyCode = `export * from "./types/main/${fileName.replace(
      ".d.ts",
      ""
    )}"`;
    fs.writeFileSync(paths.dist(`${nameSpaceId}/${fileName}`), typeProxyCode);
  });
};

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
    command += " WATCH=1";

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

  command += ` --config ${paths.config(`${nameSpaceId}/webpack.config.js`)}`;
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

  const outputPath = !testing
    ? paths.dist(nameSpaceId)
    : paths.testDist(nameSpaceId);
  // Custom version of clean-webpack-plugin =)
  shell.rm("-rf", outputPath);
  shell.mkdir("-p", outputPath);

  // Create raw js file bundles
  if (!testing) {
    if (rawJsBundles) {
      pino.info("Building raw js bundles");
      buildRawJsBundles({
        nameSpaceId,
        rawJsBundles,
        minify: !argv.development
      });
    }

    // For "node" namespaces the svg script doesnt exist, we just ignore the err for now
    try {
      pino.info("Building svg sprites");
      runScript({ scriptType: "svg", nameSpaceId });
    } catch (err) {}
  }

  const nameSpaceConfig = loadConfig(nameSpaceId);

  if (!testing && !argv.watch && !nameSpaceConfig.isNode) {
    const staticDir = paths.static(nameSpaceId);
    if (fs.existsSync(staticDir)) {
      copyRecursive({
        source: staticDir,
        destination: outputPath,
        baseDir: paths.project(),
        force: true,
        exclude: [".gitkeep"]
      });
    }
  }

  runWebpack({
    testing,
    argv,
    nameSpaceId,
    useDevServer,
    endOfOptions
  });

  if (!testing && !argv.watch) {
    copyTypesToDist({ nameSpaceId });
  }
};

module.exports = build;
