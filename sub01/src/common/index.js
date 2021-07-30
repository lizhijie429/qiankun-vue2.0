const _import = require("./import-" + process.env.NODE_ENV);

//  为vuex添加global模块，存储全局下发的数据
function registerGlobalModule(store, props = {}) {
  const initState = {
    userInfo: {},
    globalConfig: {},
  };
  if (!store.hasModule("global")) {
    const globalModule = {
      namespaced: true,
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
          state = Object.assign(state, payload);
        },
        emitGlobalState(state) {
          if (props.setGlobalState) {
            props.setGlobalState(state);
          }
        },
      },
    };
    store.registerModule("global", globalModule);
  }
}

//  为vuex添加routes模块,存储及修改动态路由数据
function registerRoutesModule(store) {
  if (!store.hasModule("routes")) {
    const routesModule = {
      namespaced: true,
      state: {
        routesData: [],
      },
      mutations: {
        UPDATE_ROUTER_DATA(state, payload) {
          state.routesData = payload;
        },
      },
    };
    store.registerModule("routes", routesModule);
  }
}

// 封装路由数据
function getRoutes(store, props) {
  if (!props && !store) return;
  if (props.globalState && props.globalState.routers) {
    const routesData = props.globalState.routers;
    if (props.name) {
      const routes = [];
      for (let i = 0, length = routesData.length; i < length; i += 1) {
        const element = routesData[i];
        if (element.path && element.meta && element.meta.moduleName && element.meta.moduleName === props.name) {
          const path = element.path.slice(props.name.length + 1);
          element.path = path;
          element.component = _import(path);
          routes.push(element);
        }
      }
      store.commit("routes/UPDATE_ROUTER_DATA", routes);
    }
  }
}

function initGlobalState(store, props) {
  registerGlobalModule(store, props);
  registerRoutesModule(store);
  getRoutes(store, props);
}

export default {
  initGlobalState,
};
