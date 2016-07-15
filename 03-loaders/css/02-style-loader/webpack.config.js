const path = require('path');

module.exports = {
  entry:  path.join(__dirname, 'src', 'index.css'),
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
