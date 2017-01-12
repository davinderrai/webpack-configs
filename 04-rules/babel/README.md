#Babel and the babel-loader

[Babel](https://babeljs.io/) transforms your code to be browser friendly JavaScript. You can run the `babel-loader` to do this JavaScript compiliation in your Webpack compilation.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}
```

Babel uses plugins to transform your code to JavaScript that the browser will understand. For example, the `transform-react-jsx` is used to transform JSX to JavaScript.

Babel uses collections of related plugins called `preset`s to easily apply multiple plugins. The `es2015` preset enables you to use ECMAScript 2015 (ES6) code in your source, which will be transformed into code that modern browsers understand. The `react` preset transforms React projects, most notably converting JSX to JavaScript. The `stage-0` through `stage-3` presets allow you to use JavaScript features which haven't actually made it into the language yet. `stage-3` includes the most mature features which have not yet made it into the JavaScript specification. `stage-2` includes all of `stage-3` plus some more transformations. This goes on all the way to `stage-0`, which includes all of the other stages and some additional transforms.

Your project should include configuration code to specify how Babel should be run. This can either be done with a [`.babelrc`](https://babeljs.io/docs/usage/babelrc/) file (**recommended**), in your `package.json` file under the `babel` key, or via environment variables. There are a number of [options](http://babeljs.io/docs/usage/options/) that can be set in the configuration to control how Babel transforms your code.

```javascript
{
  "presets": ["react"]
}
```

You will often want to have an `exclude: '/node_modules/'` or an `include` value in your loader object so that the `babel-loader` doesn't try to compile all of the third party JavaSript code in your application.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  }
}
```
