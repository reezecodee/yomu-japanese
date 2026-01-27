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
    | 'surface'
    | 'apricot'
    | 'safari'
    | 'metro'
    | 'concrete'
    | 'berry'
    | 'forest'
    | 'sky'
    | 'cool'
    | 'mint'
    | 'indigo'
    | 'kotoba'

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
    surface: {
        bg: 'bg-surface',
        hover: 'group-hover:bg-surface-accent',
    },
    apricot: {
        bg: 'bg-apricot',
        hover: 'group-hover:bg-apricot-accent',
    },
    safari: {
        bg: 'bg-safari',
        hover: 'group-hover:bg-safari-accent',
    },
    metro: {
        bg: 'bg-metro',
        hover: 'group-hover:bg-metro-accent',
    },
    concrete: {
        bg: 'bg-concrete',
        hover: 'group-hover:bg-concrete-accent',
    },
    berry: {
        bg: 'bg-berry',
        hover: 'group-hover:bg-berry-accent',
    },
    forest: {
        bg: 'bg-forest',
        hover: 'group-hover:bg-forest-accent',
    },
    sky: {
        bg: 'bg-sky',
        hover: 'group-hover:bg-sky-accent',
    },
    cool: {
        bg: 'bg-cool',
        hover: 'group-hover:bg-cool-accent',
    },
    mint: {
        bg: 'bg-mint',
        hover: 'group-hover:bg-mint-accent',
    },
    indigo: {
        bg: 'bg-indigo',
        hover: 'group-hover:bg-indigo-accent',
    },
    kotoba: {
        bg: 'bg-kotoba',
        hover: 'group-hover:bg-kotoba-accent',
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
