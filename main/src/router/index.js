import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Layout from "@/views/Layout";

Vue.use(VueRouter);

const importFile = (fileName) => () => import(/* webpackChunkName: "main" */ `../views/${fileName}.vue`);

// 路由白名单(无需嵌套上左右整体布局)
const globalRoutes = [
  {
    path: "/login",
    name: "login",
    component: importFile("Login"),
    meta: { isTabs: false, isSide: false, isMain: true },
  },
];

// 路由
let pagesRouter = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    redirect: process.env.VUE_APP_DEFAULT_APP,
    // redirect: "home",
    children: [
      {
        path: "/home",
        name: "home",
        component: importFile("Home"),
        meta: { isTabs: true, isSide: true, isMain: true },
      },
    ],
  },
  ...globalRoutes,
];

// 处理重复点击同一个路由报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  routes: pagesRouter,
  isAddAsyncMenuData: false,
});

let routesDataList = [];
router.beforeEach(async (to, from, next) => {
  // 第一步：判断路由白名单
  // 第二步：判断路由数据
  if (router.options.isAddAsyncMenuData) {
    next();
  } else {
    let routeData = store.state.menuList;
    if (routeData === null) {
      await store.dispatch("getMenuList");
      routeData = store.state.menuList;
    }
    for (let i = 0; i < routeData.length; i++) {
      const element = routeData[i];
      const routes = handleRoutesData(element.menuList);
      routesDataList = [...routesDataList, ...routes];
    }
    router.options.isAddAsyncMenuData = true;
    pagesRouter[0].children = [...pagesRouter[0].children, ...routesDataList];
    router.addRoutes(pagesRouter);
    next({ replace: true }); // hack方法 确保addRoutes已完成
  }
});

// // 处理路由数据
function handleRoutesData(routeData) {
  let routes = [];
  for (let i = 0; i < routeData.length; i++) {
    const element = routeData[i];
    const route = {
      path: element.path,
      component: () => import("@/views/Layout.vue"),
      name: element.name,
      meta: element.meta,
    };
    routes.push(route);
  }
  return routes;
}

export default router;
