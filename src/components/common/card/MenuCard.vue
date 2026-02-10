<script setup lang="ts">
import { WordItem } from '@/types';
import { computed } from 'vue';
import { playAudio } from '@/utils/audio';
import { useSettings } from '@/composables/useSettings';

const props = withDefaults(defineProps<{
    item: WordItem;
    theme?: string;
}>(), {
    theme: 'apricot'
});

const THEME_MAP: Record<string, { dark: string, accent: string }> = {
    ghost: { dark: 'var(--color-ghost-dark)', accent: 'var(--color-ghost-accent)' },
    apricot: { dark: 'var(--color-apricot-dark)', accent: 'var(--color-apricot-accent)' },
    safari: { dark: 'var(--color-safari-dark)', accent: 'var(--color-safari-accent)' },
    metro: { dark: 'var(--color-metro-dark)', accent: 'var(--color-metro-accent)' },
    concrete: { dark: 'var(--color-concrete-dark)', accent: 'var(--color-concrete-accent)' },
    berry: { dark: 'var(--color-berry-dark)', accent: 'var(--color-berry-accent)' },
    forest: { dark: 'var(--color-forest-dark)', accent: 'var(--color-forest-accent)' },
};

const dynamicStyles = computed(() => {
    const themeConfig = THEME_MAP[props.theme] || THEME_MAP['apricot'];

    return {
        '--card-dark': themeConfig.dark,
        '--card-accent': themeConfig.accent,
    };
});

const { showRomaji, showFurigana } = useSettings()
</script>

<template>
    <div class="menu-card group select-none" :style="dynamicStyles" @click="playAudio(props.item.kanji)">

        <div class="emoji-icon group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out">
            {{ item.icon }}
        </div>

        <p v-if="showFurigana" class="text-[10px] font-bold text-slate-400 mb-[-4px] transition-all">
            {{ item.furigana }}
        </p>

        <h3
            class="text-2xl font-black text-slate-700 mb-1 leading-tight group-hover:text-[var(--card-dark)] transition-colors">
            {{ item.kanji }}
        </h3>

        <p class="text-sm font-extrabold text-[var(--card-accent)] uppercase tracking-widest">
            {{ showRomaji ? item.romaji : '-' }}
        </p>

        <p class="text-xs font-bold text-slate-400 mt-1">
            {{ item.meaning }}
        </p>

        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 text-sm">
            🔊
        </div>

    </div>
</template>

<style scoped>
.menu-card {
    background: white;
    border: 3px solid var(--card-dark);
    border-radius: 20px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.menu-card:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
    border-color: var(--card-accent);
}

.menu-card:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
}

.emoji-icon {
    font-size: 4rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    filter: drop-shadow(0 4px 0 rgba(0, 0, 0, 0.05));
}
</style>