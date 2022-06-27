const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  //配置路由代理
  devServer:{
    proxy:{
      "/api":{
        target:'http://gmall-h5-api.atguigu.cn',
      }
    }
  }
})
