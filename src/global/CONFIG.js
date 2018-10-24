window.CONFIG = {
  serviceUrl: {
    'localhost': '//10.17.13.232:10010/', // 本地开发构建环境 npm run buildlocal
    'test': '//10.60.10.165:9001/', // 测试构建环境 npm run build:test
    'production': '//116.62.168.175:9001/', // 上线构建环境  npm run build:prod

    // 热更新开发构建环境 npm run dev
    // 'development': '//10.60.10.165:9001/' // dev环境
    'development': '//10.60.10.20:9001/' // 肥虫虫
    // 'development': '//10.60.30.69:9001/',   // 王延吉
  },

  serviceParam: {
    clientName: 'web',
    clientSecret: 'sd-dev',
    clientSecretProd: 'shandianwebprod',
    Version: '1.0'
  }
}
