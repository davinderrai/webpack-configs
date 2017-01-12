#postcss-loader

With browser inconsistencies in syntax and code coverage, it is often useful to have a build step to help ensure that your CSS is displayed (nearly) the same in all browsers. One popular module for making sure that all of your rules have the correct vendor prefixes is Autoprefixer. You can run Autoprefixer on your code using the `postcss-loader`. This must run prior to the `css-loader`

```javascript
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      }
    ]
  },
  postcss: function() {
    return [autoprefixer];
  }
};
```
