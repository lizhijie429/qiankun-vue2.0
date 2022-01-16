const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  runtimeCompiler: true,
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
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
        pathRewrite: {
          "^/mock/api": "", // rewrite path
        },
      },
    },
  },
};
