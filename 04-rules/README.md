#rules

[`rule`s](https://webpack.js.org/configuration/module/#rule) are used to configure how the files in a project are compiled into JavaScript modules. They are included in the [`rules`](https://webpack.js.org/configuration/module/#module-rules) array of the `modules` option in a Webpack configuration.

```js
{
  module: {
    rules: [...]
  }
}
```

A rule is made up of [conditions](https://webpack.js.org/configuration/module/#condition) that specify which files to transform and [entries](https://webpack.js.org/configuration/module/#useentry) which describe which loaders to transform a file with.

The `test` condition of a rule will check a file's name to determine whether or not it should be run on that file.

```js
{
  module: {
    rules: [
      {
        // this loader will match .js and .jsx files
        test: /\.jsx?$/
      }
    ]
  }
}
```

You can also include `include` and `exclude` conditions to specify directories where all of their files should or should not be tested to be matched by the rule.

```js
{
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: path.join(__dirname, 'node_modules')
      }
    ]
  }
}
```

`loaders` are simply functions that take a string as input and output a new string. The output string is the code for a JavaScript module.

You can either use a single loader or chain together a number of them to get the desired output. If using a single loader, use the `loader` property. For multiple loaders, pass an array using the `use` property. The loaders in the `use` array will be executed right to left.

```js
{
  module: {
    rules: [
      {
        // this loader will match .js and .jsx files
        test: /\.jsx?$/,
        use: [
          'last-loader',
          'second-loader',
          'first-loader'
        ]
      }
    ]
  }
}
```

**Note:** In Webpack 1, you could specify that you want to use the `babel-loader` using just the string `babel`. In Webpack 2, you need to include the `-loader` string in the loader name.