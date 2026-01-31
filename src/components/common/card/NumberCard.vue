<script setup lang="ts">
import type { NumberItem } from '@/types/Suuji';

const props = defineProps<{
    item: NumberItem;
}>();

// --- LOGIKA AUDIO (YOUDAO) ---
const playAudio = () => {
    const text = encodeURIComponent(props.item.kanji);
    const url = `https://dict.youdao.com/dictvoice?audio=${text}&le=jap`;
    const audio = new Audio(url);

    audio.play().catch(err => {
        console.error("Gagal memutar audio:", err);
    });
};
</script>

<template>
    <div @click="playAudio"
        class="group relative top-0 active:top-[4px] bg-white border-4 border-vanilla-dark rounded-2xl p-4 text-center cursor-pointer transition-all duration-100 shadow-[0px_6px_0px_#f59e0b] active:shadow-[0px_2px_0px_#f59e0b] hover:bg-vanilla select-none">

        <div class="text-5xl font-black text-vanilla-accent mb-2">
            {{ item.num }}
        </div>

        <div class="text-2xl font-bold text-vanilla-dark">
            {{ item.kanji }}
        </div>

        <div class="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wider">
            {{ item.romaji }}
        </div>

        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-vanilla-dark/50">
            🔊
        </div>

    </div>
</template>