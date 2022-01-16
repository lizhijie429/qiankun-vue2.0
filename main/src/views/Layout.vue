<template>
  <layout>
    <keep-alive>
      <router-view v-if="isMain" class="height-abs"></router-view>
      <template v-else>
        <!-- <div id="subApp-viewport" class="app-view-box"></div> -->
        <SubAppViewport></SubAppViewport>
      </template>
    </keep-alive>
  </layout>
</template>

<script>
import Layout from "@/layout/index.vue";
import { registerApps } from "@/qiankun/index";
const SubAppViewport = { name: "SubAppViewport", template: `<div id="subApp-viewport" class="app-view-box"></div>` };
export default {
  data() {
    return {
      isMain: false,
    };
  },
  components: {
    Layout,
    SubAppViewport,
  },
  watch: {
    $route(to) {
      this.isMainPage(to);
    },
  },
  mounted() {
    this.isMainPage(this.$route);
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      registerApps();
    }
  },
  methods: {
    isMainPage(value) {
      if (value.meta.moduleName === "main") {
        this.isMain = true;
      } else {
        this.isMain = false;
      }
    },
  },
};
</script>
