/* eslint-env node */

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HTMLMinimizerPlugin = require("html-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function () {
  return {
    mode: "production",
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[id].[hash].css",
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(s?)css$/,
          exclude: /\.module.(s(a|c)ss)$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
          sideEffects: true,
        },
        {
          test: /\.module\.(s?)css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: false,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: ["...", new CssMinimizerPlugin(), new HTMLMinimizerPlugin()],
      splitChunks: {
        chunks: "all",
      },
    },
    devtool: false,
  };
};
