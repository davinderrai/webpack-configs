#babel-preset-es2015

Using the `babel-preset-es2015`, you can use JavaScript features which made it into the JavaScript specification in es2015 but haven't been implemented in every browser.

You can see a list of all of the transformations that the `babel-preset-es2015` preset does in Babel's [documentation](http://babeljs.io/docs/plugins/preset-es2015/).

```
//.babelrc
{
  "presets": ["es2015"]
}

//webpack.config.js
{
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/'
      }
    ]
  }
}
```
