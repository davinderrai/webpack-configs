const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  }
};
