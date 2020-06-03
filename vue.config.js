const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
  }
}

/* module.exports = {
  chainWebpack: config => {
    // path import to example
    const path = require('path')
    // path config.resolve.alias or config.resolve.alias.store
    config.resolve.alias = {
      ...config.resolve.alias,
      // My  Example
      '@': path.resolve(__dirname, './src')
    }
  }
} */
