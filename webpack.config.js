'use strict';

var config = {
    context: __dirname + "/web-app",
    entry: {
        app: "./index",
        vendor: ["angular", "angular-ui-router"]
    },
    output: {
        path: __dirname + "/bundles",
        filename: "[name].bundle.js"
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
        ]// TAHT WAS THE MAGIC
    }
};

module.exports = config;