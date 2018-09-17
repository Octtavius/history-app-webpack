var merge = require('webpack-merge');
var common = require('./webpack.common');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({ // generate the index.html
            template: './index-template.html',
            inject: 'body', // where to insert the js references
            filename: "../web-app/dev/generated-dev-index.html" // where to create the file. default is in folder where bundles are created
        })
    ]
})