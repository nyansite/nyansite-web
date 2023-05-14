<template>
  <div>
    <!-- 路由入口 -->
    <NuxtPage />
  </div>
</template>

<style lang="scss">
// 注册字体
@font-face {
  font-family: LXGW Wenkai;
  src: url("~/assets/fonts/LXGWWenKai.ttf");
}

body{
  font-family: LXGW Wenkai;
  button{
    font-family: LXGW Wenkai;
  }
  &.light{
    background-color: #c5e6ff;
    color: black;
  }
  &.dark{
    background-color: #294877;
    color: white;
  }
}
</style>