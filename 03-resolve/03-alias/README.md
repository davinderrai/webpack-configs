#resolve.alias

[`resolve.alias`](http://webpack.github.io/docs/configuration.html#resolve-alias) lets you use an alias to `import`/`require` files in place of the path. Webpack will replace the alias with the actual path to the file. `resolve.alias` takes an object where the keys are the aliases and the values are the paths.

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    alias: {thing: './dir/thing.js'}
  }
};
```
