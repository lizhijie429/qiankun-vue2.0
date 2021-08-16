<template>
  <layout>
    <router-view v-if="isMain" class="height-abs"></router-view>
    <div v-else id="subapp-viewport" class="app-view-box"></div>
  </layout>
</template>

<script>
import Layout from "@/layout/index.vue";
import { registerApps } from "@/qiankun/index";
export default {
  data() {
    return {
      isMain: false,
    };
  },
  components: {
    Layout,
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
