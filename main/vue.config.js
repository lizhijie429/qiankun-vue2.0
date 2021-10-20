const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  outputDir: "../dist/main",
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  devServer: {
    host: process.env.VUE_APP_HOST,
    proxy: {
      "/api": {
        //遇见/api1前缀的请求，就会触发该代理配置
        target: process.env.VUE_APP_API_URL, //请求转发给谁
        changeOrigin: true, //控制服务器收到的请求头中Host的值
        pathRewrite: { "^/api": "" }, //重写请求路径(必须)
      },
    },
  },
};
