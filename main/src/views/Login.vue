<template>
  <div class="home">
    <h1>登录页面</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    console.log("this.$actions", this.$actions);
    this.$actions.setGlobalState({ user: { name: "lizhijie" } });
  },
};
</script>
