#entry - string

When the `entry` config option is a string, a single entry will be made. The entry file will be used as the `id=0` module in the bundle. Because there is only one entry, there will only be one output file. This file can be named directly since you do not have to worry about naming collisions.

```javascript
module.exports = {
  entry: 'src/index.js',
  output: {
    filename: 'bundle.js'
  }
}
```

If the `[name]` template is used in the output `filename`, it will use the default name of the chunk, which is `main`.
```javascript
// output file will be called main.js
module.exports = {
  entry: 'src/index.js',
  output: {
    filename: '[name].js'
  }
};
```
