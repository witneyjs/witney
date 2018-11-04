const common = require("common");
const paths = common.paths;
const util = common.webpack;

const MAIN_DIR_NAME = "main";

module.exports = function({
  env,
  argv,
  nameSpaceId = "",
  useCodeSplitting = true
}) {
  const nameSpaceLibMainDir = paths.lib(`${nameSpaceId}/${MAIN_DIR_NAME}`);

  const envIsTesting = util.envIsTesting(env);
  const nameSpaceOutputDir = envIsTesting
    ? paths.testDist(nameSpaceId)
    : paths.dist(nameSpaceId);

  const outputFileNamePrefix = envIsTesting ? `${nameSpaceId}.` : "";
  const chunkFilename = `${outputFileNamePrefix}[name].[chunkhash].js`;
  // https://github.com/webpack/webpack/issues/6598#issuecomment-399647268
  const outputFileName = useCodeSplitting
    ? chunkFilename
    : `${outputFileNamePrefix}[name].js`;

  const entries = util.getEntriesFromDir(nameSpaceLibMainDir, envIsTesting);

  let config = {
    entry: entries,
    output: {
      filename: outputFileName,
      path: nameSpaceOutputDir
    },
    resolve: {
      modules: [paths.lib(), "node_modules"]
    }
  };

  if (useCodeSplitting) {
    config.output.chunkFilename = chunkFilename;
  }

  return config;
};
