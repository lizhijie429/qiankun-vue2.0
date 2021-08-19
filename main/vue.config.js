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
};
