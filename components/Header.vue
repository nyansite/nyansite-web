<template>
  <header :class="themeStore.mode">
    <div class="content">
        <img src="~/assets/imgs/logo.png" alt="logo" v-if="themeStore.mode === 'light'"/>
        <img src="~/assets/imgs/logo-dark.png" alt="logo" v-else/>
         <span class="pc" v-if="!isMobile">
            <ul>
                <li>
                    啥啥啥
                </li>
                <li>
                    啥啥啥
                </li>
            </ul>
            <button @click="router.push('/login')">
                登录/注册
            </button>
            <Icon class="theme-switch" name="material-symbols:mode-night-outline"
                 @click="switchLightAndDark"
                 v-if="themeStore.mode === 'light'"/>
            <Icon class="theme-switch" name="material-symbols:sunny-outline"
                  @click="switchLightAndDark"
                  v-if="themeStore.mode === 'dark'"/>
        </span>
        <span class="mobile" v-else
              @click="showSubMenu = !showSubMenu">
            <Icon class="icon" name="mingcute:menu-fill"/>
            <!-- 点击菜单按钮显示的内容 -->
        </span>
        <div class="sub-menu" 
             v-show="showSubMenu"
             @mouseleave="showSubMenu = false">
            <p>啥啥啥</p>
            <p>啥啥啥</p>
            <div class="buttons">
                <button @click="router.push('/login')">
                    登录/注册
                </button>
                <Icon class="theme-switch" name="material-symbols:mode-night-outline"
                      @click="switchLightAndDark"
                      v-if="themeStore.mode === 'light'"/>
                <Icon class="theme-switch" name="material-symbols:sunny-outline"
                    @click="switchLightAndDark"
                    v-if="themeStore.mode === 'dark'"/>
            </div>
        </div>
      
    </div>
  </header>
</template>

<script lang="ts" setup>
import { useIsMobile } from '~/hooks/useIsMobile';
import { useThemeStore } from '~/store/useThemeStore';

// 路由
const router = useRouter()

// 切换亮暗
const themeStore = useThemeStore()
function switchLightAndDark() {
    themeStore.mode === "light" ? 
    themeStore.switchMode("dark") :
    themeStore.switchMode("light")
}

// 判断当前视口是移动端还是PC端
const { isMobile } = useIsMobile()
// 是否展示子菜单
const showSubMenu: Ref<boolean> = ref<boolean>(false)



</script>

<style lang="scss" scoped>
    header{
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
                }
            }
            .pc{
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
                }
                .theme-switch{
                    position: relative;
                    float: right;
                    margin-right: 5px;
                    display: inline;
                    height: fit-content;
                    height: 100%;
                    font-size: 25px;
                    transition: color, 0.4s;
                    &:hover{
                        color: deeppink;
                        cursor: pointer;
                    }
                }
            }
          
            .mobile{
                position: relative;
                float: right;
                height: 80%;
                padding-left: 5px;
                padding-right: 5px;
                top: 7%;
                .icon{
                    height: 100%;
                    width: 20px;
                }
            }
            .sub-menu{
                width: 200px;
                height: 300px;
                position: absolute;
                top: 45px;
                right: -90px;
                z-index: 2;
                & p{
                    position: relative;
                    width: fit-content;
                    margin: 10px auto;
                    z-index: 3;
                }
                .buttons{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                    width: fit-content;
                    margin: 0 auto;
                    button{
                        height: 40px;
                        margin: 2px;
                        border-radius: 7px;
                    }
                }
                .theme-switch{
                    position: relative;
                    margin-left: 5px;
                    height: 100%;
                    top: 6px;
                    font-size: 30px;
                    transition: color, 0.4s;
                    &:hover{
                        color: deeppink;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>