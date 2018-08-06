'use strict'
const path = require('path')
const glob = require('glob')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { injectToHead } = require('../config')

const resolve = dir => path.join(__dirname, '..', dir)

const getArrayToSomething = (dir, matchBase, func) => {
  const pattern = `${dir}/**/*.${matchBase}`
  const patternArray = glob.sync(pattern)
  if (func) {
    return func(patternArray)
  } else {
    return patternArray
  }
}

const getEntry = dir => {
  return getArrayToSomething(dir, 'js', patternArray => {
    const entry = {}
    patternArray.forEach((value, index) => {
      /**
       * Split files path.
       */
      const valueArray = value.split('/')
      /**
       * Get array length,
       * Now code support level deep 4 folder.
       * If you want to support more deep level,
       * You can custom recode this.
       */
      const { length } = valueArray
      const [, i2, i3, i4] = valueArray
      let key = index
      switch (length) {
        case 2:
          key = i2
          break
        case 3:
          key = i2
          break
        case 4:
          key = `${i2}/${i3}`
          break
        case 5:
          key = `${i2}/${i3}/${i4}`
          break
      }
      entry[key] = `./${value}`
    })
    return entry
  })
}

const htmlName = path => `./templates/${path}.shtml`

const getToHTML = dir => {
  return getArrayToSomething(dir, 'html', patternArray => {
    const HTMLWebpackPluginArray = []
    patternArray.forEach((value, index) => {
      /**
       * Split files path.
       */
      const valueArray = value.split('/')
      /**
       * Get array length,
       * Now code support level deep 4 folder.
       * If you want to support more deep level,
       * You can custom recode this.
       */
      const { length } = valueArray
      const [, i2, i3, i4] = valueArray
      const key = valueArray[length - 2]
      let filename = ''
      let jsfile = ''
      switch (length) {
        case 2:
          const [name] = i2.split('.')
          filename = htmlName(name)
          jsfile = i2
          break
        case 3:
          filename = htmlName(key)
          jsfile = i2
          break
        case 4:
          filename = htmlName(`${i2}/${key}`)
          jsfile = `${i2}/${i3}`
          break
        case 5:
          filename = htmlName(`${i2}/${i3}/${key}`)
          jsfile = `${i2}/${i3}/${i4}`
          break
      }

      /**
       * If you want to inject option is head,
       * You can go to ../config/index.js setting key name.
       */
      let inject = true
      if (injectToHead.has(key)) {
        inject = 'head'
      }

      HTMLWebpackPluginArray.push(new HTMLWebpackPlugin({
        filename,
        template: resolve(value),
        inject,
        chunks: [jsfile]
      }))
    })
    return HTMLWebpackPluginArray
  })
}

module.exports = {
  resolve,
  getArrayToSomething,
  getEntry,
  getToHTML
}
