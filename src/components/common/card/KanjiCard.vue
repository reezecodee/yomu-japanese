<script setup lang="ts">
import { computed, ref } from 'vue';
import type { KanjiData } from '@/types/Kanji';

const props = withDefaults(defineProps<{
    data: KanjiData;
    theme?: string;
}>(), {
    theme: 'lavender'
});

const isFlipped = ref(false);
const toggleFlip = () => isFlipped.value = !isFlipped.value;

const dynamicStyle = computed(() => {
    return {
        '--card-accent': `var(--color-${props.theme}-accent)`,
        '--card-bg': `var(--color-${props.theme})`,
        '--card-dark': `var(--color-${props.theme}-dark)`,
    };
});
</script>

<template>
    <div class="flip-card w-full h-[300px] relative cursor-pointer perspective-1000" :class="{ 'flipped': isFlipped }"
        @click="toggleFlip" :style="dynamicStyle">

        <div class="flip-card-inner w-full h-full relative transition-transform duration-500 transform-style-3d">

            <div
                class="flip-card-front absolute w-full h-full bg-white border-4 border-slate-800 rounded-[24px] flex flex-col items-center justify-center p-4 backface-hidden z-20 shadow-[8px_8px_0px_rgba(0,0,0,0.15)]">

                <span
                    class="absolute top-3 right-3 text-[10px] font-black px-2.5 py-1 rounded-full border-2 border-slate-800 bg-[var(--card-bg)] text-slate-800 uppercase">
                    {{ data.level }}
                </span>

                <h2 class="text-7xl font-black text-slate-800 mb-2 mt-2">{{ data.char }}</h2>

                <div class="text-center w-full">
                    <div class="mb-2">
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ONYOMI</p>
                        <p class="font-bold text-[var(--card-accent)]">{{ data.onyomi }}</p>
                    </div>

                    <div class="w-10 h-1 bg-slate-200 mx-auto my-1 rounded-full"></div>

                    <div>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">KUNYOMI</p>
                        <p class="font-bold text-slate-800">{{ data.kunyomi }}</p>
                    </div>
                </div>
            </div>

            <div
                class="flip-card-back absolute w-full h-full bg-[var(--card-accent)] border-4 border-[var(--card-dark)] rounded-[24px] flex flex-col items-center justify-center p-4 text-white backface-hidden z-10 shadow-[8px_8px_0px_rgba(0,0,0,0.15)] rotate-y-180">

                <h3 class="text-2xl font-black mb-1 border-b-2 border-white/30 pb-2 w-full text-center">
                    {{ data.meaning }}
                </h3>

                <div class="mt-4 text-left w-full px-2 space-y-2">
                    <div v-for="(ex, idx) in data.examples" :key="idx"
                        class="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                        <p class="text-xs opacity-75">{{ ex.reading }}</p>
                        <p class="font-bold text-sm">{{ ex.word }} ({{ ex.meaning }})</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>
.perspective-1000 {
    perspective: 1000px;
}

.transform-style-3d {
    transform-style: preserve-3d;
}

.backface-hidden {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.rotate-y-180 {
    transform: rotateY(180deg);
}

.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}
</style>