const webpackUtil = require("./webpack");
const paths = require("./paths");

let configCache = {};

const loadConfig = function(nameSpaceId) {
  if (configCache[nameSpaceId]) {
    return configCache[nameSpaceId];
  }

  const envIsWatch = webpackUtil.envIsWatch();
  const envIsTest = webpackUtil.envIsTest();
  const envIsProd = webpackUtil.envIsProd();

  const config = require(paths.config(`${nameSpaceId}/config.js`))({
    envIsWatch,
    envIsTest,
    envIsProd
  });

  configCache[nameSpaceId] = config;

  return config;
};

module.exports = {
  loadConfig
};
