<template>
  <el-container style="height: 100%">
    <el-aside width="240px" style="text-align: left">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <tabs></tabs>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
// import { findCurrentPage } from "../utils";
import { SideMenu, NavMenu, Tabs } from "./components/index";
export default {
  name: "Layout",
  components: {
    SideMenu,
    NavMenu,
    Tabs,
  },
  computed: {
    ...mapState({
      menuList: (state) => state.permission.menuList,
      tabsList: (state) => state.tabs.tabsList,
    }),
  },
  mounted() {
    // 初始化全局下发的数据
    this.$actions.setGlobalState({
      userInfo: this.$store.state.user.userInfo,
      globalConfig: this.$store.state.user.globalConfig,
      routers: this.$store.state.permission.routers,
    });
    // 获取页面持久化数据
    const currentPage = sessionStorage.getItem("currentPage");
    const currentApp = sessionStorage.getItem("currentApp");
    // 处理关闭前页面是首页的情况
    const homeMenuData = {
      title: "首页",
      moduleName: "main",
      name: "home",
      path: "/home",
      meta: { isTabs: false, isSide: false, moduleName: "main", title: "首页" },
    };
    if (currentPage && currentPage === "/home" && currentApp && currentApp === "main") {
      this.$store.commit("permission/UPDATE_SUB_MENU", true);
      this.$store.commit("tabs/UPDATE_TABS_LIST", homeMenuData);
      this.$actions.setGlobalState({ tabsList: this.tabsList });
      this.$actions.setGlobalState({
        currentPage: {
          pagePath: "/home",
          moduleName: "main",
        },
      });
      return false;
    }
    // 处理关闭前非首页页面持久化逻辑
    if (currentPage && currentApp) {
      this.$actions.setGlobalState({
        currentPage: {
          pagePath: currentPage,
          moduleName: currentApp,
        },
      });
      // 获取左侧菜单数据
      const menu = this.menuList.filter((element) => {
        return element.moduleName === currentApp;
      });
      this.$store.commit("permission/UPDATE_SUB_MENU", menu[0].menuList);
      // 跳转页面
      const page = menu[0].menuList.filter((element) => {
        return element.path === currentPage;
      });
      // const page = findCurrentPage(menu[0].menuList, currentPage);
      this.$store.commit("tabs/UPDATE_TABS_LIST", page[0]);
      this.$actions.setGlobalState({
        currentPage: {
          pagePath: page[0].path,
          moduleName: page[0].moduleName,
        },
      });
    } else {
      this.$store.commit("permission/UPDATE_SUB_MENU", true);
      this.$store.commit("tabs/UPDATE_TABS_LIST", homeMenuData);
      this.$actions.setGlobalState({
        currentPage: {
          pagePath: "/home",
          moduleName: "main",
        },
      });
    }
    this.$actions.setGlobalState({ tabsList: this.tabsList });
  },
};
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
  padding: 0;
  color: #333;
  text-align: center;
  background-color: #fff;
}
.el-main::-webkit-scrollbar {
  display: none;
}
.el-main {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.el-main {
  margin: 0 0.1rem 0.1rem;
  padding: 0.2rem;
  background-color: #fff;
}
</style>
