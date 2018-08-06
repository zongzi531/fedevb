module.exports = {
  /**
   * Setting in html-webpack-plugin inject options:
   * If you want to setting inject options is head,
   * You can add file key name to this array.
   */
  injectToHead: new Set([]),
  buildingPath: '../tsc-web/',
  dev: {
    assetsPublicPath: '/'
  },
  build: {
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
