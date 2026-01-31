<script setup lang="ts">
import { computed } from 'vue'
import type { MonoItem, LocationType } from '@/types/Mono'

const props = defineProps<{
    item: MonoItem
    variant: LocationType
}>()

const colorStyle = computed(() => ({
    color: `var(--color-loc-${props.variant})`,
}))

// --- LOGIKA AUDIO (YOUDAO) ---
const playAudio = () => {
    const text = encodeURIComponent(props.item.kanji);
    const url = `https://dict.youdao.com/dictvoice?audio=${text}&le=jap`;

    const audio = new Audio(url);
    audio.play().catch(e => console.error("Audio error:", e));
}
</script>

<template>
    <div class="obj-card cursor-pointer group select-none" :style="colorStyle" @click="playAudio">

        <div class="icon-box">
            {{ item.icon }}
        </div>

        <div class="text-2xl font-black text-slate-700">
            {{ item.kanji }}
        </div>

        <div class="text-xs font-bold uppercase tracking-widest mt-1 opacity-90">
            {{ item.romaji }}
        </div>

        <div class="text-sm font-bold text-slate-400 mt-1">
            {{ item.meaning }}
        </div>

        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 text-sm">
            🔊
        </div>
    </div>
</template>

<style scoped>
.obj-card {
    background: white;
    border: 3px solid #e2e8f0;
    border-radius: 20px;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
}

.obj-card:hover {
    transform: translateY(-4px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
    border-color: currentColor;
}

.obj-card:active {
    transform: translateY(-1px);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
}

.icon-box {
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 4px 0 rgba(0, 0, 0, 0.1));
}
</style>