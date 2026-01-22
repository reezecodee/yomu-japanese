<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{
    title: string,
    hoverClass: string,
}>()
</script>

<template>
    <nav class="sticky top-4 z-40 px-4 mb-8">
        <div
            class="max-w-4xl mx-auto bg-white border-4 border-slate-800 rounded-2xl shadow-btn p-3 flex justify-between items-center">
            <RouterLink to="/" class="flex items-center gap-2 group">
                <div class="bg-slate-800 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-lg  transition-colors"
                    :class="hoverClass">
                    ←</div>
                <span class="font-extrabold text-lg text-slate-800">Kembali</span>
            </RouterLink>
            <h1 class="font-black text-2xl tracking-tighter text-slate-800 uppercase">{{ title }}</h1>
            <div class="w-8"></div>
        </div>
    </nav>
</template>
