<script setup lang="ts">
import { computed } from 'vue';
import type { FlashcardItem } from '@/types/Flashcard';

const props = defineProps<{
    item: FlashcardItem;
    isFlipped: boolean;
}>();

const emit = defineEmits(['toggle']);

const frontFontSize = computed(() => {
    switch (props.item.type) {
        case 'char': return 'text-8xl md:text-9xl';
        case 'sentence': return 'text-3xl md:text-4xl px-4 text-center';
        case 'word':
        default: return 'text-5xl md:text-6xl';
    }
});
</script>

<template>
    <div class="scene">
        <div class="card" :class="{ 'is-flipped': isFlipped }" @click="emit('toggle')">

            <div class="card-face card-face-front">
                <span
                    class="absolute top-6 left-6 bg-[var(--color-indigo)] text-[var(--color-indigo-dark)] px-3 py-1 rounded-full text-xs font-bold border-2 border-[var(--color-indigo-dark)] uppercase">
                    {{ item.tag }}
                </span>

                <div class="flex flex-col items-center w-full">
                    <h2 :class="['font-black text-[var(--color-indigo-dark)] mb-2', frontFontSize]">
                        {{ item.front }}
                    </h2>

                    <p v-if="item.frontSub" class="text-slate-400 font-bold text-lg mb-2">
                        {{ item.frontSub }}
                    </p>

                    <p class="text-slate-300 font-bold text-xs uppercase tracking-widest animate-pulse mt-2">
                        Tap to flip ↺
                    </p>
                </div>
            </div>

            <div class="card-face card-face-back">
                <div class="flex flex-col items-center text-center p-6 w-full h-full justify-center">

                    <h3 class="text-4xl md:text-5xl font-black mb-3 break-words w-full">
                        {{ item.romaji }}
                    </h3>

                    <div class="w-12 h-2 bg-white/30 rounded-full mb-6 shrink-0"></div>

                    <p class="text-xl md:text-2xl font-bold mb-6">
                        {{ item.meaning }}
                    </p>

                    <div v-if="item.example"
                        class="w-full bg-white/10 border-2 border-white/30 px-4 py-3 rounded-xl backdrop-blur-sm mt-auto md:mt-0">
                        <p class="text-sm font-medium opacity-90">
                            <span class="block text-xs opacity-60 uppercase mb-1 tracking-wider">Contoh:</span>
                            {{ item.example }}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.scene {
    width: 100%;
    max-width: 400px;
    height: 500px;
    perspective: 1000px;
    margin: 0 auto;
}

.card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
    cursor: pointer;
}

.card.is-flipped {
    transform: rotateY(180deg);
}

.card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 32px;
    border: 6px solid var(--color-indigo-dark);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    box-shadow: 12px 12px 0px rgba(0, 0, 0, 0.1);
}

.card-face-front {
    z-index: 2;
    transform: rotateY(0deg);
}

.card-face-back {
    transform: rotateY(180deg);
    background: var(--color-indigo-accent);
    color: white;
    border-color: var(--color-indigo-dark);
}
</style>