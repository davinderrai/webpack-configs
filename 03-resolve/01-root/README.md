#resolve.modules

[`resolve.modules`](https://webpack.js.org/configuration/resolve/#resolve-modules) allows you to specify an array of directories to search for your modules. Doing this allows you to write `require`/`import` paths without path relative information (no more `../`s, just include the path starting in the `modules` directory). The default directory for this option is `node_modules`. If you add your own directories, you should make sure to still include `node_modules` in the `modules` array.

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: 'index',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  }
};
```

**Note:** Webpack 2 merged the `root`, `fallback`, and `modulesDirectories` options from Webpack 1 into the single `modules` option.
