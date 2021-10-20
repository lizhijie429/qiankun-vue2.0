<template>
  <div class="about">
    <h1>修改全局数据页面</h1>
    <el-button type="primary" @click="update">更新姓名</el-button>
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
      this.setGlobalState({ userInfo: { name: "sub01的张三" } });
    },
  },
};
</script>
