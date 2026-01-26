<script setup lang="ts">
import { useRoute } from 'vue-router';
import SecNavbar from '@/components/common/nav/SecNavbar.vue';
import { computed } from 'vue';

const route = useRoute();

const currentTheme = computed(() => {
    const themeName = (route.meta.bgClass as string) || 'peach';

    const dotColor = themeName === 'peach'
        ? '#ffffff'
        : `var(--color-${themeName}-accent)`;

    return {
        bg: `bg-${themeName}`,
        hover: `group-hover:bg-${themeName}-accent`,
        dot: {
            backgroundImage: `radial-gradient(${dotColor} 2px, transparent 2px)`
        }
    }
});

const pageTitle = computed(() => (route.meta.title as string) || '');
</script>

<template>
    <div :class="['min-h-screen pb-20 transition-colors duration-300 wrapper', currentTheme.bg]"
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

<style scoped>
.wrapper {
    color: var(--color-dark);
    font-family: var(--font-sans);

    /* Polkadot Background Pattern */
    background-image: radial-gradient(#fff 2px, transparent 2px);
    background-size: 30px 30px;
}
</style>