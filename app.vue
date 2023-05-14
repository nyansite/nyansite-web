<template>
  <div>
    <!-- 路由入口 -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
  import { useThemeStore } from './store/useThemeStore';

  const themeStore = useThemeStore()
  // 初始化body主题
  document.body.setAttribute("class", themeStore.mode)


</script>

<style lang="scss">
body{
  &.light{
    background-color: rgb(180, 240, 255);
  }
  &.dark{
    background-color: rgb(151, 189, 255);
  }
}
</style>