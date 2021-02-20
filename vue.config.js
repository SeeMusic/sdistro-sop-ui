const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  productionSourceMap: false,

  css: {
    loaderOptions: {
      // 全局预加载 color 相关 scss变量
      sass: {
        prependData: '@import \'~@/assets/css/color\';',
      },
    },
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@': 'examples',
  //     },
  //   },
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('examples'))
      .set('@packages', resolve('packages'));
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader');
  },

  pluginOptions: {
    i18n: {
      // locale: 'zh_CN',
      // fallbackLocale: 'zh_CN',
      // localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
