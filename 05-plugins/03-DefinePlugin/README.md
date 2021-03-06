#DefinePlugin

The `DefinePlugin` is used to replace variables in your source code with values that you define in the plugin. For example, if you use a `DEBUG` variable in your code to allow debugging, you can set `{DEBUG: true}` in your development configuration and `{DEBUG: false}` in your production configuration for the `DefinePlugin` and all instances of `DEBUG` in your code will be replaced with the value you provide. Used alongside the `UglifyJsPlugin`, the `DefinePlugin` can create dead code which the `UglifyJsPlugin` will remove.

Note: This only works for **free** variables. If you define the variable within a module, it will not be re-assigned your provided value.

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
    new webpack.DefinePlugin({
      DEBUG: false,
      VERSION: '0.10.2'
    })
  ]
};
```