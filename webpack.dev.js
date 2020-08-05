const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = {
  ...commonConfig,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: path.join(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["react-refresh/babel"]
            }
          },
          "ts-loader"
        ]
      },
      ...commonConfig.module.rules
    ]
  },
  plugins: [new ReactRefreshWebpackPlugin(), ...commonConfig.plugins],
  devtool: "inline-source-map"
};
