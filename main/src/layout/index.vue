<!--
 * @Author: your name
 * @Date: 2021-03-18 14:55:00
 * @LastEditTime: 2021-03-19 10:29:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2-demo\main\src\layout\index.vue
-->
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
import SideMenu from "./SideMenu.vue";
import NavMenu from "./NavMenu.vue";
export default {
  components: {
    SideMenu,
    NavMenu,
  },
};
</script>

<style lang="scss" scoped>
/deep/.el-container {
  height: 100%;
}
.el-header,
.el-footer {
  padding: 0;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
