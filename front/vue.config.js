const unique = require('./src/app/unique')
const path = require('path')
const Visualizer = require('webpack-visualizer-plugin')
const VersionFile = require('webpack-version-file-plugin')

module.exports = {
  /**
   * @param context
   * @return {*}
   */
  chainWebpack: (context) => {
    context.resolve.alias.set('src', path.resolve(__dirname, 'src/'))
  },
  /**
   */
  configureWebpack: (context) => {
    if (process.env.NODE_ENV === 'production') {
      context.plugins.push(new Visualizer())
      context.plugins.push(new VersionFile({
        packageFile: path.join(__dirname, 'package.json'),
        template: path.join(__dirname, 'version.ejs'),
        extras: { build: unique() },
        outputFile: path.join(__dirname, 'public', 'version')
      }))
    }
  },
  /**
   */
  devServer: {
    port: 1981
  }
}
