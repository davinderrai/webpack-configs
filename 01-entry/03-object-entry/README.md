#entry - object

When the `entry` config option is an object, multiple bundles will be made. The type of the entry for each bundle will depend on whether the value in the `entry` is a string or an array. Because an `entry` object will be creating multiple bundles, you will need to use 

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    one: './one.js',
    two: ['./extra.js', './two.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  }
};
```
