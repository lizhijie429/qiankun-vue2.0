<template>
  <div class="flex-row border-bottom" style="padding: 0px 20px; height: 60px">
    <el-menu class="flex-1 none-border" default-active="1" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">子项目一</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">子项目二</span>
      </el-menu-item>
    </el-menu>
    <div class="flex-row flex-items-center">
      <div class="cursor-pointer" style="height: 60px">
        <span v-if="!isScresnFull" class="qiankun-font iconscreen-full" @click="screenfullClick(true)"></span>
        <span v-else class="qiankun-font iconscreen-exit" @click="screenfullClick(false)"></span>
      </div>
      <el-dropdown>
        <div class="flex-row flex-items-center cursor-pointer">
          <el-avatar class="border" :src="avatarImg"></el-avatar>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人设置</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";
export default {
  data() {
    return {
      avatarImg: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
      isScresnFull: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    screenfullClick(value) {
      this.isScresnFull = value;
      if (screenfull.isEnabled) {
        screenfull.toggle();
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
