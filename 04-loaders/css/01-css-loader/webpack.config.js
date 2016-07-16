const path = require('path');

const PATHS = {
  SRC: path.join(__dirname, 'src'),
  BUILD: path.join(__dirname, 'build')
};

module.exports = {
  entry:  path.join(PATHS.SRC, 'index.css'),
  output: {
    path: PATHS.BUILD,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
}
