<template>
  <div class="home">
    <h1>main登录页面</h1>
    <el-button type="primary" @click="toHome">登录</el-button>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    this.$actions.setGlobalState({ user: { name: "lizhijie" } });
  },
  methods: {
    // 跳转首页
    toHome() {
      this.$router.push(process.env.VUE_APP_DEFAULT_APP);
    },
  },
};
</script>
