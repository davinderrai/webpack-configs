#resolve.root

[`resolve.root`](http://webpack.github.io/docs/configuration.html#resolve-root) allows you to provide the root directory (or an array of root directories) to search for your modules. Doing this allows you to write `require`/`import` paths without path relative information (no more `../`s, just include the path starting in the `root` directory).

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: 'index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    root: path.join(__dirname, 'src')
  }
};
```
