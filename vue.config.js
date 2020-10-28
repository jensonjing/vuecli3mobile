module.exports = {
    publicPath: '/', // 官方要求修改路径在这里做更改，默认是根目录下，可以自行配置
    outputDir: 'dist', //标识是打包哪个文件
    productionSourceMap: false,
    devServer: {
      open: true, // 项目构建成功之后，自动弹出页面
      host: 'localhost', // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
      port: 8081, // 端口号，默认8080
      https: false, // 协议
      //跨域代理
      proxy: {
          '/api':{
            target:'http://www.baidu.com',//正式环境
            secure:true,//如果是https接口需要配置此参数
            changeOrigin:true,
            timeout:5000,//设置超时时间
            pathRewrite:{
                "^/api":""
            }
          }
      }
    },
    css: {
        loaderOptions: {
            sass: {
                // 根据自己样式文件的位置调整
                prependData: `@import "@/assets/css/base.scss";`//新版scss-loader(8.0及以上)
                // data:`@import "@/assets/css/base.scss";`//旧版sass-loader写法(8.0以下)
            }
        }
    }
};