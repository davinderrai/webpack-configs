const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    one: './one.js',
    two: ['./extra.js', './two.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  }
};
