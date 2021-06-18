const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const config = {
  entry: {
    home: path.join(__dirname, "home", "index.js"),
    "simple-animation": path.join(__dirname, "simple-animation", "index.js"),
    basic: path.join(__dirname, "basic", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]/index.js",
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStaleWebpackAssets: true,
    }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "home", "index.html"),
      filename: path.join(__dirname, "dist", "index.html"),
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "simple-animation", "index.html"),
      filename: path.join(__dirname, "dist", "simple-animation", "index.html"),
      inject: false,
      chunks: ["simple-animation"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "basic", "index.html"),
      filename: path.join(__dirname, "dist", "basic", "index.html"),
      inject: false,
      chunks: ["basic"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    };
  } else {
    config.mode = "development";
    config.devtool = "cheap-module-source-map";
  }
  return config;
};
