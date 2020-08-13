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
  devServer: {
    port: 8082,
    proxy: {
      '/homepageApi': {
        target: 'http://192.168.101.235:9000/homepageApi',
        changeOrigin: true,
        pathRewrite: {
          '^/homepageApi': ''
        }
      },
      '/manager': {
        target: 'http://192.168.101.235:9000/admin/login',
        changeOrigin: true,
        pathRewrite: {
          '^/manager': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
