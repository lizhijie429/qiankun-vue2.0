<template>
  <div class="side-bar">
    <logo></logo>
    <el-menu
      class="side-menu"
      :default-active="currentPage"
      @open="handleOpen"
      @close="handleClose"
      background-color="#00142a"
      text-color="hsla(0, 0%, 100%, .65)"
      active-text-color="#409EFF"
    >
      <template v-for="item in subMenu">
        <el-menu-item v-if="item.name !== 'notfound'" :key="item.name" :index="item.path" @click="handleSelect(item)">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </template>
      <qr-code></qr-code>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Logo from "./Logo.vue";
import QrCode from "./QrCode.vue";
export default {
  components: { Logo, QrCode },
  computed: {
    ...mapState({
      subMenu: (state) => state.permission.subMenu,
      currentPage: (state) => state.permission.currentPage,
      tabsList: (state) => state.tabs.tabsList,
    }),
  },
  methods: {
    handleSelect(item) {
      this.$store.commit("tabs/UPDATE_TABS_LIST", item);
      this.$actions.setGlobalState({ tabsList: this.tabsList });
      this.$router.push(item.path);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
/deep/ .el-menu {
  border-right: none;
}
.side-bar {
  width: 240px;
  height: 100%;
}
.side-menu {
  width: 240px;
  height: calc(100% - 60px);
}
</style>
