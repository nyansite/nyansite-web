<template>
    <div class="card theme-default-card"
         :class="themeStore.mode"
    >
    <div :class="isMobile ? 'mobile' : 'pc'">
        <div class="left">
            <h2>标题</h2>
            <p>
                你说的对，但是《原神》是由米哈游自主研发的一款全新开放世界冒险游戏。
                游戏发生在一个被称作「提瓦特」的幻想世界，在这里，被神选中的人将被授予「神之眼」，导引元素之力。
                你将扮演一位名为「旅行者」的神秘角色，在自由的旅行中邂逅性格各异、能力独特的同伴们，和他们一起击败强敌，
                找回失散的亲人——同时，逐步发掘「原神」的真相。
            </p>
            <p class="tags">
                <p>Tags:</p>
                <span>
                    <Icon name="material-symbols:label-important-outline"/>
                    <span>啥啥啥</span>
                </span>
            </p>
        </div>
        <div class="right" v-if="!isMobile">
            <img src="~/assets/imgs/card-demo.jpeg" alt="image"/>
        </div>
        <img src="~/assets/imgs/card-demo.jpeg" alt="image" v-else/>
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
            height: fit-content;
            width: 70%;
            h2{
                text-align: left;
                position: relative;
                left: 0;
                margin: 0;
                width: fit-content;
                height: fit-content;
            }
            p{
                position: relative;
                top: 0;
                left: 0;
                height: 75px;
                width: 100%;
                margin: 5px auto;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
            }
            .tags{
                position: relative;
                height: fit-content;
                margin: 0;
                top: 0;
                p{
                    margin: 0;
                    height: fit-content;
                }
                span{
                    font-size: 15px;
                    transition: background-color, 0.4s;
                    &:hover{
                        color: deeppink;
                        cursor: pointer;
                    }
                    p{
                        margin: 0;
                    }
                }
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
            height: fit-content;
            width: 100%;
            h2{
                text-align: center;
                position: relative;
                left: 0;
                margin: 0 auto;
                width: fit-content;
                height: fit-content;
            }
            p{
                position: relative;
                top: 0;
                left: 0;
                height: 75px;
                width: 100%;
                margin: 5px auto;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
            }
            .tags{
                position: relative;
                height: fit-content;
                top: 0;
                p{
                    margin: 0;
                    height: fit-content;
                }
                span{
                    font-size: 15px;
                    transition: background-color, 0.4s;
                    &:hover{
                        color: deeppink;
                        cursor: pointer;
                    }
                }
            }
        }
        img{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            border-radius: 7px;
            height: 100%;
            width: 100%;
            opacity: 0.2;
            object-fit: cover;
        }
    }
   
    
}
</style>