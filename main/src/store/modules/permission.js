import http from "@/utils/axios";
import { constantRoutes } from "@/router";
import Layout from "@/views/Layout";
const permission = {
  namespaced: true,
  state: () => ({
    routers: null,
    menuList: [],
    subMenu: [],
    currentModuleName: "home",
    currentPage: null,
  }),
  mutations: {
    UPDATE_CURRENT_MODULE_NAME(state, payload) {
      sessionStorage.setItem("currentApp", payload);
      state.currentModuleName = payload;
    },
    UPDATE_CURRENT_PAGE(state, payload) {
      sessionStorage.setItem("currentPage", payload);
      state.currentPage = payload;
    },
    UPDATE_MENU_LIST(state, payload) {
      state.menuList = payload;
    },
    UPDATE_SUB_MENU(state, payload) {
      state.subMenu = [];
      const homeMenuData = {
        title: "首页",
        moduleName: "Home",
        path: "/home",
        meta: { isTabs: false, isSide: false, moduleName: "main", title: "首页" },
      };
      if (typeof payload === "boolean") {
        state.subMenu.push(homeMenuData);
        return;
      }
      if (typeof payload === "object") {
        state.subMenu = payload;
      }
    },
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
  return routers;
}

export default permission;
