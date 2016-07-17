#CommonsChunkPlugin

The `CommonsChunkPlugin` is used to move modules to a different chunk. There are two main uses for this: 1) when you have multiple entries and each one shares some amount of code that you don't want duplicated and 2) when you have some code, such as third party modules, that will rarely change so that keeping them in a separate chunk allows them remain cached when other parts of your application change.

```javascript
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src/',
  entry: {
    first: './one.js',
    second: './two.js',
    third: './three.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    })
  ]
};
```
