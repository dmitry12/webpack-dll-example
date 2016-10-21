const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
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
                    presets: ["es2015", "react"]
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html',
        }),
    ],
};
