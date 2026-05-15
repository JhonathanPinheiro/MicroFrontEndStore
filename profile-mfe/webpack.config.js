const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {

  mode: "development",
  entry: "./src/index.jsx",

  output: {
    publicPath: "auto"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  devServer: {
    port: 3004,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
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

    new ModuleFederationPlugin({

      name: "profile",

      filename: "remoteEntry.js",

      exposes: {
        "./ProfileApp": "./src/Profile.jsx"
      },

      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        }
      }

    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })

  ]

}