const glob = require("glob");
const path = require("path");
const paths = require("./paths");
const _ = require("lodash");

const normalizeConfig = function(webpackConfig) {
  webpackConfig.optimization.minimizer = _.values(
    webpackConfig.optimization.minimizer
  );

  // Our config has named module rules, convert to array
  webpackConfig.module.rules = _.compact(_.values(webpackConfig.module.rules));

  // Apply custom plugin order and convert to array
  const pluginOrder = ["html", "workBox"];
  const pluginOrderObj = pluginOrder.reduce((acc, key) => {
    acc[key] = null;
    return acc;
  }, {});
  const orderedPlugins = _.merge(pluginOrderObj, webpackConfig.plugins);
  webpackConfig.plugins = _.compact(_.values(orderedPlugins));

  return webpackConfig;
};

const getEntriesFromDir = function(dir, testing) {
  const fileExtensions = ["js", "jsx", "mjs", "ts", "tsx"];

  const mainFileGlob = fileExtensions
    .map(ext => {
      return `*.${ext}`;
    })
    .join("|");

  const pathGlob = path.join(dir, `*(${mainFileGlob})`);

  return glob.sync(pathGlob).reduce((entries, file) => {
    // Test files aren't main files
    const basenameWithExtension = path.basename(file);
    const isTestFile = basenameWithExtension.includes("test.");
    if ((!testing && isTestFile) || (testing && !isTestFile)) {
      return entries;
    }

    const extension = path.extname(file);
    const basename = path.basename(file, extension);
    entries[basename] = file;

    return entries;
  }, {});
};

const envIsTesting = function(env) {
  return process.env.TEST === "1";
};

const getJsFileTestRegex = function() {
  return /\.(js|jsx|ts|tsx)$/;
};

const getJsLicenseBanner = () => {
  const pkg = require(paths.project("package.json"));

  let bannerText = '';
  bannerText += `\n/*!`;
  bannerText += `\n * ${pkg.name}`;
  if (pkg.common && pkg.common.bannerCopyright) {
    bannerText += `\n * ${pkg.common.bannerCopyright}`;
  }
  bannerText += `\n * ${pkg.license} Licensed`;
  if (pkg.common && pkg.common.licenseUrl) {
    bannerText += "\n * " + pkg.common.licenseUrl;
  }
  bannerText += "\n*/\n";

  return bannerText;
}

const getBannerPlugin = ({ isNode = false, env }) => {
  const webpack = require("webpack");
  const isTesting = envIsTesting(env);

  let bannerText = "";

  if (!isTesting) {
    bannerText = getJsLicenseBanner();
  }

  if (isNode) {
    bannerText = `#!/usr/bin/env node
${bannerText}`;
  }

  if (isTesting || isNode) {
    bannerText = `${bannerText}
  require("source-map-support").install();`;
  }

  bannerText = `${bannerText}
  `;

  return new webpack.BannerPlugin({
    banner: bannerText,
    raw: true,
    test: getJsFileTestRegex()
  });
};

const getDefinePlugin = ({ isNode, env }) => {
  const webpack = require("webpack");
  const isTesting = envIsTesting(env);

  let variables = {
    ENV: {
      // Add custom variables here
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      TEST: JSON.stringify(isTesting),
      IS_NODE: JSON.stringify(isNode),
      IS_DEV: JSON.stringify(process.env.NODE_ENV === "development"),
      IS_PROD: JSON.stringify(process.env.NODE_ENV === "production")
    }
  };

  // process env is used even by front libraries to
  // check the env (https://github.com/reduxjs/redux/blob/master/src/index.js#L16)
  if (!isNode) {
    variables["process.env"] = {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    };
  }

  return new webpack.DefinePlugin(variables);
};

module.exports = {
  getEntriesFromDir,
  envIsTesting,
  getJsFileTestRegex,
  getJsLicenseBanner,
  getDefinePlugin,
  getBannerPlugin,
  normalizeConfig
};
