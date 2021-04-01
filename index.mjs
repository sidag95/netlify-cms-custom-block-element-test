import webpack from "webpack";
import fs from "fs";
import express from "express";
import sirv from "sirv";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const webpackConfig = {
  mode: "development",
  entry: path.join(process.env.PWD, "static", "admin", "index.mjs"),
  output: {
    path: path.join(process.env.PWD, "static/admin"),
  },
  optimization: { minimize: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "source-map-loader",
        enforce: "pre",
      },
      {
        test: /\.mjs$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  devtool: "eval-source-map",
};

webpack(webpackConfig, (err, stats) => {
  if (err) {
    console.error("Error!");
  } else {
    console.log(stats.toString({ colors: true }));
    express()
      .get("/admin", (req, res) => {
        const html = fs
          .readFileSync(path.join(process.env.PWD, "static/admin/index.html"))
          .toString();
        res.send(html);
      })
      .use("/admin", sirv("static/admin", { dev: true }))
      .listen("8888", () => {
        console.log("Listening on 8888");
      });
  }
});
