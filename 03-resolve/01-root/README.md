#resolve.root

[`resolve.root`](http://webpack.github.io/docs/configuration.html#resolve-root) allows you to provide the root directory (or an array of root directories) to search for your modules. Doing this allows you to write `require`/`import` paths without path relative information (no more `../`s, just include the path starting in the `root` directory).

```javascript
module.exports = {
  context: __dirname + '/src/',
  entry: 'index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  },
  resolve: {
    root: __dirname + '/src/'
  }
};
```
