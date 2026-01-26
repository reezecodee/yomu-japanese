<script setup lang="ts">
import type { VerbConjugation } from '@/types/Doushi';

defineProps<{
    verb: VerbConjugation;
}>();
</script>

<template>
    <div
        class="verb-card p-5 bg-yellow-50 border-3 border-yellow-500 rounded-3xl relative shadow-card hover:translate-y-[-4px] hover:shadow-lg transition-all duration-200">

        <div class="flex justify-between items-start mb-4">
            <span class="text-4xl">{{ verb.icon }}</span>
            <span class="text-xs font-black bg-white text-slate-600 px-2 py-1 rounded border border-slate-200">
                Spesial
            </span>
        </div>

        <h3 class="text-center font-black text-2xl text-slate-700 mb-1">
            {{ verb.meaning }}
        </h3>

        <div class="mt-4 space-y-2">

            <div class="form-box bg-white border-2 border-yellow-200 text-slate-600 rounded-xl p-2 text-center">
                <span class="block text-xl font-bold text-slate-800">{{ verb.dictionary_form }}</span>
                <span class="text-xs font-bold uppercase">{{ verb.romaji }}</span>
            </div>

            <div class="trans-arrow flex justify-center text-yellow-600 font-black text-2xl my-1">
                ↓
            </div>

            <div class="form-box bg-yellow-100 border-2 border-yellow-500 text-yellow-800 rounded-xl p-2 text-center">
                <span class="block text-xl font-bold">{{ verb.masu_form }}</span>
                <span class="text-xs font-bold uppercase">{{ verb.masu_romaji }}</span>
            </div>

        </div>

        <p class="text-xs text-center mt-3 text-slate-500 font-bold opacity-80">
            *Perubahan bentuk tidak beraturan
        </p>
    </div>
</template>

<style scoped>
.verb-card {
    border-width: 3px;
}
</style>