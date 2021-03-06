const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      DEBUG: false,
      VERSION: '0.10.2'
    })
  ]
};
