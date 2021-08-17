/*
 * @Author: lizhijie429
 * @Date: 2021-08-16 17:11:52
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-08-17 14:25:16
 * @Description:
 */
import { registerMicroApps, start } from "qiankun";

import { filterApps, config } from "./registerApp";

export { qiankunActions } from "./globalState";

// 微应用注册
export const registerApps = () => {
  const _apps = filterApps();
  registerMicroApps(_apps, config);
  start({
    prefetch: "all", // 可选，是否开启预加载，默认为 true。
    sandbox: true, // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
  });
};
