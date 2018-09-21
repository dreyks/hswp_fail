const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HardSourceWebpackPlugin()
  ]
}
