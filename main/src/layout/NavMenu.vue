<!--
 * @Author: your name
 * @Date: 2021-03-18 15:40:52
 * @LastEditTime: 2021-03-18 15:59:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue2-demo\main\src\layout\SideMenu.vue
-->
<template>
  <el-menu default-active="1" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">子项目一</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-document"></i>
      <span slot="title">子项目二</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
