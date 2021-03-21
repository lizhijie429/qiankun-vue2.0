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
    UPDATE_MENU_LIST(state, value) {
      state.menuList = value;
    },
  },
  actions: {
    async getMenuList({ commit }) {
      // const res = await http.get("../../public/mock/menu.json");
      // console.log("--------------", res);
      commit("UPDATE_MENU_LIST", menuDataList);
    },
  },
  modules: {},
});
