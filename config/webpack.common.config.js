const common = require("../lib/node");
const util = common.webpack;
const paths = common.paths;
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const createCssRule = ({
  test,
  useModules = true,
  envIsTesting,
  envIsProd,
  useSass = false,
  usePostCss = false,
  isNode
}) => {
  const useSourceMap = true;

  let cssRule = {
    test: test,
    use: []
  };
  if (!envIsTesting) {
    let styleLoader = {
      loader: !envIsProd ? "style-loader" : MiniCssExtractPlugin.loader
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
            sourceMapContents: false
          }
        };

        // Add Fiber if it is installed
        try {
          const Fiber = require("fibers");
          sassLoader.options.fiber = Fiber;
        } catch (err) {}

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
  nameSpaceId
}) {
  const envIsTesting = util.envIsTesting(env);
  const envIsProd = process.env.NODE_ENV === "production";

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
          envIsTesting,
          test: /\.module\.pcss$/,
          usePostCss: true,
          isNode
        }),
        pcss: createCssRule({
          envIsProd,
          envIsTesting,
          test: /^(?!.*\.module).*\.pcss$/,
          usePostCss: true,
          useModules: false,
          isNode
        }),
        sassModule: createCssRule({
          envIsProd,
          envIsTesting,
          test: /\.module\.scss$/,
          useSass: true,
          isNode
        }),
        sass: createCssRule({
          envIsProd,
          envIsTesting,
          test: /^(?!.*\.module).*\.scss$/,
          useSass: true,
          useModules: false,
          isNode
        }),
        cssModule: createCssRule({
          envIsProd,
          envIsTesting,
          test: /\.module\.css$/,
          isNode
        }),
        css: createCssRule({
          envIsProd,
          envIsTesting,
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

  if (envIsTesting || isNode) {
    const nodeExternals = require("webpack-node-externals");
    config.externals.push(
      nodeExternals({
        // https://www.npmjs.com/package/webpack-node-externals#how-can-i-bundle-required-assets-ie-css-files-from-node_modules
        whitelist: [
          /\.(?!(?:jsx?|json|tsx?)$).{1,5}$/i,
          /react-router5/,
          /react-helmet-async/
        ]
      })
    );
  }

  return config;
};
