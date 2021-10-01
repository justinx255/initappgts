const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
    require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = {
    entry: "./src/index",
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        port: 3000,
        historyApiFallback: true,
        hot: "only",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },
    resolve: {
        extensions: [".js", ".mjs", ".jsx", ".css"],
        alias: {
            events: "events",
        },
    },
    // output: {
    //     publicPath: "auto",
    //     chunkFilename: "[id].[contenthash].js",
    // },
    module: {
        rules: [
            {
                test: /bootstrap\.js$/,
                loader: "bundle-loader",
                options: {
                    lazy: true
                }
            },
            {
                test: /\.m?js$/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "shell",
            // remotes: {
            //     order: "order@http://localhost:3003/remoteEntry.js",
            //     dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
            //     register: "register@http://localhost:3002/remoteEntry.js",
            // },
            remotes: {
                Order: "Order@http://localhost:3003/remoteEntry.js",
                Dashboard: "Dashboard@http://localhost:3001/remoteEntry.js",
                Register: "Register@http://localhost:3002/remoteEntry.js",
            },
            shared: ["react", "react-dom",
                // "./src/Service",
            ],
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
