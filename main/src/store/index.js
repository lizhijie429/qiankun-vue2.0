import Vue from "vue";
import Vuex from "vuex";
// import http from "../utils/axios";
import menuDataList from "../mock/menu.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: { name: "qiankun" },
    globalConfig: { formSize: "small" },
    menuList: null,
  },
  mutations: {
    UPDATE_MENU_LIST(state, payload) {
      state.menuList = payload;
    },
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
  actions: {
    async getMenuList({ commit }) {
      commit("UPDATE_MENU_LIST", menuDataList);
    },
  },
  modules: {},
});
