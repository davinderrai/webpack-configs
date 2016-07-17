const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.sass',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
