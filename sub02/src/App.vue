<!--
 * @Description: 
 * @Author: lizhijie
 * @Date: 2021-03-24 08:40:19
 * @LastEditTime: 2021-12-25 10:02:14
 * @LastEditors: lizhijie
 * @Reference: 
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  mounted() {
    let elements = document.querySelector(".app-view-box").childNodes;
    let childrenNode = elements[0];
    childrenNode.setAttribute("style", "height:100%");
  },
};
</script>
