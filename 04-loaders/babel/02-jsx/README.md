#babel-preset-react

Using the `babel-preset-react`, you can transform your React components to JavaScript. This is especially useful in converting JSX to JavaScript, but also provides other transformations, such as setting the `displayName` for a component.

You can see a list of all of the transformations that the `babel-preset-react` preset does in Babel's [documentation](http://babeljs.io/docs/plugins/preset-react/).

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
