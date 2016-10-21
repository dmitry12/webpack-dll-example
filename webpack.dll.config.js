const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [path.join(__dirname, 'app', 'vendors.js')],
    },
    output: {
        path: path.join(__dirname, 'dist', 'dll'),
        filename: 'dll.[name].js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            name: '[name]',
            context: path.resolve(__dirname, 'app'),
        }),
    ],
    resolve: {
        root: path.resolve(__dirname, 'app'),
        modulesDirectories: ['node_modules'],
    },
};
