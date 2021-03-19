import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "about" */ "../views/404.vue"),
  },
];

// 处理重复点击同一个路由报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "history",
  routes,
});

// const childrenPath = ["/sub01", "/sub02"];
// router.beforeEach((to, from, next) => {
//   if (to.name) {
//     // 有 name 属性，说明是主应用的路由
//     next();
//   }
//   if (childrenPath.some((item) => to.path.includes(item))) {
//     next();
//   }
//   next({ name: "404" });
// });

export default router;
