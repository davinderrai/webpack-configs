module.exports = {
  entry: {
    one: __dirname + '/src/one.js',
    two: [__dirname + '/src/extra.js', __dirname + '/src/two.js']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  }
}
