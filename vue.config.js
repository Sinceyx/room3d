const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  runtimeCompiler: true,
  publicPath: 'muscicPlayer/v0001',

  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src/'))
  }
}
