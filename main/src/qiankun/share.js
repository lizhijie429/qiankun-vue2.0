import Vue from "vue";
import store from "@/store";
import { initGlobalState } from "qiankun";

let initialState = Vue.observable({
  userInfo: store.state.userInfo, // 当前登录用户
  globalConfig: store.state.globalConfig,
  // userInfo: {}, // 当前登录用户
  // globalConfig: {},
});

// 初始化state
const actions = initGlobalState(initialState);

actions.onGlobalStateChange((newValue) => {
  console.log("newValue", newValue);
  // 修改全局下发的数据
  for (let key in newValue) {
    initialState[key] = newValue[key];
    if (key === "userInfo") {
      store.commit("UPDATE_USER_INFO", newValue[key]);
      continue;
    }
    if (key === "globalConfig") {
      store.commit("UPDATE_GLOBAL_CONFIG", newValue[key]);
      continue;
    }
  }
});

//  按一级属性设置全局状态，微应用中只能修改已存在的一级属性
// actions.setGlobalState(state);

// 自定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部
  return key ? initialState[key] : initialState;
};

// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions;

// 传入子应用的公共数据
export const share = {
  mainStore: store,
  getGlobalState: actions.getGlobalState, // 下发getGlobalState方法
};
