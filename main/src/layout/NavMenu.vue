<template>
  <div class="flex-row border-bottom" style="padding: 0px 20px; height: 60px">
    <el-menu class="flex-1 none-border" default-active="1" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) in microApps" :key="index + 'microApps'" :index="item.activeRule">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
    <div class="flex-row flex-items-center">
      <div class="cursor-pointer" style="height: 60px">
        <span v-if="!isScresnFull" class="qiankun-font iconscreen-full" @click="screenfullClick()"></span>
        <span v-else class="qiankun-font iconscreen-exit" @click="screenfullClick()"></span>
      </div>
      <el-dropdown @command="handleCommand">
        <div class="flex-row flex-items-center cursor-pointer">
          <el-avatar class="border" :src="avatarImg"></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setting">个人设置</el-dropdown-item>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
import microApps from "../qiankun/app";
export default {
  data() {
    return {
      microApps,
      avatarImg: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      isScresnFull: false,
    };
  },
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule);
      // this.current = item.name
    },
    handleSelect(key) {
      history.pushState(null, key, key);
    },
    handleCommand(command) {
      if (command === "logout") {
        this.$router.push({ path: "/login" });
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
<style scoped>
.qiankun-font {
  font-size: 22px;
  padding-right: 20px;
  line-height: 60px;
}
</style>
