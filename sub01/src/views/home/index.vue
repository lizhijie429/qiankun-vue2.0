<template>
  <div class="home">
    <h1>应用跳转页面</h1>
    <el-button type="primary" @click="gotoLogin">跳转登录页</el-button>
    <el-button type="success" @click="gotoSub02">跳转sub02</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sub01Home",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },
  components: {},
  computed: {
    ...mapState("global", {
      tabsList: (state) => state.tabsList,
    }),
  },
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
