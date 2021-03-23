import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "normalize-css";
import "nprogress/nprogress.css";
import "./assets/fonts/iconfont.css";
import "./assets/scss/index.scss";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import "./qiankun";
import validator from "validator";
Vue.prototype.$validator = validator;
import http from "./utils/axios";
Vue.prototype.$http = http;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main");
