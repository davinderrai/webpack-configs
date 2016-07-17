const path = require('path');

module.exports = {
  context: __dirname + '/src/',
  entry: {
    one: './one.js',
    two: './two.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].[chunkhash].js'
  }
}
