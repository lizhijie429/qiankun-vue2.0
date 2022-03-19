<template>
  <div class="home">
    <h1>主应用首页</h1>
    <h1 style="cursor: pointer" @click="numAdd">应用缓存测试:{{ num }}</h1>
    <div>
      <div><b> sub01（子应用1） </b>及<b> sub02（子应用2） </b>为 <span style="color: red">Vue应用</span></div>
      <div style="padding-top: 20px"><b> sub03（子应用3） </b>为 <span style="color: red">React应用</span></div>
    </div>
    <h4>希望你可以帮我点个 ⭐ ，这将对我是极大的鼓励。</h4>
    <div>
      <h4 style="color: red">如有问题，请先查看文档排查，请先看文档排查，请先看文档排查。</h4>
      <h4 style="color: red">如有还是问题，请百度，请百度，请百度。</h4>
      实在是解决不了可在
      <a
        href="https://gitee.com/lizhijie429/qiankun-vue2.0/issues"
        target="_blank"
        rel="noopener noreferrer"
        style="color: #1a98f2"
        >issues提问
      </a>
      或者 <strong>扫描左下方二维码</strong> 添加作者微信（lizhijie429），拉你进该项目群。
      <h4 style="color: red">重点说明：本人在微信上不做任何项目问题解答。</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      num: 123,
    };
  },
  methods: {
    numAdd() {
      this.num += this.num;
    },
  },
};
</script>

<style lang="scss" scoped></style>
