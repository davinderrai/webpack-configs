#output filename - templates

When Webpack has multiple output files to save, which is caused by having an object `entry`, having a static filename doesn't make any sense. Instead, Webpack uses templates that will replace the template values with ones related to the chunk or compilation.

* `[name]` will insert the name of the chunk (which is the key in the `entry` object)
* `[hash]` will insert a hash of the entire compilation. This should be used in conjunction with another template when you want to cache an entire compilation. However, because the hash is of the whole compilation, using only this as the filename would cause all of the files to have the same name.
* `[chunkhash]` will insert the hash of the chunk that is being output. This is useful for caching a chunk without the side effect of the hash value changing when code in other chunks changes.
* `[id]` will insert the id of the chunk

```javascript
// save files using the name of the chunk
output: {
  path: __dirname + '/build/',
  filename: '[name].js'
}

// include the chunkhash to cache the code
// in the chunk
output: {
  path: __dirname + '/build/',
  filename: '[name].[chunkhash].js'
}
```