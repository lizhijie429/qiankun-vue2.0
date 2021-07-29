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
    }),
  },
  watch: {
    $route(to) {
      this.$store.commit("UPDATE_CURRENT_PAGE", to.path);
      sessionStorage.setItem("currentPage", to.path);
    },
  },
  mounted() {
    const homeMenuData = {
      title: "首页",
      moduleName: "Home",
      path: "/home",
      meta: { isTabs: false, isSide: false, isMain: true },
    };
    // 当前页面持久化
    const currentPage = sessionStorage.getItem("currentPage");
    if (currentPage) {
      this.filterMenuList({ path: currentPage });
      this.$store.commit("UPDATE_CURRENT_PAGE", currentPage);
    } else {
      // 过滤左侧菜单
      const currentMenu = sessionStorage.getItem("currentMenu");
      if (currentMenu) {
        this.filterMenuList({ moduleName: currentMenu });
      } else {
        this.$store.commit("UPDATE_SUB_MENU", true);
        this.$store.commit("UPDATE_TABS_LIST", homeMenuData);
        this.$store.commit("UPDATE_CURRENT_PAGE", "/home");
      }
    }
  },
  methods: {
    filterMenuList(valuse) {
      const _this = this;
      if (valuse && valuse.moduleName) {
        this.menuList.forEach((element) => {
          if (element.moduleName === valuse.moduleName) {
            this.$actions.setGlobalState({ routers: _this.menus });
            this.$store.commit("UPDATE_CURRENT_MODULE_NAME", valuse.moduleName);
            this.$store.commit("UPDATE_SUB_MENU", element.menuList);
            this.$store.commit("UPDATE_TABS_LIST", element.menuList[0]);
          }
        });
      } else if (valuse && valuse.path) {
        this.menuList.forEach((element) => {
          for (let i = 0, length = element.menuList.length; i < length; i += 1) {
            const item = element.menuList[i];
            if (item.path === valuse.path) {
              this.$store.commit("UPDATE_CURRENT_MODULE_NAME", element.moduleName);
              this.$actions.setGlobalState({ routers: _this.menus });
              this.$store.commit("UPDATE_SUB_MENU", element.menuList);
              this.$store.commit("UPDATE_TABS_LIST", item);
            }
          }
        });
      }
    },
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
