/* eslint-disable quotes */
const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: []
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [['env', { modules: false }], 'stage-0'],
              plugins: ['transform-regenerator', 'transform-runtime']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  node: {
    __filename: true,
    __dirname: true
  },
  resolve: {
    alias: {
      src: __dirname
    }
  },
  target: 'node'
}
