#output path

Use the `output.path` config option to specify which directory the files output by Webpack should be saved to. If this is not specified, the files will be output in the directory that you run the command from.

```javascript
module.exports = {
  context: __dirname + '/src/',
  entry: './index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'app.js'
  }
}
```
