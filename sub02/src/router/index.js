import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [];

// 处理重复点击同一个路由报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// const activePath = process.env.NODE_ENV === "development" ? `/${systemEnName}/` : `/udaam-ui/${systemEnName}/`;

const router = new VueRouter({
  base: window.__POWERED_BY_QIANKUN__ ? `${process.env.VUE_APP_BASE_URL}` : "/",
  isAddAsyncMenuData: false,
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  let rotesData = store.state.routes.routesData;
  if (!router.options.isAddAsyncMenuData) {
    if (rotesData.length > 0) {
      rotesData.forEach((element) => {
        router.addRoute(element);
      });
    }
    router.options.isAddAsyncMenuData = true;
    next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
  } else {
    next();
  }
});

export default router;
