<script setup lang="ts">
import { computed } from 'vue';
import type { CharData } from '@/types';
import { useSettings } from '@/composables/useSettings';

const props = withDefaults(defineProps<{
    data: CharData;
    theme?: string;
    size?: 'normal' | 'large';
}>(), {
    theme: 'peach',
    size: 'normal'
});

const dynamicStyle = computed(() => {
    return {
        '--card-accent': `var(--color-${props.theme}-accent)`,
        '--card-hover-bg': `color-mix(in srgb, var(--color-${props.theme}-accent), white 90%)`
    };
});

const { showRomaji } = useSettings();
</script>

<template>
    <div :style="dynamicStyle" :class="[
        'rounded-[20px] flex flex-col items-center justify-center transition-all duration-200 group relative',
        size === 'large' ? 'aspect-auto py-6' : 'aspect-square',

        data.type === 'empty'
            ? 'invisible pointer-events-none'
            : 'bg-white border-[3px] border-slate-800 cursor-pointer hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#334155]'
    ]" class="card-hover-effect">
        <span class="font-black text-slate-800 mb-1 leading-none transition-colors"
            :class="size === 'large' ? 'text-4xl md:text-6xl' : 'text-3xl md:text-5xl'">
            {{ data.char }}
        </span>

        <span v-if="showRomaji"
            class="romaji-pill font-sans font-bold text-slate-400 text-sm uppercase px-3 py-0.5 border-2 border-slate-200 rounded-full transition-colors">
            {{ data.romaji }}
        </span>
    </div>
</template>

<style scoped>
.card-hover-effect:hover {
    background-color: var(--card-hover-bg);
    border-color: var(--card-accent);
}

.group:hover .romaji-pill {
    background-color: var(--card-accent);
    color: white;
    border-color: var(--card-accent);
}
</style>