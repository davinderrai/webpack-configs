#HtmlWebpackPlugin

The `HtmlWebpackPlugin` creates an `index.html` file which imports all of your output files. When you are using `[hash]` or `[chunkhash]` templates to name your output files, this is especially useful since it will be including the full filenames for you.

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/src/',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};
```
