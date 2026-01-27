<script setup lang="ts">
import type { JoshiExtraItem } from '@/types/Joshi';

defineProps<{
    item: JoshiExtraItem;
}>();
</script>

<template>
    <div
        class="flex flex-col md:flex-row gap-4 p-4 rounded-xl transition-colors border-2 border-transparent hover:bg-mint hover:border-mint-accent group">

        <div
            class="w-16 h-16 bg-mint-dark text-white rounded-xl flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
            {{ item.kana }}
        </div>

        <div>
            <h4 class="font-bold text-lg text-mint-dark">
                {{ item.romaji }}
            </h4>
            <p class="text-sm text-slate-600 mb-1 leading-snug">
                {{ item.desc }}
            </p>
            <p
                class="text-xs font-bold text-mint-accent bg-white inline-block px-2 py-1 rounded border border-green-100">
                Contoh: {{ item.example }}
            </p>
        </div>

    </div>
</template>