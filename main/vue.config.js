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
    proxy: {
      "/mock/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/mock/api": "", // rewrite path
        },
      },
    },
  },
};
