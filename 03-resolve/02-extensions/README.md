#resolve.extensions

[`resolve.extensions`](http://webpack.github.io/docs/configuration.html#resolve-extensions) takes an array of file extensions to attempt to test for when a `require` or `import` statement does not include a file extension.

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
```
