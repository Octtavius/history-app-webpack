'use strict';
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    context: __dirname + "/web-app",
    entry: {
        // vendor: ["angular", "angular-ui-router"],
        app: "./index"
    },
    output: {
        path: __dirname + "/bundles",
        filename: "[name].[chunkhash].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {loader: 'angular1-templateurl-loader'}
                ]
            },
            {
                //THIS IS THE MAGIC!
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'raw-loader'
            }
        ]// THAT WAS THE MAGIC
    },
    devtool: "source-map",
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: { //  name of the group. Create a vendors chunk, which includes all code from node_modules in the whole application.
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({ // generate the index.html
            template: './index.html',
            inject: 'body', // where to insert the js references
            filename: "../web-app/generated-index.html" // where to create the file. default is in folder where bundles are created
        })
    ]
};

module.exports = config;