import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

function setCommonData(props) {
  const { store } = props.data;
  let formSize = store.state.globalConfig.formSize;
  Vue.use(ElementUI, { size: formSize });
}

function initGlobalState(store, props = {}) {
  registerGlobalModule(store, props);
}

function registerGlobalModule(store, props = {}) {
  // 获取初始化的state
  const initState = (props.getGlobalState && props.getGlobalState()) || {
    user: {},
    currentProject: {},
  };

  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule("global")) {
    const globalModule = {
      state: initState,
      actions: {
        // 子应用改变state并通知父应用
        setGlobalState({ commit }, payload) {
          commit("setGlobalState", payload);
          commit("emitGlobalState", payload);
        },
        // 初始化，只用于mount时同步父应用的数据
        initGlobalState({ commit }, payload) {
          commit("setGlobalState", payload);
        },
      },
      mutations: {
        setGlobalState(state, payload) {
          // eslint-disable-next-line
          state = Object.assign(state, payload);
        },
        // 通知父应用
        emitGlobalState(state) {
          if (props.setGlobalState) {
            props.setGlobalState(state);
          }
        },
      },
    };
    store.registerModule("global", globalModule);
  } else {
    // 每次mount时，都同步一次父应用数据
    store.dispatch("global/initGlobalState", initState);
  }
}

export default {
  setCommonData,
  initGlobalState,
};
