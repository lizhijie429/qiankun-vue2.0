import { initialState } from "./globalState";

import config from "@/config";

const { SUB01_MICRO_APP, SUB02_MICRO_APP } = config;

const microApps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "sub01",
    entry: SUB01_MICRO_APP,
    activeRule: "/sub01",
  },
  {
    name: "sub02",
    entry: SUB02_MICRO_APP,
    activeRule: "/sub02",
  },
];

/* 重构apps */
export const filterApps = () => {
  microApps.forEach((item) => {
    // 必选，微应用的容器节点的选择器或者 Element 实例。
    item.container = "#subapp-viewport";
    // 可选，主应用需要传递给微应用的数据。
    item.props = {
      routerBase: item.activeRule, // 下发基础路由
      globalState: initialState, // 下发全局数据方法
    };
  });
  return microApps;
};

/* qiankun全局声明周期钩子 */
export const microConfig = {
  beforeLoad: [
    (app) => {
      console.log("%c before load", "background:#3a5ab0 ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 挂载前回调
  beforeMount: [
    (app) => {
      console.log("%c before mount", "background:#7d9553 ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 挂载后回调
  afterUnmount: [
    (app) => {
      console.log("%c after unload", "background:#d2525c ; padding: 1px; border-radius: 3px;  color: #fff", app);
    },
  ], // 卸载后回调
};
