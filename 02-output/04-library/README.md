#output library

The `library` option in the `output` object allows you to assign the return value of the Webpack runtime to a variable with the name provided to the option.

```javascript
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'lib.js',
    library: 'myLib' 
  }
};
```

This will result in the output file assigning the results of the runtime function to the variable `myLib`.

```javascript
var myLib = (function(modules){
  /* ... */
  return __webpack_require__(0);
})(modules);
```

##[libraryTarget](http://webpack.github.io/docs/configuration.html#output-librarytarget)

A `libraryTarget` option can also be used to specify how the return value of the runtime is assigned. The default option is `var` (shown above). Other values are possible for exporting to the `this` object, to `exports` or `module.exports`, to an `AMD` function, or to a `UMD` function for an export-agnostic library.
