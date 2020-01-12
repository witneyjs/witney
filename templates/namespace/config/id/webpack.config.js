const common = require("../../lib/node");
const webpackUtil = common.webpack;
const paths = common.paths;
const _ = require("lodash");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const pkg = require(paths.project("package.json"));

module.exports = function(env, argv) {
  const nameSpace = require("./config")();

  const envIsWatching = webpackUtil.envIsWatching();
  const envIsTesting = webpackUtil.envIsTesting();
  const envIsProd = process.env.NODE_ENV === "production";

  const nameSpaceId = nameSpace.id;
  const isLibrary = nameSpace.isLibrary;
  const useWorkBox = nameSpace.useWorkBox && !nameSpace.isNode;
  const useHot =
    nameSpace.useHot &&
    envIsWatching &&
    !envIsProd &&
    !nameSpace.isNode &&
    !envIsTesting;
  const useCodeSplitting =
    nameSpace.useCodeSplitting && !envIsTesting && !nameSpace.isNode && !useHot;
  const useHtmlCreation = nameSpace.useHtmlCreation && !nameSpace.isNode;

  let nameSpaceConfig = require("../webpack.common-namespace.config")({
    env,
    argv,
    nameSpaceId,
    useCodeSplitting
  });
  let outputDir = nameSpaceConfig.output.path;
  let commonConfig = require("../webpack.common.config")({
    env,
    argv,
    isNode: nameSpace.isNode,
    outputDir,
    nameSpaceId,
    isLibrary
  });
  const envConfig = nameSpace.isNode
    ? require("../webpack.common-back.config.js")({ env, argv, isLibrary })
    : require("../webpack.common-front.config.js")({
        env,
        argv,
        nameSpaceId,
        useWorkBox,
        useCodeSplitting,
        useHot,
        outputDir,
        isLibrary,
        useHtmlCreation
      });

  let config = commonConfig;
  config = _.merge(config, envConfig);
  config = _.merge(config, nameSpaceConfig);

  if (envIsTesting) {
    const testingConfig = require("../webpack.common-testing.config.js")({
      env,
      argv
    });
    config = _.merge(config, testingConfig);
  }

  if (isLibrary) {
    // Add your custom library build settings here
    config.output.library = [pkg.name, "[name]"];
    // config.output.library = pkg.name;
  }

  if (!nameSpace.isNode) {
    // TODO: Add port config by backId
    // Example websocket proxy
    /*
    config.devServer.proxy = {
      "/faye": {
        target: "ws://localhost:20000/faye",
        ws: true
      }
    };

    config.output.publicPath = "/";

    config.devServer = {
      ...config.devServer,
      historyApiFallback: true
      // Add this if you use multiple domains for development / proxies
      // headers: { 'Access-Control-Allow-Origin': '*' }
    };
    */
  }

  if (config.devServer) {
    config.devServer.port = nameSpaceConfig.devServerPort;
  }

  config.plugins.filterWarnings = new FilterWarningsPlugin({
    exclude: /You're using the following Workbox configuration options:/
  });

  config = webpackUtil.normalizeConfig(config);
  return config;
};
