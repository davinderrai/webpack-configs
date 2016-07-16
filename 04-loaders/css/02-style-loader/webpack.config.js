const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry:  './index.css',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
}
