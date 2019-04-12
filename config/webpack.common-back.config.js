module.exports = function({ env, argv }) {
  const config = {
    target: "node",
    node: {
      // https://github.com/webpack/webpack/issues/1599
      // Use the dist folder as dirname for node
      // dont change this without updating the lib/node/paths "project" function
      __dirname: false
    }
  };

  return config;
};
