const _ = require("lodash");

const common = require("common");
const util = common.webpack;
const paths = common.paths;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");
const micromatch = require("micromatch");
const path = require("path");
const shell = require("shelljs");
const fs = require("fs");

class HtmlWebpackHookPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap("HookedHtmlWebpackPlugin", compilation => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        "HookedHtmlWebpackPlugin",
        (data, cb) => {
          fs.writeFileSync(
            path.join(this.options.outputDir, "app-shell.html"),
            data.html
          );
          cb(null, data);
        }
      );
    });
  }
}

module.exports = function({
  env,
  argv,
  nameSpaceId,
  outputDir,
  useWorkBox,
  useHot,
  useCodeSplitting
}) {
  const envIsTesting = util.envIsTesting(env);
  const devMode = process.env.NODE_ENV !== "production";

  const config = {
    output: {},
    target: "web",
    plugins: {
      miniCssExtract: new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
      })
    },
    module: {
      rules: {
        images: {
          use: [
            {
              loader: "file-loader",
              options: {
                emitFile: true
              }
            }
          ]
        },
        fonts: {
          use: [
            {
              loader: "file-loader",
              options: {
                emitFile: true
              }
            }
          ]
        }
      }
    },
    optimization: {
      minimizer: {
        optimizeCSSAssets: new OptimizeCSSAssetsPlugin({})
      }
    },
    devServer: {
      hot: useHot,
      contentBase: [outputDir, paths.static(nameSpaceId)],
      overlay: true
    },
    // Adds mocks for some common node modules to the browser env
    node: {
      dgram: "empty",
      fs: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty"
    }
  };

  if (useWorkBox) {
    const distFiles = shell.ls("-RA", outputDir);

    let dynamicGlobPatterns = [];
    if (!envIsTesting) dynamicGlobPatterns.push("app-shell.html");
    let workBoxOptions = {
      exclude: [/index\.html/, /\.map$/],
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      globDirectory: outputDir,
      globPatterns: [
        ...["externals.js", "wbc/**/*", "*.wbc.*"].filter(globPattern => {
          // Filter the globPatterns because non matching patterns result in an error:
          // https://github.com/GoogleChrome/workbox/blob/912080a1bf3255c61151ca3d0ebd0895aaf377e2/packages/workbox-build/src/lib/get-file-details.js#L45
          // https://github.com/GoogleChrome/workbox/issues/1353
          // https://github.com/GoogleChrome/workbox/issues/1809
          const matches = micromatch.match(distFiles, globPattern);
          return matches.length > 0;
        }),
        ...dynamicGlobPatterns
      ],
      runtimeCaching: [
        {
          urlPattern: /.*/,
          handler: "networkFirst",
          options: {
            cacheName: "runtime-cache",
            plugins: [
              {
                cachedResponseWillBeUsed: async opt => {
                  if (!opt.cachedResponse) {
                    const response = await caches.match("/app-shell.html");
                    console.log("fallback", response);
                    return response;
                  }

                  return opt.cachedResponse;
                }
              }
            ]
          }
        }
      ]
    };
    config.plugins.workBox = new WorkboxPlugin.GenerateSW(workBoxOptions);
  }

  if (useHot) {
    config.plugins.hot = new webpack.HotModuleReplacementPlugin();
    // https://github.com/webpack/webpack/issues/6642
    config.output.globalObject = "this";
  }

  if (useCodeSplitting) {
    config.plugins.hashedModuleIds = new webpack.HashedModuleIdsPlugin();
    config.optimization = config.optimization || {};
    (config.optimization.splitChunks = {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }),
      (config.optimization.runtimeChunk = "single");
  }

  if (!envIsTesting) {
    let htmlWebpackPluginOptions = {
      template: paths.lib(`${nameSpaceId}/assets/index.html`)
    };
    if (!devMode) {
      htmlWebpackPluginOptions.minify = {
        removeComments: false,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      };
    }
    config.plugins.html = new HtmlWebpackPlugin(htmlWebpackPluginOptions);
    config.plugins.htmlHook = new HtmlWebpackHookPlugin({ outputDir });
  }

  if (process.env.BUNDLE_ANALYZER) {
    config.plugins.bundleAnalyzer = new BundleAnalyzerPlugin();
  }

  return config;
};
