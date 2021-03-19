import Vue from "vue";
import store from "@/store";
import { initGlobalState } from "qiankun";

let initialState = Vue.observable({
  user: {}, // 当前登录用户
});

// 初始化state
const actions = initGlobalState(initialState);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log("state: 变更后的状态", state);
  console.log("prev: 变更后的状态", prev);
  for (let key in state) {
    initialState[key] = state[key];
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

// 移除当前应用的状态监听，微应用 umount 时会默认调用
actions.offGlobalStateChange();

// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
Vue.prototype.$actions = actions;

// 传入子应用的公共数据
export const props = {
  data: {
    store,
  },
  getGlobalState: actions.getGlobalState, // 下发getGlobalState方法
};
