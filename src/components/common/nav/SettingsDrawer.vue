<script setup lang="ts">
import { ref } from 'vue';
import { useSettings } from '@/composables/useSettings';

const isSettingsOpen = ref(false);
const { showFurigana, showRomaji } = useSettings();
</script>

<template>
    <div class="relative h-12 flex justify-end pointer-events-none z-20">
    <div class="flex items-start transition-transform duration-300 ease-in-out pointer-events-none"
        :class="isSettingsOpen ? 'translate-x-0' : 'translate-x-[calc(100%-3rem)]'">

        <button @click="isSettingsOpen = !isSettingsOpen"
            class="w-12 h-12 pointer-events-auto bg-teal-500 hover:bg-teal-400 text-white flex items-center justify-center rounded-l-xl border-y-4 border-l-4 border-slate-800 shadow-[-4px_4px_0px_rgba(0,0,0,0.2)] relative z-20 focus:outline-none transition-colors cursor-pointer">

            <svg v-if="!isSettingsOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path
                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
                </path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <div class="pointer-events-auto bg-white border-y-4 border-l-4 border-slate-800 p-4 rounded-bl-xl shadow-[-6px_6px_0px_#1e293b] flex flex-col gap-3 min-w-[180px]">
            <p class="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-1">Display</p>
            <label
                class="flex items-center justify-between px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all duration-200 cursor-pointer select-none"
                :class="showFurigana ? 'bg-teal-100 border-slate-800 text-slate-900 shadow-[2px_2px_0px_#1e293b] translate-x-[-1px] translate-y-[-1px]' : 'bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'">
                <span>Furigana</span>
                <div class="w-5 h-5 rounded border-2 border-slate-800 flex items-center justify-center transition-colors"
                    :class="showFurigana ? 'bg-teal-500' : 'bg-white'">
                    <svg v-if="showFurigana" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <input type="checkbox" v-model="showFurigana" class="hidden">
            </label>

            <label
                class="flex items-center justify-between px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all duration-200 cursor-pointer select-none"
                :class="showRomaji ? 'bg-teal-100 border-slate-800 text-slate-900 shadow-[2px_2px_0px_#1e293b] translate-x-[-1px] translate-y-[-1px]' : 'bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'">
                <span>Romaji</span>
                <div class="w-5 h-5 rounded border-2 border-slate-800 flex items-center justify-center transition-colors"
                    :class="showRomaji ? 'bg-teal-500' : 'bg-white'">
                    <svg v-if="showRomaji" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"
                        stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <input type="checkbox" v-model="showRomaji" class="hidden">
            </label>
        </div>

    </div>
    </div>
</template>