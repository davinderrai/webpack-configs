const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: ['./before.js', './index.js'],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  }
};
