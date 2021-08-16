/*
 * @Author: lizhijie429
 * @Date: 2021-08-16 17:11:52
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-08-16 17:28:20
 * @Description:
 */
import { registerMicroApps, start } from "qiankun";
import { initialState } from "./globalState";
import { microApps, config } from "./registerApp";

export { qiankunActions } from "./globalState";

/* 封装全局下发的数据及挂载子应用的节点 */
const apps = microApps.map((item) => {
  return {
    ...item,
    container: "#subapp-viewport", // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      globalState: initialState, // 下发全局数据方法
    },
  };
});

// 微应用注册
export const registerApps = () => {
  registerMicroApps(apps, config);
  start({
    prefetch: "all", // 可选，是否开启预加载，默认为 true。
    sandbox: true, // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
  });
};
