const packageName = require("./package.json").name;
// const baseUrl = process.env.VUE_APP_BASE_URL;
module.exports = {
  publicPath: "./",
  outputDir: `../dist/subapp/${packageName}`,
  transpileDependencies: ["qiankun-vue2-common"],
  configureWebpack: {
    output: {
      library: `${packageName}`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
  },
  devServer: {
    port: process.env.VUE_APP_PORT, // 在.env中VUE_APP_PORT=7788，与父应用的配置一致
    headers: {
      "Access-Control-Allow-Origin": "*", // 主应用获取子应用时跨域响应头
    },
  },
};
