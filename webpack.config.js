// const path = require('path');
// const MiniCss = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');



const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test:/\.(s*)css$/,
            use: [
                miniCss.loader,
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [
        new miniCss({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'),
            filename: "index.html",
        }),
    ]
};