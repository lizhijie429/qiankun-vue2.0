<template>
  <div class="home">
    <h1>应用跳转页面</h1>
    <el-button type="primary" @click="jumpPage('/login', 'main')">跳转登录页</el-button>
    <el-button type="primary" @click="jumpPage('/home', 'main')">跳转首页</el-button>
    <el-button type="success" @click="jumpPage('/sub02/about', 'sub02')">跳转sub02</el-button>
    <h1 style="cursor: pointer" @click="numAdd">应用缓存测试:{{ num }}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sub01Home",
  data() {
    return {
      num: 123,
    };
  },
  components: {},
  computed: {
    ...mapState("global", {
      tabsList: (state) => state.tabsList,
    }),
  },
  methods: {
    numAdd() {
      this.num += this.num;
    },
  },
};
</script>
