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
      filename: "./index.ejs",
      template: "./src/views/index.ejs",
      title: "Hello from Webpack"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "./event.ejs",
      template: "./src/views/event.ejs",
      title: "Event from Webpack"
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: "./about.ejs",
      template: "./src/views/about.ejs",
      title: "About from Webpack"
    })
  ]
}
