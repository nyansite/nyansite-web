<template>
    <div class="card theme-default-card" :class="
    themeStore.mode,
    isMobile ? 'mobile' : 'pc'
    ">
        <p id="image">
             <img src="@/assets/imgs/card-demo.jpeg" alt="img"/>
        </p>
        <!-- 遮罩 -->
        <div class="card-mask">
            <!-- 文本区 -->
            <div class="text">
                <h2>古明地恋的名字并不是很长</h2>
                <h4>毛玉</h4>
            </div>
            <!-- 点赞区 -->
            <div class="like">
                <span>赞</span>
                <Icon class="icon" name="material-symbols:favorite-outline"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
/**
 * 主页图片卡
 */
import { useIsMobile } from '~/hooks/useIsMobile';
import { useThemeStore } from '~/store/useThemeStore';

const themeStore = useThemeStore()
const { isMobile } = useIsMobile()


</script>

<style lang="scss" scoped>
.card{
    &.pc{
        position: relative;
        height: 350px;
        width: 30%;
        margin-right: 8px;
        margin-left: 8px;
        margin-top: 8px;
        border-radius: 8px;
    }
    &.mobile{
        position: relative;
        height: 350px;
        width: 80%;
        margin-right: 8px;
        margin-left: 8px;
        margin-top: 8px;
        border-radius: 8px;
    }
    &:hover{
        cursor: pointer;
    }
    p{
        position: relative;
        margin: 0 auto;
        width: fit-content;
        
        &#image{
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            img{
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }
        h2, h4{
            width: fit-content;
            margin: 8px auto;
        }
    }

    .card-mask{
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(0deg, transparent, rgba(62, 62, 62, 0.926));
        z-index: 2;
        h2, h4{
            position: relative;
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .text{
            color: white;
            position: absolute;
            top: 10px;
            left: 10px;
            width: 95%;
        }
        .like{
            color: white;
            position: absolute;
            bottom: 10px;
            right: 10px;
            font-size: 20px;
            border: 1px solid white;
            border-radius: 6px;
            padding: 5px;
            transition: all, 0.4s;
            &:hover{
                background-color: white;
                color: black;
                cursor: pointer;
                .icon{
                    color: red;
                }
            }
        }
    }
    
}
</style>