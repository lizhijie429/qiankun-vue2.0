<template>
  <div class="about">
    <h1>sub02</h1>
    <h1 style="cursor: pointer" @click="numAdd">应用缓存测试:{{ num }}</h1>
    <h1>测试Vue的数据双向绑定的监听：{{ elementId.b }}</h1>
    <el-button type="primary" @click="openDialog(1)">打开1</el-button>
    <el-button type="primary" @click="openDialog(2)">打开2</el-button>
    <sub-dialog ref="subDialog" :key="eleKey"></sub-dialog>
  </div>
</template>

<script>
import SubDialog from "../../components/SubDialog.vue";
export default {
  data() {
    return {
      eleKey: "",
      elementId: {},
      num: 123,
    };
  },
  components: { SubDialog },
  created() {
    this.elementId.b = 1;
  },
  mounted() {
    this.elementId.b = 2;
  },
  methods: {
    openDialog(val) {
      this.eleKey = new Date().getTime();
      this.$refs.subDialog.visiable = false;
      this.$nextTick(() => {
        this.$refs.subDialog.init(val);
      });
    },
    numAdd() {
      this.num += this.num;
    },
  },
};
</script>

<style lang="scss" scoped></style>
