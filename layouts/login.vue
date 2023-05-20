<template>
    <!-- 登录/注册布局，采用相同背景图片 -->
    <main>
        <div class="login">
            <slot/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.login{
    $margin-y: 40px;
    position: fixed;
    margin: $margin-y auto;
    top: 0;
    left: 0;
    height: calc(100% - $margin-y);
    width: 100%;
    background-image: url("~/assets/imgs/background.png");
    background-size: cover;
}
</style>