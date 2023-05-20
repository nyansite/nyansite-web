<template>
  <div>
    <Header/>
    <!-- 路由入口 -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
</script>

<style lang="scss">
// 注册字体
@font-face {
  font-family: LXGW Wenkai;
  src: url("https://cdn.jsdelivr.net/gh/lxgw/LxgwWenKai@main/fonts/TTF/LXGWWenKai-Regular.ttf");
}

// @font-face {
//   font-family: Muyao Softbrush;
//   src: url("https://cdn.jsdelivr.net/gh/nyansite/nya-fonts@main/Muyao-Softbrush.ttf");
// }

// 引入全局主题样式
// 默认主题
@import "~/assets/themes/default.scss";

body{
  transition: all, 0.4s;
  font-family: LXGW Wenkai;
  button{
    font-family: LXGW Wenkai;
  }
}
</style>