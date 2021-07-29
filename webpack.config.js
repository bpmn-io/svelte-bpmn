const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require("path");

const sass = require("svelte-preprocess-sass").sass;

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte")
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: {
              style: sass({}, { name: "scss" })
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.bpmn$/,
        loader: "raw-loader"
      }
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'assets/**', context: 'node_modules/bpmn-js/dist/' },
      ]
    })
  ],
  devtool: prod ? false : "source-map"
};
