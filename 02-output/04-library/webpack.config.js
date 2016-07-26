const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'lib.js',
    library: 'myLib',
    libraryTarget: 'umd'
  }
};
