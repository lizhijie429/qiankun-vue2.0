import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: { name: "qiankun" },
    globalConfig: { formSize: "small" },
  },
  mutations: {},
  actions: {},
  modules: {},
});
