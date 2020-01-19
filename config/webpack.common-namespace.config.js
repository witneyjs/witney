const common = require("../lib/node");
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

  const envIsTest = util.envIsTest(env);
  const nameSpaceOutputDir = envIsTest
    ? paths.testDist(nameSpaceId)
    : paths.dist(nameSpaceId);

  const outputFileNamePrefix = envIsTest ? `${nameSpaceId}.` : "";
  const chunkFilename = `${outputFileNamePrefix}[name].[chunkhash].js`;
  // https://github.com/webpack/webpack/issues/6598#issuecomment-399647268
  const outputFileName = useCodeSplitting
    ? chunkFilename
    : `${outputFileNamePrefix}[name].js`;

  const entries = util.getEntriesFromDir(nameSpaceLibMainDir, envIsTest);

  let config = {
    entry: entries,
    output: {
      filename: outputFileName,
      path: nameSpaceOutputDir
    }
  };

  if (useCodeSplitting) {
    config.output.chunkFilename = chunkFilename;
  }

  return config;
};
