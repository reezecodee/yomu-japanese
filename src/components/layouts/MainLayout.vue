<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import SecNavbar from '@/components/common/nav/SecNavbar.vue'

type ThemeName =
    | 'peach'
    | 'ice'
    | 'lavender'
    | 'vanilla'
    | 'rose'
    | 'aqua'
    | 'ghost'

const route = useRoute()

const themeMap: Record<ThemeName, {
    bg: string
    hover: string
}> = {
    peach: {
        bg: 'bg-peach',
        hover: 'group-hover:bg-peach-accent',
    },
    ice: {
        bg: 'bg-ice',
        hover: 'group-hover:bg-ice-accent',
    },
    lavender: {
        bg: 'bg-lavender',
        hover: 'group-hover:bg-lavender-accent',
    },
    vanilla: {
        bg: 'bg-vanilla',
        hover: 'group-hover:bg-vanilla-accent',
    },
    rose: {
        bg: 'bg-rose',
        hover: 'group-hover:bg-rose-accent',
    },
    aqua: {
        bg: 'bg-aqua',
        hover: 'group-hover:bg-aqua-accent',
    },
    ghost: {
        bg: 'bg-ghost',
        hover: 'group-hover:bg-ghost-accent',
    },
}

const themeName = computed<ThemeName>(() => {
    return (route.meta.bgClass as ThemeName) || 'peach'
})

const currentTheme = computed(() => {
    const theme = themeMap[themeName.value]

    const dotColor =
        themeName.value === 'peach'
            ? '#ffffff'
            : `var(--color-${themeName.value}-accent)`

    return {
        ...theme,
        dot: {
            backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px)`,
            backgroundSize: '30px 30px',
        },
    }
})

const pageTitle = computed(() => (route.meta.title as string) || '')
</script>

<template>
    <div class="min-h-screen pb-20 transition-colors duration-300 layout-root" :class="currentTheme.bg"
        :style="currentTheme.dot">
        <SecNavbar :title="pageTitle" :hover-class="currentTheme.hover" />

        <main>
            <router-view v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component" :key="route.fullPath" />
                </keep-alive>
            </router-view>
        </main>
    </div>
</template>

<style>
.layout-root {
    color: var(--color-dark);
    font-family: var(--font-sans);
}
</style>
