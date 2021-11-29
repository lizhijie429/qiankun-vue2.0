<template>
  <div class="home">
    <div>main登录页面</div>
    <el-button type="primary" @click="toHome">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    sessionStorage.removeItem("currentApp");
    sessionStorage.removeItem("currentPage");
    this.$actions.setGlobalState({ userInfo: { name: "lizhijie429" } });
  },
  methods: {
    // 跳转首页
    toHome() {
      this.$store.commit("permission/UPDATE_CURRENT_MODULE_NAME", "main");
      this.$store.commit("permission/UPDATE_CURRENT_PAGE", "/home");
      this.$router.push("/home");
    },
  },
};
</script>
