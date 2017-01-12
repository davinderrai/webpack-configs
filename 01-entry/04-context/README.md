#context

The `context` option allows the user to specify the absolute path of the directory where the `entry` files are located. This can be especially useful when there are multiple entries.

```javascript
// without context
module.exports = {
  entry: {
    one: path.join(__dirname, 'src', 'one.js'),
    two: [
      path.join(__dirname, 'src', 'extra.js'),
      path.join(__dirname, 'src', 'two.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  }
}


// with context
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    one: './one.js',
    two: ['./extra.js', './two.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  }
}

```