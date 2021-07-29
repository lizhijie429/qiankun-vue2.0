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
};

// 初始化全局下发的数据
export const qiankunActions = initGlobalState(initialState);

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
        store.commit("permission/UPDATE_SUB_MENU", element);
      }
    }
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main");

// 子应用注册
export const registerApps = () => {
  registerMicroApps([
    {
      name: "sub01", // 应用名称
      entry: "//localhost:8010/sub01",
      container: "#subapp-viewport",
      activeRule: "/sub01",
      props: {
        routerBase: "/sub01", // 下发基础路由
        globalState: initialState, // 下发全局数据方法
      },
    },
    {
      name: "sub02",
      entry: "//localhost:8020/sub02",
      container: "#subapp-viewport",
      activeRule: "/sub02",
      props: {
        routerBase: "/sub02",
        globalState: initialState,
      },
    },
  ]);
  start({
    prefetch: "all", // 可选，是否开启预加载，默认为 true。
    sandbox: true, // 可选，是否开启沙箱，默认为 true。// 从而确保微应用的样式不会对全局造成影响。
    singular: true, // 可选，是否为单实例场景，单实例指的是同一时间只会渲染一个微应用。默认为 true。
  });
};
