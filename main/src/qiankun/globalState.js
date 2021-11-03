/*
 * @Author: lizhijie429
 * @Date: 2021-08-16 17:09:09
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-11-03 15:14:13
 * @Description:
 */

import store from "../store/index";
import { initGlobalState } from "qiankun";
import { getLastLevelNode } from "../utils";

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
  // 实现子应用直接跳转子应用
  currentRoute: {
    // 当前页面
    currentPage: "",
    // 当前模块
    currentModuleName: "",
  },
};

// 初始化全局下发的数据
export const qiankunActions = initGlobalState(initialState);

// 检测全局下发数据的改变
qiankunActions.onGlobalStateChange((state) => {
  // 修改全局下发的数据
  for (const key in state) {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      const item = state[key];
      initialState[key] = item;
      if (key === "userInfo") {
        store.commit("user/UPDATE_USER_INFO", item);
      }
      if (key === "globalConfig") {
        store.commit("user/UPDATE_GLOBAL_CONFIG", item);
      }
      if (key === "routers") {
        store.commit("permission/UPDATE_ROUTERS", item);
      }
      if (key === "tabsList") {
        store.commit("tabs/SET_TABS_LIST", item);
      }
      if (key === "currentRoute" && item.currentModuleName && item.currentPage) {
        const menuList = store.state.permission.menuList;
        // 获取左侧菜单数据
        const subMenus = menuList.filter((element) => {
          return element.moduleName === item.currentModuleName;
        });
        store.commit("permission/UPDATE_SUB_MENU", subMenus[0].menuList);
        store.commit("permission/UPDATE_CURRENT_MODULE_NAME", item.currentModuleName);
        store.commit("permission/UPDATE_CURRENT_PAGE", item.currentPage);
        const pages = getLastLevelNode(subMenus[0].menuList);
        if (Array.isArray(pages)) {
          const page = pages.filter((element) => {
            return element.path === item.currentPage;
          });
          store.commit("tabs/UPDATE_TABS_LIST", page[0]);
        }
        console.log(item, subMenus);
      }
    }
  }
});
