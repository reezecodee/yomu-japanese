<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import type { ShigotoItem } from '@/types';
import { playAudio } from '@/utils/audio';

const props = defineProps<{
    item: ShigotoItem;
}>();

const { showRomaji, showFurigana } = useSettings()
</script>

<template>
    <div class="id-card group cursor-pointer select-none" @click="playAudio(props.item.kanji)">

        <div class="id-hole"></div>

        <div class="job-tag bg-surface-dark text-white">
            {{ item.category }}
        </div>

        <div
            class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 text-sm z-30">
            🔊
        </div>

        <div class="photo-area bg-surface group-hover:bg-blue-50 transition-colors">
            <span class="text-6xl filter drop-shadow-sm">{{ item.icon }}</span>
        </div>

        <div class="p-5 text-center flex flex-col items-center h-full">

            <p v-if="showFurigana" class="text-xs font-bold text-slate-400 mb-[-4px]">
                {{ item.furigana }}
            </p>

            <h2 class="text-3xl font-black text-slate-800 mb-1 leading-tight">
                {{ item.kanji }}
            </h2>

            <p class="text-lg font-extrabold text-surface-accent uppercase tracking-wide">
                {{ showRomaji ? item.romaji : '-' }}
            </p>

            <div
                class="w-16 h-1 bg-slate-200 rounded-full my-3 group-hover:w-24 group-hover:bg-surface-accent transition-all duration-300">
            </div>

            <p class="font-bold text-slate-500">
                {{ item.meaning }}
            </p>

            <p v-if="item.note" class="text-xs text-slate-400 mt-1 italic">
                {{ item.note }}
            </p>
        </div>

    </div>
</template>

<style scoped>
.id-card {
    background: white;
    border: 3px solid var(--color-surface-dark);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.id-card:hover {
    transform: translateY(-6px);
    box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
    border-color: var(--color-surface-accent);
}

.id-card:active {
    transform: translateY(-2px);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
}

.id-hole {
    width: 50px;
    height: 14px;
    background: var(--color-surface);
    border: 3px solid var(--color-surface-dark);
    border-top: none;
    border-radius: 0 0 12px 12px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
}

.photo-area {
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid var(--color-surface-dark);
    position: relative;
    padding-top: 10px;
}

.job-tag {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 6px;
    letter-spacing: 0.05em;
    z-index: 10;
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
}
</style>