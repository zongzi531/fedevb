'use strict'
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

const { dev } = config

module.exports = merge(baseWebpackConfig, {
  watch: true,
  output: {
    publicPath: dev.assetsPublicPath
  }
})
