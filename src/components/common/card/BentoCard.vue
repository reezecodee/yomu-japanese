<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    theme: 'hero' | 'iro' | 'youbi' | 'nature' | 'season' | 'dir' | 'month' | 'family';
    title?: string;
    icon?: string;
    subTitle?: string;
    colSpan?: string;
    rowSpan?: string;
}>();

// --- MAPPING REFERENSI CSS ---
const THEME_MAP: Record<string, { bg: string, border: string, text: string }> = {
    hero: { bg: 'var(--color-bento-hero)', border: 'var(--color-bento-hero-border)', text: 'var(--color-bento-hero-text)' },
    iro: { bg: 'var(--color-bento-iro)', border: 'var(--color-bento-iro-border)', text: 'var(--color-bento-iro-text)' },
    youbi: { bg: 'var(--color-bento-youbi)', border: 'var(--color-bento-youbi-border)', text: 'var(--color-bento-youbi-text)' },
    nature: { bg: 'var(--color-bento-nature)', border: 'var(--color-bento-nature-border)', text: 'var(--color-bento-nature-text)' },
    season: { bg: 'var(--color-bento-season)', border: 'var(--color-bento-season-border)', text: 'var(--color-bento-season-text)' },
    dir: { bg: 'var(--color-bento-dir)', border: 'var(--color-bento-dir-border)', text: 'var(--color-bento-dir-text)' },
    month: { bg: 'var(--color-bento-month)', border: 'var(--color-bento-month-border)', text: 'var(--color-bento-month-text)' },
    family: { bg: 'var(--color-bento-family)', border: 'var(--color-bento-family-border)', text: 'var(--color-bento-family-text)' },
};

const styleVars = computed(() => {
    const config = THEME_MAP[props.theme] || THEME_MAP['iro'];

    return {
        '--card-bg': config.bg,
        '--card-border': config.border,
        '--card-text': config.text
    };
});
</script>

<template>
    <div class="bento-card" :class="[colSpan, rowSpan]" :style="styleVars">
        <div v-if="title" class="flex justify-between items-center mb-3">
            <h3 class="text-lg font-black" style="color: var(--card-text)">
                {{ icon }} {{ title }}
            </h3>
            <span v-if="subTitle"
                class="text-xs px-2 py-1 rounded font-bold opacity-70 bg-white/50 border border-black/10"
                style="color: var(--card-text)">
                {{ subTitle }}
            </span>
        </div>

        <div class="h-full flex flex-col">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.bento-card {
    background-color: var(--card-bg);
    border: 3px solid var(--card-border);
    border-radius: 24px;
    padding: 1.25rem;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.bento-card:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.15);
    z-index: 10;
}
</style>