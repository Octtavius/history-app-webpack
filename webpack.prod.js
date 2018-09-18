/**
 * Created by I323506 on 17/09/2018.
 */

var merge = require('webpack-merge');
var common = require('./webpack.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
    mode: 'production',
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({ // generate the index.html
            template: './index-template.html',
            inject: 'body', // where to insert the js references
            filename: "../web-app/generated-prod-index.html" // where to create the file. default is in folder where bundles are created
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // the object has most important properties enabled by default
            new UglifyJsPlugin()
        ]
    }
});