const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([]),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "./index.html",
      template: "./src/views/index.html",
      title: "Hello Webpack"
    })
  ]
}
