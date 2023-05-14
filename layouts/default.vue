<template>
    <Header/>
    <main :class="themeStore.mode">
        <slot/>
    </main>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
import { useThemeStore } from '~/store/useThemeStore';

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
  main{
    margin: 45px auto;
    width: 60%;
    border-radius: 5px;
    &.light{
      background-color: white;
    }
    &.dark{
      background-color: rgb(0, 127, 254);
    }
  }


</style>