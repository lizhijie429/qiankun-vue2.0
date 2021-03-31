module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8080", //路径指向本地主机地址及端口号
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/mock", //路径转发代理
        },
      },
    },
  },
};
