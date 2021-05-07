// import http from "@/utils/axios";
import http from "axios";
import { constantRoutes } from "@/router";
import Layout from "@/views/Layout";

const permission = {
  state: () => ({
    routers: null,
    menus: [],
    subMenu: [],
    currentModuleName: "home",
    currentPage: null,
  }),
  mutations: {
    UPDATE_CURRENT_MODULE_NAME(state, payload) {
      state.currentModuleName = payload;
    },
    UPDATE_CURRENT_PAGE(state, payload) {
      state.currentPage = payload;
    },
    UPDATE_MENUS(state, payload) {
      state.menus = payload;
    },
    UPDATE_SUB_MENU(state, payload) {
      state.subMenu = [];
      const homeMenuData = {
        title: "首页",
        moduleName: "Home",
        path: "/home",
        meta: { isTabs: false, isSide: false, isMain: true },
      };
      if (typeof payload === "boolean") {
        state.subMenu.push(homeMenuData);
        return;
      }
      if (typeof payload === "object") {
        state.subMenu = payload;
      }
    },
    UPDATE_MENU_LIST(state, payload) {
      state.routers = constantRoutes.concat(payload);
    },
  },
  actions: {
    generateRoutes({ commit }) {
      return new Promise((resolve) => {
        // 向后端请求路由数据
        http.get("/api/menu.json").then((res) => {
          let routes = [];
          for (let i = 0; i < res.data.length; i++) {
            const module = res.data[i];
            const route = getMenuItem(module.menuList);
            routes = [...routes, ...route];
          }
          routes.push({
            path: "*",
            name: "notfound",
            component: () => import("@/views/404.vue"),
          });
          commit("UPDATE_MENUS", res.data);
          commit("UPDATE_MENU_LIST", routes);
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
    const route = {
      path: menu.path,
      component: Layout,
      name: menu.name,
      meta: menu.meta,
      title: menu.title,
      moduleName: menu.moduleName,
    };
    routers.push(route);
  }
  return routers;
}

export default permission;
