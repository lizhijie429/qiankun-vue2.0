<template>
  <div class="tabs-box flex-row flex-items-center">
    <div
      class="tabs-item paas-flex-cc"
      v-for="item in tabsList"
      :key="item.name"
      :class="item.path === currentPage ? 'tabs-item-hover' : 'null'"
    >
      <span>
        <span class="cursor-pointer fs-14 tabs-item-text" @click="handleClick(item)">{{ item.title }}</span>
        <i class="el-icon-close tabs-remove-icon cursor-pointer" @click="removeTab(item)"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      menuList: (state) => state.permission.menuList,
      currentPage: (state) => state.permission.currentPage,
      tabsList: (state) => state.tabs.tabsList,
    }),
  },
  methods: {
    // 获取元素数组下标
    getArrayIndex(arr, obj) {
      for (let index = 0; index < arr.length; index++) {
        const item = arr[index];
        if (item.name === obj) {
          return index;
        }
      }
      return -1;
    },
    // 跳转tabs标签
    handleClick(item) {
      if (this.currentPage === item.path) return false;
      // 设置左侧菜单数据
      if (item.path !== "/home") {
        const menu = this.menuList.filter((element) => {
          return element.moduleName === item.meta.moduleName;
        });
        this.$store.commit("permission/UPDATE_SUB_MENU", menu[0].menuList);
        this.$router.push({ path: item.path });
      } else {
        this.$store.commit("permission/UPDATE_SUB_MENU", true);
        this.$router.push({ path: item.path });
      }
    },
    // 删除tabs标签
    removeTab(item) {
      let tabsListLength = this.tabsList.length - 1;
      // 获取当前要删除的tabs的位置
      let indexOf = this.getArrayIndex(this.tabsList, item.name);
      if (tabsListLength === indexOf) {
        // 删除最后一个
        this.$store.dispatch("tabs/REMOVE_LAST_TAB", item);
      } else {
        // 删除除了第一个跟最后一个
        this.$store.dispatch("tabs/REMOVE_ANY_TAB", {
          indexOf,
          tabsItem: item,
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs-box {
  height: 0.32rem;
  padding: 0.1rem;
  .tabs-item {
    height: 100%;
    padding: 0 0.12rem;
    margin-right: 0.1rem;
    background-color: #fff;
    border-radius: 0.04rem;
    color: #333;
    font-size: 0.14rem;
    line-height: 0.32rem;
    white-space: nowrap;
    .tabs-item-text {
      &:hover {
        color: #23b7e5;
      }
    }
    .tabs-remove-icon {
      margin-left: 0.02rem;
      padding: 0.02rem;
      font-size: 0.04px;
      cursor: pointer;
    }
    .tabs-remove-icon:hover {
      border-radius: 50%;
      color: #fff;
      background-color: #23b7e5;
    }
  }
  .tabs-item:last-child {
    border-right: none !important;
  }
}
.tabs-item-hover {
  color: #23b7e5 !important;
}
</style>
