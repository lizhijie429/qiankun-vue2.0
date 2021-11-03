/*
 * @Author: lizhijie429
 * @Date: 2021-08-16 17:09:09
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-11-03 10:57:50
 * @Description:
 */

import store from "../store/index";
import { initGlobalState } from "qiankun";
// import { findCurrentPage } from "../utils";

// 定义全局下发的数据
export const initialState = {
  // 当前登录用户
  userInfo: null,
  // 全局配置
  globalConfig: null,
  // 路由数据
  routers: null,
  // tabs数据
  tabsList: [],
  // 当前页面
  currentPage: "",
  // 当前模块
  currentModuleName: "",
};

// 初始化全局下发的数据
export const qiankunActions = initGlobalState(initialState);

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
