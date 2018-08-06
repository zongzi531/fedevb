const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { resolve } = require('./untils')

/**
 * Webpack rules setting in base config file.
 */
module.exports.rules = [
  {
    test: /\.(js)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: resolve('src'),
    options: {
      formatter: require('eslint-friendly-formatter'),
      emitWarning: true
    }
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: resolve('src')
  },
  {
    test: /\.html$/,
    use: [{
      loader: 'html-loader',
      options: {
        minimize: true
      }
    }]
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            url: false
          }
        }
      ]
    })
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: './static/img/[name].[hash:7].[ext]'
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: './static/fonts/[name].[hash:7].[ext]'
    }
  }
]
