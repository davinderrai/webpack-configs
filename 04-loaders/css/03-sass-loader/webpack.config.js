const path = require('path');

const PATHS = {
  SRC: path.join(__dirname, 'src'),
  BUILD: path.join(__dirname, 'build')
};

module.exports = {
  context: PATHS.SRC,
  entry: './index.sass',
  output: {
    path: PATHS.BUILD,
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
