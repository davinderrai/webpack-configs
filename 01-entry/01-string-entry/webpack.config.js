const path = require('path');

// it can be useful to define necessary paths separately from the config
const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // https://webpack.github.io/docs/configuration.html#entry
  entry: PATHS.app,
  output: {
    // https://webpack.github.io/docs/configuration.html#output-path
    path: PATHS.build,
    // https://webpack.github.io/docs/configuration.html#output-filename
    filename: 'app.js'
  }
};
