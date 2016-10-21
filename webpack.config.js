const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dllManifest = require('./dll/vendor-manifest.json');

module.exports = {
    entry: path.join(__dirname, '/app/', 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: path.join(__dirname, '/app/'),
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '/app/', 'index.html'),
        }),

        new webpack.DllReferencePlugin({
            context: path.join(__dirname, 'app'),
            manifest: dllManifest,
        }),
    ],
};
