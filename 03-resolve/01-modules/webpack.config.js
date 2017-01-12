const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: 'index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  }
};
