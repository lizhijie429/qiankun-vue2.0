<template>
  <div class="home">
    <h1>sub01</h1>
    <el-button type="primary" @click="gotoLogin">跳转登录页</el-button>
    <el-button type="success" @click="gotoSub02">跳转sub02</el-button>
    <img alt="Vue logo" src="../../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "sub01Home",
  components: {},
  methods: {
    gotoSub02() {
      history.pushState(null, "sub02", "/sub02/about");
    },
    gotoLogin() {
      history.pushState(null, "", "/login");
    },
  },
};
</script>
