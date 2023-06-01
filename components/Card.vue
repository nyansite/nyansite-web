<template>
    <div class="card theme-default-card"
         :class="themeStore.mode"
    >
    <div :class="isMobile ? 'mobile' : 'pc'">
        <div class="left">
            <h1>标题</h1>
            <p>
                你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。
                游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。
                你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，
                找回失散的亲人——同时，逐步发掘「原神」的真相。
            </p>
        </div>
        <div class="right">
            <img src="~/assets/imgs/card-demo.jpeg" alt="image"/>
        </div>
    </div>

    </div>
</template>

<script lang="ts" setup>
import { useIsMobile } from '~/hooks/useIsMobile';
import { useThemeStore } from '~/store/useThemeStore';

/**
 * 主页图片卡
 */
const themeStore = useThemeStore()
const { isMobile } = useIsMobile()


</script>

<style lang="scss" scoped>
.card{
    position: relative;
    width: 80%;
    margin: 10px auto;
    border-radius: 7px;
    padding: 10px;
    & .pc{
        .left{
            position: relative;
            left: 0;
            height: 200px;
            width: 70%;
            h1{
                text-align: left;
                position: relative;
                left: 0;
                width: fit-content;
                height: fit-content;
            }
            p{
                position: relative;
                top: -15px;
                left: 0;
                height: 77%;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 8;
                overflow: hidden;
            }
        }
        .right{
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            width: 30%;
            z-index: 2; 
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
    
    & .mobile{
        .left{
            position: relative;
            left: 0;
            height: 200px;
            width: 90%;
            h1{
                text-align: left;
                position: relative;
                left: 0;
                width: fit-content;
                height: fit-content;
            }
            p{
                position: relative;
                top: -8px;
                left: 0;
                height: 77%;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 8;
                overflow: hidden;
            }
        }
        .right{
            position: absolute;
            top: 0;
            right: 0;
            height: 30%;
            width: 20%;
            z-index: 2; 
            img{
                border-radius: 7px;
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }
   
    
}
</style>