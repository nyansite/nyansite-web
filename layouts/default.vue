<template>
    <main :class="themeStore.mode">
        <slot/>
    </main>
</template>

<script lang="ts" setup>
import { useThemeStore } from '~/store/useThemeStore';

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
  main{
    margin: 45px auto;
    min-width: 300px;
    width: 90%;
    border-radius: 5px;
  }


</style>