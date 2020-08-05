const path = require("path");
const commonConfig = require("./webpack.common");

module.exports = {
  ...commonConfig,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        loader: "ts-loader"
      },
      ...commonConfig.module.rules
    ]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    libraryTarget: "umd"
  }
};
