<script setup lang="ts">
import { useSettings } from '@/composables/useSettings';
import type { NumberItem } from '@/types';
import { playAudio } from '@/utils/audio';

const props = defineProps<{
    item: NumberItem;
}>();

const { showRomaji } = useSettings()
</script>

<template>
    <div @click="playAudio(props.item.kanji)"
        class="group relative top-0 active:top-[4px] bg-white border-4 border-vanilla-dark rounded-2xl p-4 text-center cursor-pointer transition-all duration-100 shadow-[0px_6px_0px_#f59e0b] active:shadow-[0px_2px_0px_#f59e0b] hover:bg-vanilla select-none">

        <div class="text-5xl font-black text-vanilla-accent mb-2">
            {{ item.num }}
        </div>

        <div class="text-2xl font-bold text-vanilla-dark">
            {{ item.kanji }}
        </div>

        <div v-if="showRomaji" class="text-sm font-bold text-slate-400 mt-1 uppercase tracking-wider">
            {{ item.romaji }}
        </div>

        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-vanilla-dark/50">
            🔊
        </div>

    </div>
</template>