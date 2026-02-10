<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import { useLocalized } from '@/composables/useLocalized';
import type { JoshiItem } from '@/types';
import { playAudio } from '@/utils/audio';

defineProps<{
    item: JoshiItem;
}>();

const { showRomaji, showFurigana } = useSettings();
const { getLabel, getFunction, getExampleResult } = useLocalized();
</script>

<template>
    <div class="particle-card h-full">
        <div class="card-header group cursor-pointer select-none relative transition-colors duration-200"
            @click="playAudio(item.kana)">
            <div
                class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity text-white/90 text-sm">
                🔊</div>
            <div class="text-4xl md:text-5xl font-black pl-6">{{ item.kana }}</div>
            <div class="text-right">
                <div class="text-lg md:text-xl font-bold uppercase tracking-wide">{{ item.romaji }}</div>
                <div
                    class="text-xs font-bold opacity-80 uppercase tracking-widest bg-white/20 px-2 rounded mt-1 inline-block">
                    {{ getLabel(item) }}
                </div>
            </div>
        </div>

        <div class="p-6 flex-grow flex flex-col gap-4">
            <div>
                <h3 class="font-bold text-mint-dark mb-1 flex items-center gap-2">
                    <span class="text-lg">💡</span> {{ $t('common.dictionary.joshi.function') }}:
                </h3>
                <p class="text-sm text-slate-600 font-medium leading-relaxed">
                    {{ getFunction(item) }}
                </p>
            </div>

            <div class="example-bubble mt-auto group cursor-pointer select-none relative transition-all duration-200"
                @click="playAudio(item.example.jp)">

                <div
                    class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-mint-dark text-xs">
                    🔊</div>

                <p v-if="showFurigana && item.example.furigana"
                    class="text-xs font-medium text-slate-400 mb-0.5 pl-0.5 tracking-wide">
                    <span
                        v-html="item.example.furigana.replace(item.example.highlight, `<span class='text-mint-dark font-bold'>${item.example.highlight}</span>`)"></span>
                </p>

                <p class="font-black text-lg text-mint-dark mb-1 pr-4 leading-none">
                    <span
                        v-html="item.example.jp.replace(item.example.highlight, `<span class='text-mint-accent'>${item.example.highlight}</span>`)"></span>
                </p>

                <p class="text-sm font-bold text-slate-500 italic mb-1">
                    {{ showRomaji ? item.example.ro : '-' }}
                </p>

                <p class="text-sm font-bold text-slate-800 border-t border-dashed border-green-200 pt-1 mt-1">
                    {{ getExampleResult(item.example) }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.particle-card {
    background: white;
    border: 4px solid var(--color-mint-dark);
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
}

.particle-card:hover {
    transform: translateY(-4px);
    box-shadow: 10px 10px 0px rgba(0, 0, 0, 0.15);
}

.card-header {
    background: var(--color-mint-accent);
    color: white;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 4px solid var(--color-mint-dark);
    transition: filter 0.2s ease, box-shadow 0.1s ease-out;
}

.card-header:hover {
    filter: brightness(1.05);
}

.card-header:active {
    box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.25);
    filter: brightness(0.95);
    border-bottom-color: transparent;
}

.example-bubble {
    background: var(--color-mint);
    border: 2px dashed var(--color-mint-accent);
    border-radius: 16px;
    padding: 1rem;
}

.example-bubble:hover {
    background: #dcfce7;
    border-style: solid;
    border-color: var(--color-mint-dark);
}

.example-bubble:active {
    background: #bbf7d0;
    border-color: var(--color-mint-dark);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>