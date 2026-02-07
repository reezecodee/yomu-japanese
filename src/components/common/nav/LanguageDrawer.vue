<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const isOpen = ref(false);

const languages = [
    { code: 'id', label: 'Indo', flag: '🇮🇩' },
    { code: 'en', label: 'Eng', flag: '🇬🇧' },
    { code: 'ja', label: 'Jpn', flag: '🇯🇵' },
];

const switchLang = (code: string) => {
    locale.value = code;
    localStorage.setItem('user-locale', code);
    isOpen.value = false;
};
</script>

<template>
    <div class="fixed top-32 right-0 z-50 flex items-start transition-transform duration-300 ease-in-out"
        :class="isOpen ? 'translate-x-0' : 'translate-x-[calc(100%-3rem)]'">

        <button @click="isOpen = !isOpen"
            class="w-12 h-12 bg-peach-accent hover:bg-peach text-white flex items-center justify-center rounded-l-xl border-y-4 border-l-4 border-slate-800 shadow-[-4px_4px_0px_rgba(0,0,0,0.2)] relative z-20 focus:outline-none transition-colors cursor-pointer"
            aria-label="Change Language">
            <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                </path>
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>

        <div
            class="bg-white border-y-4 border-l-4 border-slate-800 p-4 rounded-bl-xl shadow-[-6px_6px_0px_#1e293b] flex flex-col gap-3 min-w-[140px]">

            <p class="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-1">
                Language
            </p>

            <button v-for="lang in languages" :key="lang.code" @click="switchLang(lang.code)"
                class="flex items-center justify-between px-3 py-2 rounded-lg border-2 font-bold text-sm transition-all duration-200 cursor-pointer"
                :class="locale === lang.code
                    ? 'bg-peach-accent border-slate-800 text-slate-900 shadow-[2px_2px_0px_#1e293b] translate-x-[-2px] translate-y-[-2px]'
                    : 'bg-slate-50 border-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-800'">
                <span class="text-lg">{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
            </button>

        </div>

    </div>
</template>