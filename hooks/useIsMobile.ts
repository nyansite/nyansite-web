import { createGlobalState } from '@vueuse/core'

/**
 * 判断当前视口是移动端还是PC端
 */
export const useIsMobile = createGlobalState(() => {
    //获得窗口宽度, 动态监听变化
    const { width } = useWindowSize()
    // 记录是否是移动端，以宽度=664为界
    const isMobile: Ref<boolean> = ref<boolean>(false)
    watch(width, (newVal) => {
        if(newVal < 750){
            isMobile.value = true
        }
        else isMobile.value = false
    })

    return { width, isMobile }
})