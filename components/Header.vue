<template>
  <header :class="themeStore.mode">
    <div class="content">
        <img src="~/assets/imgs/logo.png" alt="logo"/>
        <ul>
            <li>
                啥啥啥
            </li>
            <li>
                啥啥啥
            </li>
        </ul>
        <button @click="switchTheme">
            主题： {{ themeStore.mode === "light" ? "白天" : "夜晚" }}
        </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useThemeStore } from '~/store/useThemeStore';


// 切换主题
const themeStore = useThemeStore()
function switchTheme() {
    themeStore.mode === "light" ? 
    themeStore.switchMode("dark") :
    themeStore.switchMode("light")
}


</script>

<style lang="scss" scoped>
    header{
        &.light{
            background-color: rgb(0, 195, 255);
        }
        &.dark{
            background-color: rgb(0, 119, 255);
        }
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 40px;
        z-index: 5;
        .content{
            position: relative;
            margin: 0 auto;
            height: 100%;
            width: 60%;
            img{
                position: relative;
                height: 100%;
                margin: 0;
                display: inline;
            }
            ul{
                position: absolute;
                margin: 0 auto;
                display: inline;
                top: 23%;
                li{
                    display: inline;
                    margin-right: 5px;
                    &:hover{
                        color: rgb(168, 255, 232);
                        cursor: pointer;
                    }
                }
            }
            button{
                display: inline;
                position: absolute;
                right: 0;
                top: 3px;
                background-color: transparent;
                border: 2px solid aquamarine;
                border-radius: 5px;
                height: 80%;
                transition: all, 0.3s;
                &:hover{
                    background-color: white;
                    border: 2px solid violet;       
                    cursor: pointer;          
                }
            }
        }
    }
</style>