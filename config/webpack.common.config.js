const common = require("../lib/node");
const util = common.webpack;
const paths = common.paths;
const TerserPlugin = require("terser-webpack-plugin");
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const StatsPlugin = require("stats-webpack-plugin");
const webpack = require("webpack");

const createCssRule = ({
  test,
  useModules = true,
  envIsTest,
  envIsProd,
  useSass = false,
  usePostCss = true,
  isNode
}) => {
  const useSourceMap = true;

  let cssRule = {
    test: test,
    use: []
  };
  if (!envIsTest) {
    let styleLoader = {
      loader: ExtractCssChunks.loader,
      options: {
        hmr: util.envIsWatch()
      }
    };
    let cssLoader = {
      loader: "css-loader",
      options: { sourceMap: useSourceMap }
    };

    if (useModules) {
      cssLoader.options.modules = { mode: "local" };
      cssLoader.options.modules.localIdentName = !envIsProd
        ? "[path]_[name]_[local]"
        : "[hash:base64:3]";
      if (isNode) {
        cssLoader.options.onlyLocals = true;
      }
    }

    if (!isNode) {
      cssRule.use.push(styleLoader);
    }
    cssRule.use.push(cssLoader);

    if ((useSass || usePostCss) && !isNode) {
      cssLoader.options.importLoaders = 1;

      if (usePostCss) {
        let postCssLoader = {
          loader: "postcss-loader",
          options: {
            sourceMap: useSourceMap,
            // Necessary for external CSS imports to work
            // https://github.com/facebook/create-react-app/issues/2677
            ident: "postcss",
            plugins: [
              require("postcss-flexbugs-fixes"),
              require("postcss-preset-env")({
                autoprefixer: {
                  flexbox: "no-2009"
                },
                stage: 0
              }),
              require("rucksack-css")({
                fallbacks: true,
                // cssnext includes an autoprefixer
                autoprefixer: false
              }),
              require("lost")
            ]
          }
        };
        cssRule.use.push(postCssLoader);
      }

      if (useSass) {
        cssRule.use.push({
          loader: "resolve-url-loader"
        });

        let sassLoader = {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
            // Always has to be enabled for resolve-url-loader
            sourceMap: true,
            sassOptions: {
              sourceMapContents: false
            }
          }
        };

        cssRule.use.push(sassLoader);
      }
    }
  } else {
    // https://github.com/zinserjan/mocha-webpack/blob/master/docs/installation/webpack-configuration.md#without-css-modules
    cssRule.use.push("null-loader");
  }

  return cssRule;
};

module.exports = function({
  env,
  argv,
  isNode = false,
  outputDir,
  isLibrary = false,
  nameSpaceId,
  nameSpace
}) {
  const envIsTest = util.envIsTest();
  const envIsProd = util.envIsProd();

  const config = {
    context: paths.project(),
    devtool: "source-map",
    performance: {
      hints: envIsProd ? "warning" : false
    },
    mode: envIsProd ? "production" : "development",
    // https://github.com/webpack-contrib/css-loader/issues/447#issuecomment-368345121
    node: {
      fs: "empty",
      module: "empty"
    },
    externals: [],
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      alias: {
        "@lib": paths.lib(),
        "@project": paths.project()
      }
    },
    plugins: {
      banner: util.getBannerPlugin({ isNode, env }),
      define: util.getDefinePlugin({ isNode, env, nameSpaceId, isLibrary })
    },
    optimization: {
      // We use a custom logic in getDefinePlugin
      nodeEnv: false,
      minimizer: {
        terser: new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        })
      }
    },
    module: {
      rules: {
        serviceWorkers: {
          test: /\.worker\.(js|ts)$/,
          use: [
            {
              loader: "worker-loader"
            }
          ]
        },
        images: {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                emitFile: false
              }
            }
          ]
        },
        fonts: {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                emitFile: false
              }
            }
          ]
        },
        pcssModule: createCssRule({
          envIsProd,
          envIsTest,
          test: /\.module\.pcss$/,
          isNode
        }),
        pcss: createCssRule({
          envIsProd,
          envIsTest,
          test: /^(?!.*\.module).*\.pcss$/,
          useModules: false,
          isNode
        }),
        sassModule: createCssRule({
          envIsProd,
          envIsTest,
          test: /\.module\.scss$/,
          useSass: true,
          isNode
        }),
        sass: createCssRule({
          envIsProd,
          envIsTest,
          test: /^(?!.*\.module).*\.scss$/,
          useSass: true,
          useModules: false,
          isNode
        }),
        cssModule: createCssRule({
          envIsProd,
          envIsTest,
          test: /\.module\.css$/,
          isNode
        }),
        css: createCssRule({
          envIsProd,
          envIsTest,
          test: /^(?!.*\.module).*\.css$/,
          useModules: false,
          isNode
        }),
        raw: {
          test: /\.txt$/,
          use: [
            {
              loader: "raw-loader"
            }
          ]
        },
        babel: {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
                cacheCompression: envIsProd,
                ...require("./babel.config")({ isNode })
              }
            }
          ]
        }
      }
    }
  };

  if (!isLibrary) {
    // Makes sure that sideeffects of apps are included in the final build
    config.optimization.sideEffects = false;
  }

  if (nameSpace.useStats) {
    config.plugins.stats = new StatsPlugin("stats.json");
  }

  if (envIsTest) {
    const nodeExternals = require("webpack-node-externals");
    config.externals.push(
      nodeExternals({
        // https://www.npmjs.com/package/webpack-node-externals#how-can-i-bundle-required-assets-ie-css-files-from-node_modules
        whitelist: [/\.(?!(?:jsx?|json|tsx?)$).{1,5}$/i]
      })
    );
  } else {
    if (nameSpace.isNode) {
      config.externals.push({
        express: 'require("express")',
        got: 'require("got")'
      });
    }
  }

  if (envIsProd) {
    config.plugins.hashedModuleIds = new webpack.HashedModuleIdsPlugin();
  }

  if (!isNode) {
    config.plugins.extractCssChunks = new ExtractCssChunks({
      filename: !envIsProd ? "[name].css" : "[name].[hash].css",
      chunkFilename: !envIsProd ? "[id].css" : "[id].[hash].css"
    });
  }

  return config;
};
