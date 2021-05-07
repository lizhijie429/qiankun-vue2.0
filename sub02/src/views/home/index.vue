<template>
  <div class="home">
    <h1>sub02</h1>
    <img alt="Vue logo" src="../../assets/logo.png" />
    <el-button @click="update">修改用户名</el-button>
    <div>整个子应用的state：{{ $store.state }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("global", {
      user: (state) => state.user, // 获取父应用的user信息
    }),
  },
  methods: {
    ...mapActions("global", ["setGlobalState"]),
    update() {
      this.setGlobalState({ userInfo: { name: "sub02的张三" } });
    },
  },
};
</script>
