<script setup lang="ts">
import NumberCard from '@/components/common/card/NumberCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { BasicNumbers, Hundreds, Thousands, BigNumbers } from '@/data/suuji';

const numberTabs = [
    { label: 'Satuan (1-10)', value: 'basic' },
    { label: 'Puluhan', value: 'tens' },
    { label: 'Ratusan & Ribuan', value: 'hundreds' },
    { label: 'Jutaan (Big!)', value: 'millions' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('basic')

// --- LOGIKA AUDIO (YOUDAO) ---
const playAudio = (text: string) => {
    if (!text) return;

    // Bersihkan teks dari simbol (misal: "300 (Sanbyaku)" -> ambil "Sanbyaku")
    // Atau kirim Kanji jika ada. Di sini kita terima text mentah.
    const encodedText = encodeURIComponent(text);
    const url = `https://dict.youdao.com/dictvoice?audio=${encodedText}&le=jap`;

    const audio = new Audio(url);
    audio.play().catch(e => console.warn("Audio Error:", e));
}
</script>

<template>
    <div class="max-w-4xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="numberTabs" v-model="activeTab" :theme="themeName" class="mb-8" />

        <div v-show="activeTab === 'basic'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.vanilla-dark')]">
                <h2 class="text-center font-black text-3xl text-vanilla-dark mb-6">Angka Dasar</h2>

                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <NumberCard v-for="(item, i) in BasicNumbers" :key="i" :item="item" />

                    <div class="col-span-2 md:col-span-5 mt-4 p-4 bg-slate-100 rounded-2xl border-2 border-slate-200 text-center flex justify-center items-center gap-4 cursor-pointer hover:bg-slate-200 active:scale-95 transition-all select-none group relative"
                        @click="playAudio('ゼロ')">

                        <span class="font-black text-2xl text-slate-400">0</span>
                        <span class="font-bold text-slate-600">Zero / Rei (ゼロ / 零)</span>

                        <span
                            class="absolute top-2 right-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">🔊</span>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'tens'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.vanilla-dark')]">
                <h2 class="text-center font-black text-3xl text-vanilla-dark mb-2">Rumus Puluhan</h2>
                <p class="text-center text-slate-500 mb-8 font-bold">Gabungkan angka dasar + Juu</p>

                <div class="space-y-6">
                    <div class="bg-vanilla rounded-2xl p-4 border-2 border-vanilla-accent">
                        <p class="text-sm font-bold text-vanilla-dark mb-2 uppercase tracking-widest text-center">
                            Belasan (11-19)</p>
                        <div
                            class="flex items-center justify-center gap-2 md:gap-4 text-xl md:text-3xl font-black text-vanilla-dark flex-wrap">
                            <span
                                class="bg-white px-4 py-2 rounded-xl border-2 border-vanilla-dark shadow-sm cursor-pointer hover:bg-slate-50 active:scale-95 transition-transform"
                                @click="playAudio('Juu')">10</span>

                            <span class="text-vanilla-accent">+</span>

                            <span
                                class="bg-white px-4 py-2 rounded-xl border-2 border-vanilla-dark shadow-sm cursor-pointer hover:bg-slate-50 active:scale-95 transition-transform"
                                @click="playAudio('Ichi')">1</span>

                            <span class="text-vanilla-accent">=</span>

                            <span
                                class="bg-vanilla-accent text-white px-4 py-2 rounded-xl border-2 border-vanilla-dark shadow-[0px_4px_0px_#78350f] cursor-pointer hover:brightness-110 active:translate-y-[4px] active:shadow-none transition-all"
                                @click="playAudio('Juuichi')">
                                11 <span class="text-sm font-normal block md:inline">(Juu-ichi) 🔊</span>
                            </span>
                        </div>
                    </div>

                    <div class="bg-vanilla rounded-2xl p-4 border-2 border-vanilla-accent">
                        <p class="text-sm font-bold text-vanilla-dark mb-2 uppercase tracking-widest text-center">
                            Puluhan (20, 30...)</p>
                        <div
                            class="flex items-center justify-center gap-2 md:gap-4 text-xl md:text-3xl font-black text-vanilla-dark flex-wrap">
                            <span
                                class="bg-white px-4 py-2 rounded-xl border-2 border-vanilla-dark shadow-sm cursor-pointer hover:bg-slate-50 active:scale-95 transition-transform"
                                @click="playAudio('Ni')">2</span>

                            <span class="text-vanilla-accent">x</span>

                            <span
                                class="bg-white px-4 py-2 rounded-xl border-2 border-vanilla-dark shadow-sm cursor-pointer hover:bg-slate-50 active:scale-95 transition-transform"
                                @click="playAudio('Juu')">10</span>

                            <span class="text-vanilla-accent">=</span>

                            <span
                                class="bg-vanilla-accent text-white px-4 py-2 rounded-xl border-2 border-vanilla-dark shadow-[0px_4px_0px_#78350f] cursor-pointer hover:brightness-110 active:translate-y-[4px] active:shadow-none transition-all"
                                @click="playAudio('Nijuu')">
                                20 <span class="text-sm font-normal block md:inline">(Ni-juu) 🔊</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'hundreds'" class="animate-fade-in">
            <div class="grid gap-6">

                <div
                    class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 shadow-[8px_8px_0px_theme('colors.vanilla-dark')]">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-black text-2xl text-vanilla-dark">Ratusan (Hyaku)</h2>
                        <span
                            class="bg-yellow-100 text-vanilla-dark font-bold px-3 py-1 rounded-lg border border-vanilla-dark text-sm">Unit:
                            百</span>
                    </div>
                    <div class="space-y-3">
                        <div v-for="(item, i) in Hundreds" :key="i"
                            class="flex justify-between items-center border-b-2 border-dashed border-slate-200 pb-2 cursor-pointer hover:bg-yellow-50 px-2 rounded transition-colors group select-none"
                            @click="playAudio(item.romaji)">

                            <span class="font-black text-xl"
                                :class="item.isException ? 'text-red-500' : 'text-slate-800'">
                                {{ item.num }}
                            </span>

                            <div class="text-right flex items-center gap-2">
                                <span class="text-xs opacity-0 group-hover:opacity-100 transition-opacity">🔊</span>

                                <span class="font-bold block"
                                    :class="item.isException ? 'text-red-500' : 'text-slate-500'">
                                    {{ item.romaji }} {{ item.isException ? '(⚠️)' : '' }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 shadow-[8px_8px_0px_theme('colors.vanilla-dark')]">
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-black text-2xl text-vanilla-dark">Ribuan (Sen)</h2>
                        <span
                            class="bg-yellow-100 text-vanilla-dark font-bold px-3 py-1 rounded-lg border border-vanilla-dark text-sm">Unit:
                            千</span>
                    </div>
                    <div class="space-y-3">
                        <div v-for="(item, i) in Thousands" :key="i"
                            class="flex justify-between items-center border-b-2 border-dashed border-slate-200 pb-2 cursor-pointer hover:bg-yellow-50 px-2 rounded transition-colors group select-none"
                            @click="playAudio(item.romaji)">

                            <span class="font-black text-xl"
                                :class="item.isException ? 'text-red-500' : 'text-slate-800'">
                                {{ item.num }}
                            </span>

                            <div class="flex items-center gap-2">
                                <span class="text-xs opacity-0 group-hover:opacity-100 transition-opacity">🔊</span>
                                <span class="font-bold" :class="item.isException ? 'text-red-500' : 'text-slate-500'">
                                    {{ item.romaji }} {{ item.isException ? '(⚠️)' : '' }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div v-show="activeTab === 'millions'" class="animate-fade-in">
            <div
                class="bg-vanilla-dark text-white border-4 border-vanilla-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_#451a03]">
                <h2 class="text-center font-black text-3xl text-yellow-400 mb-2">Angka Raksasa</h2>
                <p class="text-center text-yellow-100 mb-8 text-sm">Jepang menghitung per 4 digit (10.000), bukan per 3
                    digit!</p>

                <div class="grid gap-4">
                    <div v-for="(item, i) in BigNumbers" :key="i"
                        class="bg-white text-vanilla-dark rounded-2xl p-4 border-b-8 border-r-4 border-vanilla-accent transform hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group select-none relative"
                        @click="playAudio(item.kanji)">

                        <div
                            class="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity text-vanilla-accent text-sm">
                            🔊
                        </div>

                        <div class="flex justify-between items-end">
                            <div>
                                <h3 class="font-black text-3xl md:text-4xl tracking-tighter">{{ item.num }}</h3>
                                <p class="font-bold text-slate-400 text-sm mt-1">{{ item.note }}</p>
                            </div>
                            <div class="text-right">
                                <span class="block text-4xl font-black text-vanilla-accent">{{ item.kanji }}</span>
                                <span class="font-bold text-lg">{{ item.romaji }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>