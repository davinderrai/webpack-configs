Various examples of using webpack.

###Resources:

https://webpack.github.io/docs/

http://survivejs.com/webpack/introduction/

###Running:

In order to run Webpack for the configurations, you will either need to:

1. Run the code from the root directory, requiring you to specify the (long) path to the config.
  
  ```
  webpack --config=01-entry/01-string-entry/webpack.config.js
  ```

2. Install Webpack globally so that you can call Webpack from each config example directory.

  ```
  npm install -g webpack
  cd 01-entry/01-string-entry
  webpack
  ```

3. Use the relative path to the Webpack script from the config example directory.

  ```
  cd 01-entry/01-string-entry
  node "../../node_modules/webpack/bin/webpack.js"
  ```

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

2. If Webpack cannot find a module, you probably need to use a relative path. Setting a root directory using `resolve.root` can help with this issue as well.

  ```javascript
  // yay
  module.exports = {
    context: path.join(__dirname, 'src'),
    entry: './index.js'
  };

  // okay
  module.exports = {
    context: path.join(__dirname, 'src'),
    entry: 'index.js',
    resolve: {
      root: path.join(__dirname, 'src')
    }
  };

  // nay
  module.exports = {
    context: path.join(__dirname, 'src'),
    entry: 'index.js'
  };
  ```

3. Use the `npm_lifecycle_event` to trigger different configurations from the same file. If you run a script using npm (created by you using the `scripts` object in your `package.json` file), a variable will be accessible to the script as `process.env.npm_lifecycle_event` (the value being the key in the `scripts` object). This makes it possible for you to use the same Webpack configuration script for different build steps, returning different configurations depending on how it was called.

  ```javascript
  // package.json
  {
    "scripts": {
      "build-dev": "webpack",
      "build-prod": "webpack"
    }
  }

  // webpack.config.js
  const config = {
    /* setup the configuration object */
  };

  switch(process.env.npm_lifecycle_event) {
    case "build-dev":
      // set any development options, such as
      // hot module reloading
      break;
    case "build-prod":
      // set any production options, such as
      // minimizing your code
      break;
  }
  module.exports = config;
  ```
