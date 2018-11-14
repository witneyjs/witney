###hopplaconfig {
  fileName: 'webpack.<%= input.nameSpaceId %>.config.js'
} hopplaconfig###

const common = require("common");
const webpackUtil = common.webpack;
const paths = common.paths;
const _ = require("lodash");

module.exports = function(env, argv) {
  const isNode = <%= input.isNode ? 'true': 'false' %>;
  const nameSpaceId = "<%= input.nameSpaceId %>";
  const libraryName = null;
  const useWorkBox = true;
  let useHot = true;
  let useCodeSplitting = true;

  const envIsTesting = webpackUtil.envIsTesting(env);
  const envIsProd = process.env.NODE_ENV === "production";

  useHot = useHot && !envIsProd && !isNode && !envIsTesting;
  useCodeSplitting = useCodeSplitting && !envIsTesting && !isNode && !useHot;

  let nameSpaceConfig = require("./webpack.common-namespace.config")({
    env,
    argv,
    nameSpaceId,
    useCodeSplitting
  });
  let outputDir = nameSpaceConfig.output.path;
  let commonConfig = require("./webpack.common.config")({
    env,
    argv,
    isNode,
    outputDir
  });
  const envConfig = isNode
    ? require("./webpack.common-back.config.js")({ env, argv })
    : require("./webpack.common-front.config.js")({
        env,
        argv,
        useWorkBox,
        useCodeSplitting,
        useHot,
        outputDir,
        indexHtmlTemplatePath: paths.static(`${nameSpaceId}/index.html`),
        serverContentBase: [outputDir, paths.static(nameSpaceId)]
      });

  let config = commonConfig;
  config = _.merge(config, envConfig);
  config = _.merge(config, nameSpaceConfig);

  if (envIsTesting) {
    const testingConfig = require("./webpack.common-testing.config.js")({
      env,
      argv
    });
    config = _.merge(config, testingConfig);
  }

  if (libraryName) {
    config.output.library = libraryName;
  }

  config = webpackUtil.normalizeConfig(config);
  return config;
};
