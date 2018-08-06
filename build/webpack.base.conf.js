'use strict'
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve, getEntry, getToHTML } = require('./untils')
const { rules } = require('./rules')
const { buildingPath } = require('../config')

module.exports = {
  entry: getEntry('src'),
  output: {
    path: resolve(`${buildingPath}src/main/webapp`),
    filename: 'static/js/[name].[chunkhash].js'
  },
  module: {
    rules
  },
  plugins: [
    new CleanWebpackPlugin(['webapp'], {
      root: resolve(`${buildingPath}src/main/`)
    }),
    ...getToHTML('src'),
    new ExtractTextPlugin({
      filename: './static/css/[name].[hash:7].css'
    }),
    new CopyWebpackPlugin([{
      from: resolve('static'),
      to: resolve(`${buildingPath}src/main/webapp/static`)
    }])
  ]
}
