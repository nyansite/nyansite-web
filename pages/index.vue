<template>
    <NuxtLayout>
        <div class="card-container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import Card from "~/components/Card.vue";
import { useThemeStore } from "~/store/useThemeStore"

// 初始化Body样式
const themeStore = useThemeStore()
onBeforeMount(() => {
    document.body.setAttribute("class", themeStore.mode)
})


</script>

<style lang="scss" scoped>
.card-container{
    position: relative;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>