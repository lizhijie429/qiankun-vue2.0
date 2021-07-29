const user = {
  namespaced: true,
  state: () => ({
    userInfo: { name: "qiankun" },
    globalConfig: { formSize: "small" },
  }),
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
};
export default user;
