import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import common from "qiankun-vue2-common";
import "qiankun-vue2-common/iconfont/iconfont.css";
Vue.config.productionTip = false;

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import validator from "validator";
Vue.prototype.$validator = validator;

let instance = null;
function render(props = {}) {
  const { container } = props;
  let globalConfig = props.getGlobalState("globalConfig");
  Vue.use(ElementUI, { size: globalConfig.formSize || "small" });
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  console.log("[vue] vue app bootstraped", props);
  common.setCommonData(props);
}
export async function mount(props) {
  console.log("[vue] props from main framework", props);
  common.initGlobalState(store, props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
}
