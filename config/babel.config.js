const paths = require("../lib/node/paths");

module.exports = function({ isNode } = { isNode: false }) {
  const envIsProd = process.env.NODE_ENV === "production";

  const transformReactJsxPlugin = [
    "@babel/transform-react-jsx",
    {
      throwIfNamespace: false
    }
  ];

  let emotionPlugin = ["emotion", { sourceMap: true, autoLabel: true }];
  if (envIsProd) {
    emotionPlugin[1].sourceMap = false;
    emotionPlugin[1].autoLabel = false;
    // Increases performance by using a values-cache
    emotionPlugin[1].hoist = true;
  }

  const commonBabelPlugins = [
    "@babel/plugin-transform-runtime",
    // only transpile our source code
    // Doesnt currently work: https://github.com/rollup/rollup-plugin-babel/issues/183
    // "@babel/plugin-external-helpers",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "universal-import",
    "lodash",
    emotionPlugin,
    "macros"
  ];

  const babelPresetEnv = [
    "@babel/preset-env",
    {
      modules: false
    }
  ];

  // Define custom target platforms for babel
  if (isNode) {
    babelPresetEnv[1].targets = {
      node: 12
    };
  }

  const babelPresetTypeScript = [
    "@babel/preset-typescript",
    {
      modules: false
    }
  ];

  return {
    ignore: [
      paths.dist("**"),
      paths.project("node_modules/**"),
      paths.project("bower_components/**")
    ],
    plugins: commonBabelPlugins,
    presets: [babelPresetEnv],
    // https://stackoverflow.com/questions/29576341/what-does-the-code-generator-has-deoptimised-the-styling-of-some-file-as-it-e
    compact: false,
    overrides: [
      {
        test: [paths.lib("**/*.jsx"), paths.lib("**/*.tsx")],
        plugins: [transformReactJsxPlugin]
      },
      {
        test: [paths.lib("**/*.ts"), paths.lib("**/*.tsx")],
        presets: [babelPresetTypeScript]
      }
    ]
  };
};
