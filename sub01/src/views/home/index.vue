<template>
  <div class="home">
    <h1>sub01</h1>
    <el-button type="primary" @click="gotoLogin">跳转登录页</el-button>
    <el-button type="success" @click="gotoSub02">跳转sub02</el-button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "sub01Home",
  components: {},
  computed: {
    ...mapState("global", {
      tabsList: (state) => state.tabsList,
    }),
  },
  methods: {
    gotoSub02() {
      console.log("this.tabsList", this.$store.state);
      history.pushState(null, "sub02", "/sub02/about");
    },
    gotoLogin() {
      history.pushState(null, "", "/login");
    },
  },
};
</script>
