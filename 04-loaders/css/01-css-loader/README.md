#css-loader

The `css-loader` is used to transform CSS into JavaScript. The way that this works is that:

1. Webpack adds a module which exports an array when it is called. The array has two methods added to it, `toString` which returns a string of all CSS added to the array and `i` which adds CSS modules to the array.
2. That function is imported and immediately invoked to get the array. This array will be exported.
3. The CSS is converted to a string.
4. An array of the CSS's module id and the CSS string is added to the array.

```javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  }
}

```