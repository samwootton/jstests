
const path = require("path");

module.exports = {
  entry: "./src/launch.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // apply to .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  mode: "development",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 3000,
    open: true
  }
};
