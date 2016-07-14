module.exports = {
  context: __dirname + '/src/',
  entry: {
    one: './one.js',
    two: ['./extra.js', './two.js']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  }
}
