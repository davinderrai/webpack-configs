const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.css',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
};