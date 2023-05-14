import { defineStore } from "pinia";
import { useColorMode } from '@vueuse/core';

/**
 * 控制页面的主题
 */
export const useThemeStore = defineStore("themeStore", {
    state: () => {
        return {
            mode: useColorMode()   // light或dark
        }
    },
    actions: {
        // 切换主题
        switchMode(mode: "light" | "dark" | "auto"){
            this.mode = mode
            // 切换body主题
            document.body.setAttribute("class", this.mode)
        }
    },
    getters: {
        
    }
})