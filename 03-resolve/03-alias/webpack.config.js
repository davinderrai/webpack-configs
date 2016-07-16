module.exports = {
  context: __dirname + '/src/',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  },
  resolve: {
    alias: {thing: './dir/thing.js'}
  }
};