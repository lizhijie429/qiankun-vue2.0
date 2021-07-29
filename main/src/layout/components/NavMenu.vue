<template>
  <div class="flex-row border-bottom" style="padding: 0px 20px; height: 60px">
    <el-menu class="flex-1 none-border" :default-active="currentModuleName" mode="horizontal">
      <el-menu-item index="home" @click="toHome">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item
        v-for="(item, index) in menus"
        :key="index + 'menus'"
        :index="item.moduleName"
        @click="handleSelect(item)"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.moduleTitle }}</span>
      </el-menu-item>
    </el-menu>
    <div class="flex-row flex-items-center">
      <div style="padding-right: 20px">全局数据：{{ userName }}</div>
      <div class="menu-icons">
        <span class="menu-icon">
          <i class="el-icon-search icon" />
        </span>
        <span class="menu-icon">
          <i class="el-icon-message icon" />
        </span>
        <span class="menu-icon">
          <el-badge is-dot class="item">
            <i class="el-icon-bell icon" />
          </el-badge>
        </span>
      </div>
      <div class="cursor-pointer" style="height: 60px">
        <span v-if="!isScresnFull" class="qiankun-font iconscreen-full" @click="screenfullClick()"></span>
        <span v-else class="qiankun-font iconscreen-exit" @click="screenfullClick()"></span>
      </div>
      <el-dropdown @command="handleCommand">
        <div class="flex-row flex-items-center cursor-pointer">
          <el-avatar class="border" :src="avatarImg"></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">修改用户名</el-dropdown-item>
          <el-dropdown-item command="logout">跳转登录页</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import screenfull from "screenfull";
export default {
  data() {
    return {
      avatarImg: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      isScresnFull: false,
    };
  },
  computed: {
    ...mapState({
      currentModuleName: (state) => state.permission.currentModuleName,
      userName: (state) => state.userInfo.name,
      menus: (state) => state.permission.menuList,
    }),
  },
  methods: {
    toHome() {
      const homeMenuData = {
        title: "首页",
        moduleName: "Home",
        path: "/home",
        meta: { isTabs: false, isSide: false, isMain: true },
      };
      this.$router.push(`/home`);
      this.$store.commit("UPDATE_CURRENT_PAGE", "/home");
      this.$store.commit("UPDATE_TABS_LIST", homeMenuData);
    },
    filterMenus(valuse) {
      let _this = this;
      if (valuse) {
        this.menus.forEach((element) => {
          if (element.moduleName === valuse) {
            this.$actions.setGlobalState({ routers: _this.menus });
            this.$store.commit("UPDATE_SUB_MENU", element.menuList);
            this.$store.commit("UPDATE_TABS_LIST", element.menuList[0]);
          }
        });
      }
    },
    handleSelect(item) {
      sessionStorage.setItem("currentMenu", item.moduleName);
      this.filterMenus(item.moduleName);
      this.$store.commit("UPDATE_CURRENT_MODULE_NAME", item.moduleName);
      let routePath = `/${item.moduleName}/home`;
      this.$store.commit("UPDATE_CURRENT_PAGE", routePath);
      sessionStorage.setItem("currentPage", routePath);
      this.$router.push(routePath);
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push({ path: "/login" });
        return;
      }
      if (command === "setting") {
        this.$store.commit("UPDATE_USER_INFO_ITEM", { key: "userInfo", value: { name: "zhangsan" } });
        this.$actions.setGlobalState({ userInfo: { name: "zhangsan" } });
      }
    },
    screenfullClick() {
      if (screenfull.isEnabled) {
        screenfull.toggle();
        this.isScresnFull = !this.isScresnFull;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.qiankun-font {
  font-size: 22px;
  padding-right: 20px;
  line-height: 60px;
}
.menu-icons {
  padding-right: 20px;
  display: flex;
  align-items: center;
  .menu-icon {
    padding: 0 12px;
    cursor: pointer;
    .icon {
      display: inline-block;
      font-size: 18px;
      text-align: center;
    }
  }
}
</style>
