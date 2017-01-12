#resolve.extensions

[`resolve.extensions`](https://webpack.js.org/configuration/resolve/#resolve-extensions) takes an array of file extensions to attempt to test for when a `require` or `import` statement does not include a file extension.

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

**Note:** Webpack 2 removed the need to include an empty string in the `extensions` array.
