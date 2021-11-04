<template>
  <div class="flex-row border-bottom" style="padding: 0px 20px; height: 60px">
    <el-menu class="flex-1 none-border" :default-active="currentModuleName" mode="horizontal">
      <el-menu-item index="home" @click="toHome">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item
        v-for="(item, index) in menuList"
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
import { homeMenuData } from "../../utils";
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
      userName: (state) => state.user.userInfo.name,
      menuList: (state) => state.permission.menuList,
      tabsList: (state) => state.tabs.tabsList,
    }),
  },
  methods: {
    toHome() {
      this.$store.commit("tabs/UPDATE_TABS_LIST", homeMenuData);
      this.$store.commit("permission/UPDATE_CURRENT_MODULE_NAME", "main");

      this.$router.push(`/home`);
    },
    handleSelect(item) {
      const menu = this.menuList.filter((element) => {
        return element.moduleName === item.moduleName;
      });
      this.$store.commit("permission/UPDATE_SUB_MENU", menu[0].menuList);
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push({ path: "/login" });
        return false;
      }
      if (command === "setting") {
        this.$store.commit("user/UPDATE_USER_INFO_ITEM", { key: "userInfo", value: { name: "zhangsan" } });
        this.$actions.setGlobalState({ userInfo: { name: "zhangsan" } });
        return false;
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
