const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

module.exports = {
  output: {
    filename: '[name]-[contenthash].js'
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
  plugins: [
    new HardSourceWebpackPlugin()
  ]
}
