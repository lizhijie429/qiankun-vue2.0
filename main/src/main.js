import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "normalize-css";
// import "./assets/fonts/iconfont.css";
// import "./assets/scss/index.scss";
import "qiankun-vue2-common/style/index.scss";
import "qiankun-vue2-common/iconfont/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { size: "small" });

import "./qiankun";
import validator from "validator";
Vue.prototype.$validator = validator;
import http from "./utils/axios";
Vue.prototype.$http = http;

import { parse, stringify } from "qs";
Vue.prototype.$qsParse = parse;
Vue.prototype.$qsStringify = stringify;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#main");
