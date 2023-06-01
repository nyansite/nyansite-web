<template>
    <NuxtLayout name="login">
        <div class="login theme-default-login" :class="themeStore.mode">
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
                            <div class="form-content">
                                <h1>注册账号</h1>
                                <p>
                                    <div class="row">
                                        <span>
                                            输入用户名: 
                                        </span>
                                        <span>
                                            <input type="text"/>
                                        </span>
                                    </div>
                                </p>
                                <p>
                                    <div class="row">
                                        <span id="pwd">
                                            输入密码： 
                                        </span>
                                        <span>
                                            <input type="password"/>
                                        </span>
                                    </div> 
                                </p>
                                <p id="buttons">
                                    <div class="row">
                                        <span class="button-span">
                                            <button>确认注册</button>
                                        </span>
                                        <span>
                                            <button @click="router.push('/login')">返回登录</button>
                                        </span>
                                    </div> 
                                </p>
                            </div>
                          
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
    import { useThemeStore } from '~/store/useThemeStore';

    const router = useRouter()
    const themeStore = useThemeStore()
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
            border-radius: 7px;
            padding: 10px;
            z-index: 2;
            transition: background-color, 0.4s;
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
                    height: 70%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 350px;
                    min-height: 380px;
                    .form{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 95%;
                        height: fit-content;
                        padding-top: 30px;
                        padding-bottom: 30px;
                        border-radius: 10px;
                        
                        .form-content{
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            flex-direction: column;
                            width: 100%;
                            height: 100%;
                            h1{
                                width: fit-content;
                                margin: 10px auto;
                                font-size: 50px;
                            }
                            p{
                                margin: 20px auto;
                                font-size: 20px;
                                width: 75%;
                                &#buttons{
                                    width: fit-content;
                                    margin: 0 auto;
                                }
                                .row{ 
                                    position: relative;
                                    width: 100%;
                                    white-space: nowrap;
                                    display: inline-block;
                                    span#pwd{
                                        margin-right: 6px;
                                    }
                                    .button-span{
                                        margin-right: 25px;
                                    }
                                    input{
                                        height: 40px;
                                        border-radius: 7px;
                                        width: calc(90% - 40px);
                                        font-size: 16px;
                                        font-family: LXGW Wenkai;
                                        transition: width, 0.4s;
                                        &:focus{
                                            transform: scale(101%, 101%);
                                        }
                                    }
                                }
                            }
                        }
                        
                    }
                }
            }
            
        }
    }
</style>