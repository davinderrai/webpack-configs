#DllPlugin and DllReferencePlugin

The `DllPlugin` and `DllReferencePlugin` allow you to separate the compiling of modules in your project. For example, if you are using React, every time you compile your project React must be re-compiled. If your project isn't particularly large, this is probably a significant portion of the compile time. It can be especially annoying because third party library like React don't change very often, so they shouldn't need to constantly be re-compiled because some other part of your project changed.

Using the `DllPlugin`, you can create a separate chunk (or chunks) containing the modules that you don't want re-compiled. This will be exposed as a library. These chunks are created using a separate configuration from the project's main configuration object. This configuration will output a chunk and manifest for each entry. This needs to be run prior to the project's main configuration so that the chunk and manifest files exist.

```
webpack --config=webpack.config.dll.js
```

```javascript
// webpack.config.dll.js
module.exports = {
  entry: {
    thirdParty: ['react', 'react-dom', 'jQuery']
  },
  output: {
    path: path.join(__dirname, 'build'),
    library: 'mylib',
    name: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'manifest', '[name]-manifest.json'),
      name: '[name]'
    })
  ]
};
```

Once the manifest(s) and library chunk(s) have been created, the project can be compiled. The `DllReferencePlugin` will need to be included in the `plugins` option array so that Webpack knows to lookup modules in there.

```
webpack --config=webpack.config.js
```

```javascript
// webpack.config.js
module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest/thirdParty-manifest.json')
    })
  ]
}
```

Then, in your HTML, you will need to include the dll script before the application's script.

```html
&lt;script src="/build/lib.js"&gt;&lt;/script&gt;
&lt;script src="/build/app.js"&gt;&lt;/script&gt;
```
