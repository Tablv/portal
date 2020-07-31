const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  // devServer: {
  //   port,
  //   proxy: {
  //     '/': {
  //       target: 'http://192.168.1.202:8080/admin',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/admin': ''
  //       }
  //     }
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
