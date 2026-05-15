const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

  mode: "development",

  entry: "./src/index.jsx",

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  devServer: {
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react"
          ]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]

}