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
