<script setup lang="ts">
import { computed } from 'vue';
import type { AdjectivePair } from '@/types';
import { playAudio } from '@/utils/audio';
import { useSettings } from '@/composables/useSettings';

const props = defineProps<{
    pair: AdjectivePair;
    group?: 'i' | 'na';
}>();

const { showRomaji, showFurigana } = useSettings();
const isNa = computed(() => props.group === 'na');

const cardBorderClass = computed(() =>
    isNa.value ? 'border-green-700' : 'border-aqua-dark'
);

const textAccentClass = computed(() =>
    isNa.value ? 'text-green-600' : 'text-aqua-accent'
);

const dividerBgClass = computed(() =>
    isNa.value ? 'bg-green-100' : 'bg-slate-200'
);

const badgeBgClass = computed(() =>
    isNa.value ? 'bg-green-700' : 'bg-aqua-dark'
);

const bottomBgClass = computed(() =>
    isNa.value ? 'bg-green-50' : 'bg-aqua'
);
</script>

<template>
    <div :class="['vs-card', cardBorderClass]">

        <div class="half-card bg-white cursor-pointer group select-none relative hover:bg-slate-50 transition-colors"
            @click="playAudio(pair.top.word)">

            <div
                class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 text-xs">
                🔊
            </div>

            <div class="flex flex-col">
                <span v-if="showFurigana" :class="['furigana', textAccentClass]">{{ pair.top.furigana }}</span>
                <span class="jp-word">{{ pair.top.word }}</span>
                <span v-if="showRomaji" :class="['romaji', textAccentClass]">{{ pair.top.romaji }}</span>
                <span class="meaning">{{ pair.top.meaning }}</span>
            </div>
            <span class="emoji-box group-hover:scale-110 transition-transform">{{ pair.top.icon }}</span>
        </div>

        <div :class="['divider', dividerBgClass]">
            <span :class="['divider-badge', badgeBgClass]">VS</span>
        </div>

        <div :class="['half-card', bottomBgClass, 'cursor-pointer group select-none relative hover:brightness-95 transition-all']"
            @click="playAudio(pair.bottom.word)">

            <div
                class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 text-xs">
                🔊
            </div>

            <div class="flex flex-col">
                <span v-if="showFurigana" :class="['furigana', textAccentClass]">{{ pair.bottom.furigana }}</span>
                <span class="jp-word">{{ pair.bottom.word }}</span>
                <span v-if="showRomaji" :class="['romaji', textAccentClass]">{{ pair.bottom.romaji }}</span>
                <span class="meaning">{{ pair.bottom.meaning }}</span>
            </div>
            <span class="emoji-box group-hover:scale-110 transition-transform">{{ pair.bottom.icon }}</span>
        </div>

    </div>
</template>

<style scoped>
.vs-card {
    background: white;
    border-width: 3px;
    border-style: solid;
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    height: 100%;
}

.vs-card:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.15);
}

.half-card {
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
}

.half-card:active {
    background-color: rgba(0, 0, 0, 0.05);
}

.divider {
    height: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-shrink: 0;
    position: relative;
}

.divider-badge {
    color: white;
    padding: 2px 8px;
    border-radius: 99px;
    font-size: 0.6rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    z-index: 10;
}

/* TYPOGRAPHY */
.furigana {
    font-size: 0.65rem;
    font-weight: 700;
    margin-bottom: -4px;
    opacity: 0.8;
}

.jp-word {
    font-size: 1.5rem;
    font-weight: 900;
    color: #334155;
    line-height: 1.2;
    margin-bottom: 2px;
}

.romaji {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 2px;
}

.meaning {
    font-size: 0.85rem;
    font-weight: 700;
    color: #94a3b8;
    line-height: 1.2;
}

.emoji-box {
    font-size: 2.5rem;
    flex-shrink: 0;
    margin-left: 12px;
}
</style>