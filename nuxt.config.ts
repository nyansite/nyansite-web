// Nuxt配置
export default defineNuxtConfig({
    // 关闭Are you interested in participating的提示
    telemetry: false,
    // 模块
    modules: [
        "@vueuse/nuxt",
        "@pinia/nuxt"
    ],
    // 设置默认开发服务的端口
    devServer: {
        host: "0.0.0.0",
        port: 8080
    },
    // 是否开启服务端渲染
    ssr: false,
    // 设置全局SEO(head头部的相关内容)
    app: {
        head: {
            // 设置<html lang="zh">
            htmlAttrs: {
                lang: "zh"
            },
            title: "喵站",
            viewport: "width-device-width, initial-scale=1",
            charset: "utf-8",
            meta: [
                { name: "description", content: "亚文化交流网站，欢迎各位" }
            ],
            link: [
                { rel: 'icon', type: "image/x-icon", href: "/favicon.ico"}
            ],
        },
        buildAssetsDir: "/nuxt/"
    }
})
