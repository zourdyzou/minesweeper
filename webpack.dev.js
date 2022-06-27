// cspell:words pmmmwh
/* eslint-env node */

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = function () {
  return {
    mode: "development",
    plugins: [
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(s?)css$/,
          exclude: /\.module\.(s?)css$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
          sideEffects: true,
        },
        {
          test: /\.module\.(s?)css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      hot: true,
      port: 3000,
      static: false,
      compress: true,
      host: "localhost",
      allowedHosts: "all",
      client: {
        logging: "warn",
        overlay: false,
      },
      historyApiFallback: true,
    },
    devtool: "source-map",
  };
};
