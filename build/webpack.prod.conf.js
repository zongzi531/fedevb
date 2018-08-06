'use strict'
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const config = require('../config')

const { build } = config

if (build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  baseWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = merge(baseWebpackConfig, {
  output: {
    publicPath: build.assetsPublicPath
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: build.productionSourceMap
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
  ]
})
