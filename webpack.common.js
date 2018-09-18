'use strict';

var config = {
    context: __dirname + "/web-app",
    entry: {
        // vendors: ["angular", "angular-ui-router"],
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
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: { //  name of the group. Create a vendors chunk, which includes all code from node_modules in the whole application.
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }
};

module.exports = config;
