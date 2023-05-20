<template>
    <NuxtLayout name="login">
        <div class="login">
            <div class="back" @click="router.push('/')">
                <span>&lt;-- 返回主页</span>
            </div>
            <div class="box">
                <div class="divider">
                     <!-- 左边logo -->
                    <div class="left-logo">
                        <img src="~/assets/imgs/loginLogo.png" alt="logo"/>
                    </div>
                    <div class="right-form">
                        <div class="form">
                            <h1>先摸了，之后再做</h1>
                        </div>
                    </div>
                </div>
               
            </div>
           
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
    /**
     * 登录页面
     */
    const router = useRouter()
</script>

<style lang="scss" scoped>
    .login{
        position: relative;
        top: -22px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .back{
            position: absolute;
            margin-top: 30px;
            top: 10px;
            left: 10px;
            height: fit-content;
            color: white;
            border: 3px solid deepskyblue;
            border-radius: 7px;
            padding: 10px;
            z-index: 2;
            transition: background-color, 0.4s;
            &:hover{
                background-color: aquamarine;
                cursor: pointer;
                color: black;
            }
        }
        .box{
            position: relative;
            top: 20px;
            height: 100%;
            width: 100%;
            background-color: rgba(214, 214, 214, 0.294);
            margin: 0 auto;
            border-radius: 9px;
            .divider{
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
                .left-logo{
                    position: relative;
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width: 80%;
                    }
                }
                .right-form{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    .form{
                        width: 95%;
                        height: 80%;
                        border-radius: 10px;
                        background-color: rgba(169, 169, 169, 0.507);
                    }
                }
            }
            
        }
    }
</style>