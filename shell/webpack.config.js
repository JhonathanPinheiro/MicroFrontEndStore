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
        port: 3000,
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
            name: "shell",
            filename: "remoteEntry.js",
            exposes: {
                "./eventBus": "./shared/eventBus",
                "./events": "./shared/events",
                "./store": "./shared/store/globalStore"
            },
            remotes: {
                products: "products@http://localhost:3001/remoteEntry.js",
                auth: "auth@http://localhost:3002/remoteEntry.js",
                cart: "cart@http://localhost:3003/remoteEntry.js",
                profile: "profile@http://localhost:3004/remoteEntry.js"
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