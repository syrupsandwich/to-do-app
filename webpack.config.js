const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: false,
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: "./dist",
  },
  entry: {
    main: "./src/program/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "to-do-bundle.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index-template.html",
      title: "To Do App",
      filename: "index.html",
    }),
    new webpack.SourceMapDevToolPlugin({}),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
