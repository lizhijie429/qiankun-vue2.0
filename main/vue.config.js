const path = require("path");
const packageName = require("./package.json").name;
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  outputDir: "../dist/main",
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
};
