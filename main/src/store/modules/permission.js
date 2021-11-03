/* 网络请求 */
// import http from "@/utils/axios";
/* 这个是为了请求本地json文件-------临时使用 */
import http from "axios";
import { constantRoutes } from "@/router";
import Layout from "@/views/Layout";
import { homeMenuData } from "../../utils";

const permission = {
  namespaced: true,
  state: () => ({
    routers: null,
    menuList: [],
    subMenu: [],
    currentModuleName: "main",
    currentPage: "/home",
  }),
  mutations: {
    // 当前模块
    UPDATE_CURRENT_MODULE_NAME(state, payload) {
      sessionStorage.setItem("currentApp", payload);
      state.currentModuleName = payload;
    },
    // 当前页面
    UPDATE_CURRENT_PAGE(state, payload) {
      sessionStorage.setItem("currentPage", payload);
      state.currentPage = payload;
    },
    // 菜单数据
    UPDATE_MENU_LIST(state, payload) {
      state.menuList = payload;
    },
    // 左侧菜单数据，子应用菜单数据
    UPDATE_SUB_MENU(state, payload) {
      state.subMenu = [];
      if (typeof payload === "boolean") {
        state.subMenu.push(homeMenuData);
        return;
      }
      if (typeof payload === "object") {
        state.subMenu = payload;
      }
    },
    // 路由数据
    UPDATE_ROUTERS(state, payload) {
      state.routers = constantRoutes.concat(payload);
    },
  },
  actions: {
    generateRoutes({ commit }) {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        http.get("/mock/menu.json").then((res) => {
          const data = res.data;
          commit("UPDATE_MENU_LIST", data);
          let routes = [];
          for (let i = 0; i < data.length; i++) {
            const module = data[i];
            const route = getMenuItem(module.menuList);
            routes = [...routes, ...route];
          }
          routes.push({
            path: "*",
            name: "notfound",
            component: () => import("@/views/404.vue"),
          });
          commit("UPDATE_ROUTERS", routes);
          resolve(routes);
        });
      });
    },
  },
  getters: {},
};

// 组装路由数据
function getMenuItem(menus) {
  let routers = [];
  for (let index = 0; index < menus.length; index++) {
    const menu = menus[index];
    if (menu.children && menu.children.length > 0) {
      routers = [...routers, ...getMenuItem(menu.children)];
    } else {
      const route = {
        path: menu.path,
        component: Layout,
        name: menu.name,
        meta: menu.meta,
      };
      route.meta.title = menu.title;
      route.meta.moduleName = menu.moduleName;
      routers.push(route);
    }
  }
  return routers;
}

export default permission;
