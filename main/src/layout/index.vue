<template>
  <el-container style="height: 100%">
    <el-aside width="240px" style="text-align: left">
      <side-menu></side-menu>
    </el-aside>
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapState } from "vuex";
import { SideMenu, NavMenu } from "./components/index";
export default {
  components: {
    SideMenu,
    NavMenu,
  },
  computed: {
    ...mapState({
      menus: (state) => state.permission.menus,
    }),
  },
  mounted() {
    const currentPage = sessionStorage.getItem("currentPage");
    if (currentPage) {
      this.$store.commit("UPDATE_CURRENT_PAGE", currentPage);
    } else {
      this.$store.commit("UPDATE_CURRENT_PAGE", "/home");
    }
    const currentMenu = sessionStorage.getItem("currentMenu");
    if (currentMenu) {
      let menuData = JSON.parse(currentMenu);
      this.filterMenus(menuData.name);
      this.$store.commit("UPDATE_CURRENT_MODULE_NAME", menuData.name);
    } else {
      this.$store.commit("UPDATE_SUB_MENU", true);
    }
  },
  methods: {
    filterMenus(valuse) {
      if (valuse) {
        this.menus.forEach((element) => {
          if (element.moduleName === valuse) {
            this.$actions.setGlobalState({ routers: element.menuList });
            this.$store.commit("UPDATE_SUB_MENU", element.menuList);
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
}
</style>
