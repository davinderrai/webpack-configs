#resolve.extensions

`resolve.extensions` takes an array of file extensions to attempt to test for when a `require` or `import` statement does not include a file extension.

```javascript
module.exports = {
  context: __dirname + '/src/',
  entry: 'index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  }
};
```
