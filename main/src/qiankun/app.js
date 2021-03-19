// 子应用注册
let microApps = [];
let appsConfig = process.env;
for (const item in appsConfig) {
  if (item.includes("VUE_APP_CHILD_")) {
    let name = item.split("VUE_APP_CHILD_")[1];
    let appItem = {
      name,
      entry: process.env[item],
      activeRule: genActiveRule(`/${name}`),
      container: "#subapp-viewport", // 子应用挂载的div
    };
    microApps.push(appItem);
  }
}

function genActiveRule(routerPrefix) {
  return (location) => location.pathname.startsWith(routerPrefix);
}
export default microApps;
