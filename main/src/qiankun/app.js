import { share } from "./share";

// 获取子应用列表
let microApps = [];
let appsConfig = process.env;
for (const item in appsConfig) {
  if (item.includes("VUE_APP_CHILD_")) {
    let name = item.split("VUE_APP_CHILD_")[1];
    let appItem = {
      name,
      entry: process.env[item],
      activeRule: `/${name}`,
    };
    microApps.push(appItem);
  }
}

// 下发数据封装
const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      ...share,
    },
  };
});
console.log("apps", apps);
export default apps;
