module.exports = {
  context: __dirname + '/src/',
  entry: './index',
  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
