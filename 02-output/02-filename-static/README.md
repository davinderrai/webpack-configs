#output filename - static

When Webpack only has one chunk to output, you don't have to worry about naming conflicts. In this case, you can just provide it a static name.

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  }
};
```
