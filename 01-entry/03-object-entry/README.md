#entry - object

When the `entry` config option is an object, multiple bundles will be made. The type of the entry for each bundle will depend on whether the value in the `entry` is a string or an array. Because an `entry` object will be creating multiple bundles, you will need to use 

```javascript
module.exports = {
  context: __dirname + '/src/',
  entry: {
    one: 'one.js',
    two: 'two.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  }
}
```
