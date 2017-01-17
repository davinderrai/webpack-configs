#UglifyJsPlugin

`UglifyJsPlugin` is used to minimize JavaScript. It will also remove any dead code from your JavaScript (code that can never be run). You can also configure the plugin to generate a source map, which can make debugging your application easier.

```javascript
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
```

By default, the plugin will **not** generate a source map. To activate this option, pass the `sourceMap: true` option to the plugin.

```javascript
plugins: [
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true
  })
]
```

