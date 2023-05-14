<template>
    <NuxtLayout>
        <h1>哈哈</h1>
        <h1>哈哈</h1>
        <h1>哈哈</h1>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { useThemeStore } from "~/store/useThemeStore"

// 初始化Body样式
const themeStore = useThemeStore()
onBeforeMount(() => {
    document.body.setAttribute("class", themeStore.mode)
})


</script>

<style lang="scss" scoped>

</style>