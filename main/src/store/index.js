import Vue from "vue";
import Vuex from "vuex";
// import http from "../utils/axios";
import permission from "./modules/permission";
import tabs from "./modules/tabs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: { name: "qiankun" },
    globalConfig: { formSize: "small" },
  },
  mutations: {
    UPDATE_USER_INFO_ITEM(state, payload) {
      state[payload.key] = payload.value;
    },
    UPDATE_GLOBAL_CONFIG_ITEM(state, payload) {
      state[payload.key] = payload.value;
    },
    UPDATE_USER_INFO(state, payload) {
      state.userInfo = payload;
    },
    UPDATE_GLOBAL_CONFIG(state, payload) {
      state.globalConfig = payload;
    },
  },
  actions: {},
  modules: {
    permission,
    tabs,
  },
});
