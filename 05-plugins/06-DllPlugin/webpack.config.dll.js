const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        lib: ['./lib1', './lib2'],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'manifest', '[name]-manifest.json'),
            name: '[name]_[hash]',
            context: __dirname
        })
    ]
};