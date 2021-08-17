import { initialState } from "./globalState";
/* 子应用列表 */
const microApps = [
  {
    // 应用名称
    name: "sub01",
    // 必选，微应用的入口。
    entry: process.env.VUE_APP_CHILD_sub01,
  },
  {
    name: "sub02",
    entry: process.env.VUE_APP_CHILD_sub02,
  },
];

/* 路由监听 */
const genActiveRule = (routerPrefix) => {
  return (location) => location.pathname.startsWith(routerPrefix);
};

/* 重构apps */
export const filterApps = () => {
  microApps.forEach((item) => {
    // 必选，微应用的容器节点的选择器或者 Element 实例。
    item.container = "#subapp-viewport";
    // 必选，微应用的激活规则。
    item.activeRule = genActiveRule(`/${item.name}`);
    // 可选，主应用需要传递给微应用的数据。
    item.props = {
      routerBase: item.activeRule, // 下发基础路由
      globalState: initialState, // 下发全局数据方法
    };
  });
  return microApps;
};

/* qiankun全局声明周期钩子 */
export const config = {
  beforeLoad: [
    (app) => {
      console.log("%c before load", "background:#0f0 ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 挂载前回调
  beforeMount: [
    (app) => {
      console.log("%c before mount", "background:#f1f ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 挂载后回调
  afterUnmount: [
    (app) => {
      console.log("%c after unload", "background:#a7a ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 卸载后回调
};
