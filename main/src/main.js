import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start, initGlobalState } from "qiankun";

import "qiankun-vue2-common/style/index.scss";
import "qiankun-vue2-common/iconfont/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { size: "small" });

import validator from "validator";
Vue.prototype.$validator = validator;
import http from "./utils/axios";
Vue.prototype.$http = http;

import { parse, stringify } from "qs";
Vue.prototype.$qsParse = parse;
Vue.prototype.$qsStringify = stringify;

Vue.config.productionTip = false;

// 定义全局下发的数据
const initialState = {
  // 当前登录用户
  userInfo: null,
  // 全局配置
  globalConfig: null,
  // 路由数据
  routers: null,
  // tabs数据
  tabsList: [],
};

// 初始化全局下发的数据
const qiankunActions = initGlobalState(initialState);

Vue.prototype.$actions = qiankunActions;

// 检测全局下发数据的改变
qiankunActions.onGlobalStateChange((state) => {
  // 修改全局下发的数据
  for (const key in state) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      const element = state[key];
      initialState[key] = element;
      if (key === "userInfo") {
        store.commit("user/UPDATE_USER_INFO", element);
      }
      if (key === "globalConfig") {
        store.commit("user/UPDATE_GLOBAL_CONFIG", element);
      }
      if (key === "routers") {
        store.commit("permission/UPDATE_ROUTERS", element);
      }
      if (key === "tabsList") {
        store.commit("tabs/SET_TABS_LIST", element);
      }
    }
  }
});

const microApps = [
  {
    name: "sub01", // 应用名称
    entry: process.env.VUE_APP_CHILD_sub01,
    activeRule: "/sub01",
  },
  {
    name: "sub02",
    entry: process.env.VUE_APP_CHILD_sub02,
    activeRule: "/sub02",
  },
];

const config = {
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

// 子应用注册
export const registerApps = () => {
  registerMicroApps(apps, config);
  start({
    prefetch: "all", // 可选，是否开启预加载，默认为 true。
    sandbox: true, // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
  });
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main");
