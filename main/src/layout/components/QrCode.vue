<!--
 * @Author: lizhijie429
 * @Date: 2021-08-19 11:17:20
 * @LastEditors: lizhijie429
 * @LastEditTime: 2021-08-19 11:18:36
 * @Description: 
-->
<template>
  <div class="qrCode">
    <img src="https://gitee.com/lizhijie429/images_deb/raw/master/images_deb/20210819110821.jpg" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: "QrCode",
};
</script>

<style lang="scss" scoped>
.qrCode {
  width: 160px;
  height: 160px;
  background-color: #fff;
  position: absolute;
  left: 10px;
  bottom: 10px;
  img {
    display: block;
    width: 100%;
  }
}
</style>
