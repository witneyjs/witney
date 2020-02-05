const webpack = require("webpack");

module.exports = function({ env, argv, isLibrary }) {
  let config = {
    output: {},
    target: "node",
    node: {
      // https://github.com/webpack/webpack/issues/1599
      // Use the dist folder as dirname for node
      // dont change this without updating the lib/node/paths "project" function
      __dirname: false
    },
    plugins: {
      // The LimitChunkCountPlugin with maxChunks: 1 ensures only one file is
      // generated for your server bundle so it can be run synchronously.
      limitChunkCount: new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    }
  };

  if (isLibrary) {
    config.output.libraryTarget = "commonjs2";
  }

  return config;
};
