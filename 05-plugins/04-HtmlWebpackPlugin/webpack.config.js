const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src/',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
