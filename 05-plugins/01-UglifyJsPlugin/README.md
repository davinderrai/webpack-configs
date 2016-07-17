#UglifyJsPlugin

The `UglifyJsPlugin`'s main function is to minimize your code. This is useful for production builds of your app. The plugin can also (and does by default) output a source map to make finding bugs easier.

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
