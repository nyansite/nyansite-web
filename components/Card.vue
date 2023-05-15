<template>
    <div class="card" :class="themeStore.mode">
        <p id="image">
             <img src="@/assets/imgs/card-demo.jpeg" alt="img"/>
        </p>
        <p>
            <h2>古明地恋</h2>
        </p>
        <p>
            <h4>毛玉</h4>
        </p>
        <p id="menu">
            <span>
                <h3>赞</h3>
                <Icon class="icon" name="material-symbols:favorite-outline"/>
            </span>
        </p>
        
    </div>
</template>

<script lang="ts" setup>
/**
 * 主页图片卡
 */
import { useThemeStore } from '~/store/useThemeStore';

const themeStore = useThemeStore()
</script>

<style lang="scss" scoped>
.card{
    transition: box-shadow, 0.4s;
    &.light{
        background-color: rgb(255, 255, 255);
        box-shadow: 0 0 15px rgb(141, 141, 141);
        &:hover{
            box-shadow: 0 0 25px rgb(115, 0, 255);
        }
    }
    &.dark{
        background-color: rgb(115, 0, 255);
        box-shadow: 0 0 15px rgb(31, 31, 31);
        &:hover{
            box-shadow: 0 0 25px yellow;
        }
    }
    
    position: relative;
    height: 380px;
    width: 30%;
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 8px;
    border-radius: 8px;
    p{
        position: relative;
        margin: 0 auto;
        width: fit-content;
        
        &#image{
            position: relative;
            width: 90%;
            height: 70%;
            img{
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: contain;
                border-radius: 5px;
            }
        }
        h2, h4{
            width: fit-content;
            margin: 8px auto;
        }
        &#menu{
            position: absolute;
            right: 10px;
            bottom: 10px;
            &:hover{
                color: deeppink;
                cursor: pointer;
            }
            span{
                h3{
                    display: inline;
                }
                .icon{
                    font-size: 20px;
                }
            }
        }
        
       
    }
    
}
</style>