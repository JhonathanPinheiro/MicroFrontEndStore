const HtmlWebpackPlugin = require("html-webpack-plugin")
const { ModuleFederationPlugin } = require("webpack").container

module.exports = {

  mode: "development",
  entry: "./src/index.jsx",

  output: {
    publicPath: "auto",
    crossOriginLoading: "anonymous"
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },

  devServer: {
    port: 3001,
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

      name: "products",

      filename: "remoteEntry.js",

      exposes: {
        "./Products": "./src/Products.jsx"
      },

      remotes: {
        shell: "shell@http://localhost:3000/remoteEntry.js"
      },

      shared: {
        react: {
          singleton: true
        },
        "react-dom": {
          singleton: true
        },
        zustand: { singleton: true }
      }

    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })

  ]

}