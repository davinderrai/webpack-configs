const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src/',
  entry: {
    first: './one.js',
    second: './two.js',
    third: './three.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    })
  ]
};
