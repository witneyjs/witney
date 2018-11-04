const util = require("common").webpack;

module.exports = function({ env, argv }) {
  const istanbulRule = {
    test: util.getJsFileTestRegex(),
    enforce: "post",
    // TODO: Test this
    exclude: /node_modules|(\.spec\.(js|jsx|ts|tsx))$/,
    use: [
      {
        loader: "istanbul-instrumenter-loader",
        options: {
          esModules: true
          // https://github.com/webpack-contrib/istanbul-instrumenter-loader/issues/73
          // TODO: This doesnt currently work too
          // produceSourceMap: true
        }
      }
    ]
  };

  let config = {
    target: "node",
    module: {
      rules: {
        istanbul: istanbulRule
      }
    }
  };

  return config;
};
