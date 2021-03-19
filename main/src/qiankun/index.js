import {
  registerMicroApps,
  setDefaultMountApp,
  runAfterFirstMounted,
  addGlobalUncaughtErrorHandler,
  start,
} from "qiankun";

import microApps from "./app.js";
import { props } from "./share";

function filterApps() {
  microApps.forEach((item) => {
    item.props = props; // 可选，主应用需要传递给微应用的数据。
  });
  return microApps;
}

const _microApps = filterApps();
registerMicroApps(_microApps, {
  beforeLoad: [
    (loadApp) => {
      console.log("before load", loadApp);
    },
  ],
  beforeMount: [
    (mountApp) => {
      console.log("before mount", mountApp);
    },
  ],
  afterMount: [
    (mountApp) => {
      console.log("before mount", mountApp);
    },
  ],
  afterUnmount: [
    (unloadApp) => {
      console.log("after unload", unloadApp);
    },
  ],
});
// 设置默认子应用,与 genActiveRule中的参数保持一致
setDefaultMountApp("sub01");
// 第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => console.log("开启监控"));
// 添加全局的未捕获异常处理器。
addGlobalUncaughtErrorHandler((event) => console.log(event));
start({
  // 可选，是否开启预加载，默认为 true。
  prefetch: true,
  // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
  sandbox: true,
  // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
  singular: true,
});
