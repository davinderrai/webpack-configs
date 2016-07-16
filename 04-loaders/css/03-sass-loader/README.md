#sass-loader

The `sass-loader` provides a pre-compile from `Sass` or `SCSS` to CSS, so it should run before the `css-loader`. This result would typically either then be passed to the `style-loader` or extracted using the `ExtractTextPlugin`.

```javascript
module.exports = {
  context: __dirname + '/src/',
  entry: './index.sass',
  output: {
    path: __dirname + '/build/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
```
