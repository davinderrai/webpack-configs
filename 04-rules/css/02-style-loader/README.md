#style-loader

`style-loader` is used in conjunction with the `css-loader`.

1. The `css-loader` exports an array of CSS modules.
2. `style-loader` maintains an object, `stylesInDom`, to track all of the styles that have been added to the DOM. Each style has three properties, a) `id` is the id of the module, b) `refs` is a count of how many times it has been added to the DOM, c) `parts` is an array of `style` tags associated with the module.
3. `style-loader` exports a function that takes an array of CSS modules and an optional object of options. This function:
  1. Converts the array of CSS modules to a new array, with an object for each module.
  2. Iterates over each CSS module in the array, creating a DOM element to insert it into the page. In the default case, this is done using a `style` tag. When a sourcemap for the CSS is provided, it is done using a `link` tag. Each element has an `update` function which is used to set the content inside of the element. A reference object for each CSS module is added to the `stylesInDom` object.
  3. Returns a function, `update`, which takes a new list of CSS modules. When called, it decrements the `refs` count for each current CSS module in the `stylesInDom` object, adds style tags for any CSS modules passed in the new list, then removes any styles where `refs===0`

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

```