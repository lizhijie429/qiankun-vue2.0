<template>
  <div class="home">
    <h1>sub02</h1>
    <h1 style="cursor: pointer" @click="numAdd">应用缓存测试:{{ num }}</h1>
    <el-button type="primary" @click="update">修改用户名</el-button>
    <el-button type="primary" @click="jumpPage('/sub02/about', 'sub02')">子应用内的跳转</el-button>
    <div class="json-container-title">初始化后的this.$store.state的所有内容：</div>
    <json-view :data="jsonData" :deep="4" />
  </div>
</template>

<script>
import jsonView from "vue-json-views";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      jsonData: this.$store.state,
      num: 123,
    };
  },
  components: {
    jsonView,
  },
  computed: {
    ...mapState("global", {
      userInfo: (state) => {
        return JSON.stringify(state.userInfo);
      }, // 获取父应用的user信息
    }),
  },
  methods: {
    ...mapActions("global", ["setGlobalState"]),
    update() {
      this.setGlobalState({ userInfo: { name: "sub02的张三" } });
    },
    numAdd() {
      this.num += this.num;
    },
  },
};
</script>
<style lang="scss" scoped>
/deep/ .json-view-container .json-view {
  padding-left: 0.4rem !important;
}
/deep/ .json-view-container .json-view .json-item {
  padding-left: 0.4rem !important;
}
.json-container-title {
  padding: 0.3rem 0 0.1rem;
  font-size: 0.16rem;
  font-weight: bold;
}
</style>
