#entry - array

When the `entry` config option is an array, a multi entry bundle will be made. Doing this will create an `id=0` module that imports all of the modules in the `entry` array. The last module in the array will be exported.

```javascript
module.exports = {
  context: __dirname + '/src/',
  entry: ['./setup.js', './index.js'],
  output: {
    filename: 'bundle.js'
  }
}
```
