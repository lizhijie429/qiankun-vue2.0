const path = require("path");
const packageName = require("./package.json").name;
const node_env = process.env.NODE_ENV === "production";
// const baseUrl = process.env.VUE_APP_BASE_URL;
const baseUrl = "/";
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  outputDir: `../dist/${packageName}`,
  publicPath: node_env ? baseUrl : "/",
  assetsDir: "static",
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
    host: process.env.VUE_APP_HOST,
    port: process.env.VUE_APP_PORT, // 在.env中VUE_APP_PORT=7788，与父应用的配置一致
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
};
