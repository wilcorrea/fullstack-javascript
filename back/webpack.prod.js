const path = require('path')

const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./webpack.config.js')

module.exports = merge.smart(common, {
  mode: 'production',
  entry: [path.join(__dirname, 'src/index.js')],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
