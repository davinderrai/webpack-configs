const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src/',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false,
      VERSION: '0.10.2'
    })
  ]
};
