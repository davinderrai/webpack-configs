Various examples of using webpack.

###Resources:

https://webpack.github.io/docs/

http://survivejs.com/webpack/introduction/

###Tips:

1. Always use the `path` module to describe paths. This can help prevent issues with resolving files.

```javascript
// yay
const path = require('path');
module.exports = {
  context: path.join(__dirname, 'src')
};

// nay
module.exports = {
  context: __dirname + '/src/'
}
```
