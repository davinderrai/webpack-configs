#context

The `context` option allows the user to specify the absolute path of the directory where the `entry` files are located. This can be especially useful when there are multiple entries.

```javascript
// without context
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


// with context
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

```