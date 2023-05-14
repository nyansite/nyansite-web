<template>
    <Header/>
    <main>
        <slot/>
    </main>

</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
</script>

<style lang="scss" scoped>
  main{
    margin: 45px auto;
  }
</style>