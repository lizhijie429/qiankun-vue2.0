<template>
  <div class="side-bar">
    <div class="logo">
      <span class="site-name">ADMIN LITE</span>
    </div>
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
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      subMenu: (state) => state.permission.subMenu,
      currentPage: (state) => state.permission.currentPage,
    }),
  },
  methods: {
    handleSelect(item) {
      this.$store.commit("UPDATE_CURRENT_PAGE", item.path);

      this.$store.commit("UPDATE_CURRENT_MODULE_NAME", item.moduleName);
      this.$store.commit("UPDATE_TABS_LIST", item);
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
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  line-height: 64px;
  background: #002140;
  color: #fff;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
}
</style>
