<script setup lang="ts">
import type { VerbConjugation } from '@/types/Doushi';

interface Props {
    verb: VerbConjugation;
    type?: 'godan' | 'ichidan';
}

const props = withDefaults(defineProps<Props>(), {
    type: 'godan',
});

const badgeClass = props.type === 'ichidan'
    ? 'bg-pink-100 text-pink-600'
    : 'bg-slate-200 text-slate-600';

// --- LOGIKA AUDIO (YOUDAO) ---
const playAudio = (text: string) => {
    if (!text) return;

    const encodedText = encodeURIComponent(text);
    const url = `https://dict.youdao.com/dictvoice?audio=${encodedText}&le=jap`;

    const audio = new Audio(url);
    audio.play().catch(e => console.warn("Audio Error:", e));
}
</script>

<template>
    <div
        class="verb-card p-5 bg-white border-3 border-rose-900 rounded-3xl relative shadow-card hover:translate-y-[-4px] hover:shadow-lg hover:border-rose-600 transition-all duration-200">

        <div class="flex justify-between items-start mb-4">
            <span class="text-4xl">{{ verb.icon }}</span>
            <span :class="['text-xs font-black px-2 py-1 rounded', badgeClass]">
                {{ verb.rule }}
            </span>
        </div>

        <h3 class="text-center font-black text-2xl text-slate-700 mb-1">
            {{ verb.meaning }}
        </h3>

        <div class="mt-4 space-y-2">

            <div class="form-box form-dict bg-slate-100 border-2 border-slate-300 text-slate-500 rounded-xl p-2 text-center cursor-pointer group select-none relative hover:bg-slate-200 transition-colors"
                @click.stop="playAudio(verb.dictionary_form)">

                <div
                    class="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400 text-xs">
                    🔊
                </div>

                <span class="block text-xl font-bold text-slate-800">{{ verb.dictionary_form }}</span>
                <span class="text-xs font-bold uppercase">{{ verb.romaji }}</span>
            </div>

            <div class="trans-arrow flex justify-center text-rose-600 font-black text-2xl my-1">
                ↓
            </div>

            <div class="form-box form-masu bg-rose-50 border-2 border-rose-600 text-rose-600 rounded-xl p-2 text-center cursor-pointer group select-none relative hover:bg-rose-100 transition-colors"
                @click.stop="playAudio(verb.masu_form)">

                <div
                    class="absolute top-1 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-rose-400 text-xs">
                    🔊
                </div>

                <span class="block text-xl font-bold">{{ verb.masu_form }}</span>
                <span class="text-xs font-bold uppercase">{{ verb.masu_romaji }}</span>
            </div>

        </div>
    </div>
</template>

<style scoped>
.verb-card {
    border-width: 3px;
}

.form-box:active {
    transform: scale(0.98);
}
</style>