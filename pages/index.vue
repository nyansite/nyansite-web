<template>
    <NuxtLayout>
        <div :class="
             isMobile ? 'card-container-mobile' : 'card-container'
            ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import Card from "~/components/Card.vue";
import { useIsMobile } from "~/hooks/useIsMobile";
import { useThemeStore } from "~/store/useThemeStore"

// 初始化Body样式
const themeStore = useThemeStore()
onBeforeMount(() => {
    document.body.setAttribute("class", themeStore.mode)
})

const { isMobile } = useIsMobile()


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
.card-container-mobile{
    position: relative;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>