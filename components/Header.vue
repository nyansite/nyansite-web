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
        <button>
            登录/注册
        </button>
        <button @click="switchTheme">
            主题: {{ themeStore.mode === "light" ? "白天" : "夜晚" }}
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
            background-color: rgb(119, 223, 255);
            .content{
                button{
                    color: black;
                    background-color: rgb(0, 255, 251);
                    box-shadow: 0 0 15px rgb(0, 255, 251),
                                0 0 20px rgb(0, 255, 217);
                }
            }
        }
        &.dark{
            background-color: rgb(47, 137, 255);
            .content{
                button{
                    color: white;
                    background-color: rgb(13, 0, 255);
                    box-shadow: 0 0 15px rgb(72, 0, 255), 
                                0 0 20px rgb(168, 5, 255);
                }
            }
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
                        color: rgb(251, 0, 255);
                        cursor: pointer;
                    }
                }
            }
            button{
                display: inline;
                position: relative;
                float: right;
                right: 0;
                top: 3px;
                border: 0;
                border-radius: 5px;
                margin-left: 5px;
                height: 80%;
                transition: all, 0.3s;
                &:hover{
                    background-color: rgb(251, 0, 255);
                    box-shadow: 0 0 15px rgb(253, 125, 255),
                                0 0 20px rgb(255, 0, 179);     
                    cursor: pointer;          
                }
            }
        }
    }
</style>