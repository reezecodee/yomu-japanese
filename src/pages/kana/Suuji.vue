<script setup lang="ts">
import NumberCard from '@/components/common/card/NumberCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { BasicNumbers, Hundreds, Thousands, BigNumbers } from '@/data/suuji';
import { playAudio } from '@/utils/audio';
import { useSettings } from '@/composables/useSettings';

const numberTabs = [
    { label: 'Satuan (1-10)', value: 'basic' },
    { label: 'Puluhan', value: 'tens' },
    { label: 'Ratusan & Ribuan', value: 'hundreds' },
    { label: 'Jutaan (Big!)', value: 'millions' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref('basic')

const { showRomaji, showFurigana } = useSettings();
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

                    <div class="col-span-2 md:col-span-5 mt-4 p-4 bg-slate-100 rounded-2xl border-2 border-slate-200 flex justify-center items-center gap-6 cursor-pointer hover:bg-slate-200 active:scale-95 transition-all select-none group relative shadow-sm"
                        @click="playAudio('ゼロ')">

                        <span class="font-black text-4xl text-slate-300">0</span>

                        <div class="flex flex-col items-start">

                            <span v-if="showFurigana" class="text-xs text-slate-500 font-medium mb-0.5">
                                ゼロ / れい
                            </span>

                            <span class="font-bold text-xl text-slate-600 leading-none">
                                ゼロ / 零
                            </span>

                            <span v-if="showRomaji"
                                class="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">
                                Zero / Rei
                            </span>
                        </div>

                        <span
                            class="absolute top-2 right-3 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                            🔊
                        </span>

                    </div>
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'tens'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.vanilla-dark')]">

                <h2 class="text-center font-black text-3xl text-vanilla-dark mb-2">Rumus Puluhan</h2>
                <p class="text-center text-slate-500 mb-8 font-medium">Pola pembentukan angka belasan dan puluhan.</p>

                <div class="space-y-8">

                    <div class="bg-vanilla rounded-3xl p-6 border-2 border-vanilla-accent/50 relative overflow-hidden">
                        <div
                            class="absolute top-0 left-0 bg-vanilla-accent text-white px-4 py-1 rounded-br-xl text-xs font-bold tracking-widest uppercase">
                            Belasan (11-19)
                        </div>

                        <p class="text-center text-vanilla-dark mt-4 mb-6 font-medium">
                            Rumus: <span class="font-bold">10 (Juu)</span> + <span class="font-bold">Satuan</span>
                        </p>

                        <div class="flex items-center justify-center gap-2 md:gap-3 flex-wrap select-none">

                            <div class="flex flex-col items-center bg-white border-2 border-vanilla-dark rounded-xl p-3 min-w-[80px] cursor-pointer hover:bg-slate-50 active:scale-95 transition-all shadow-sm group"
                                @click="playAudio('十')">
                                <span v-if="showFurigana" class="text-xs text-slate-400 mb-0.5">じゅう</span>
                                <span class="text-2xl font-black text-vanilla-dark">十</span>
                                <span v-if="showRomaji" class="text-[10px] font-bold text-slate-400 uppercase mt-1">Juu
                                    (10)</span>
                            </div>

                            <div class="text-vanilla-accent font-black text-xl">+</div>

                            <div class="flex flex-col items-center bg-white border-2 border-vanilla-dark rounded-xl p-3 min-w-[80px] cursor-pointer hover:bg-slate-50 active:scale-95 transition-all shadow-sm group"
                                @click="playAudio('一')">
                                <span v-if="showFurigana" class="text-xs text-slate-400 mb-0.5">いち</span>
                                <span class="text-2xl font-black text-vanilla-dark">一</span>
                                <span v-if="showRomaji" class="text-[10px] font-bold text-slate-400 uppercase mt-1">Ichi
                                    (1)</span>
                            </div>

                            <div class="text-vanilla-accent font-black text-xl">=</div>

                            <div class="flex flex-col items-center bg-vanilla-accent text-white border-2 border-vanilla-dark rounded-xl p-3 min-w-[100px] cursor-pointer hover:brightness-110 active:scale-95 transition-all shadow-[0px_4px_0px_#78350f] active:shadow-none active:translate-y-[4px] group"
                                @click="playAudio('十一')">
                                <span v-if="showFurigana" class="text-xs text-white/80 mb-0.5">じゅういち</span>
                                <span class="text-2xl font-black">十一</span>
                                <span v-if="showRomaji"
                                    class="text-[10px] font-bold text-white/90 uppercase mt-1">Juu-ichi (11) 🔊</span>
                            </div>
                        </div>
                    </div>

                    <div class="bg-vanilla rounded-3xl p-6 border-2 border-vanilla-accent/50 relative overflow-hidden">
                        <div
                            class="absolute top-0 left-0 bg-vanilla-dark text-white px-4 py-1 rounded-br-xl text-xs font-bold tracking-widest uppercase">
                            Puluhan (20, 30...)
                        </div>

                        <p class="text-center text-vanilla-dark mt-4 mb-6 font-medium">
                            Rumus: <span class="font-bold">Satuan</span> x <span class="font-bold">10 (Juu)</span>
                        </p>

                        <div class="flex items-center justify-center gap-2 md:gap-3 flex-wrap select-none">

                            <div class="flex flex-col items-center bg-white border-2 border-vanilla-dark rounded-xl p-3 min-w-[80px] cursor-pointer hover:bg-slate-50 active:scale-95 transition-all shadow-sm group"
                                @click="playAudio('二')">
                                <span v-if="showFurigana" class="text-xs text-slate-400 mb-0.5">に</span>
                                <span class="text-2xl font-black text-vanilla-dark">二</span>
                                <span v-if="showRomaji" class="text-[10px] font-bold text-slate-400 uppercase mt-1">Ni
                                    (2)</span>
                            </div>

                            <div class="text-vanilla-dark font-black text-xs px-1 opacity-50">lalu</div>

                            <div class="flex flex-col items-center bg-white border-2 border-vanilla-dark rounded-xl p-3 min-w-[80px] cursor-pointer hover:bg-slate-50 active:scale-95 transition-all shadow-sm group"
                                @click="playAudio('十')">
                                <span v-if="showFurigana" class="text-xs text-slate-400 mb-0.5">じゅう</span>
                                <span class="text-2xl font-black text-vanilla-dark">十</span>
                                <span v-if="showRomaji" class="text-[10px] font-bold text-slate-400 uppercase mt-1">Juu
                                    (10)</span>
                            </div>

                            <div class="text-vanilla-accent font-black text-xl">=</div>

                            <div class="flex flex-col items-center bg-vanilla-dark text-white border-2 border-vanilla-dark rounded-xl p-3 min-w-[100px] cursor-pointer hover:bg-slate-800 active:scale-95 transition-all shadow-[0px_4px_0px_#000000] active:shadow-none active:translate-y-[4px] group"
                                @click="playAudio('二十')">
                                <span v-if="showFurigana" class="text-xs text-white/70 mb-0.5">にじゅう</span>
                                <span class="text-2xl font-black">二十</span>
                                <span v-if="showRomaji"
                                    class="text-[10px] font-bold text-white/90 uppercase mt-1">Ni-juu (20) 🔊</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div v-show="activeTab === 'hundreds'" class="animate-fade-in">
            <div class="grid gap-6 md:grid-cols-2">

                <div
                    class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 shadow-[8px_8px_0px_theme('colors.vanilla-dark')] h-fit">

                    <div class="flex justify-between items-center mb-6 border-b-2 border-slate-100 pb-4">
                        <h2 class="font-black text-2xl text-vanilla-dark">Ratusan</h2>
                        <div
                            class="bg-yellow-100 text-vanilla-dark font-bold px-3 py-1 rounded-lg border border-vanilla-dark text-sm flex flex-col items-center leading-none">
                            <span v-if="showFurigana" class="text-[10px] text-slate-500 mb-0.5">ひゃく</span>
                            <span>百</span>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div v-for="(item, i) in Hundreds" :key="i"
                            class="flex justify-between items-center p-3 rounded-xl border-2 border-transparent hover:border-vanilla-dark/10 hover:bg-yellow-50 cursor-pointer transition-all group select-none"
                            @click="playAudio(item.kanji)">

                            <span class="font-black text-xl w-12"
                                :class="item.isException ? 'text-red-500' : 'text-slate-800'">
                                {{ item.num }}
                            </span>

                            <div class="flex items-center gap-3">

                                <span
                                    class="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-200">
                                    🔊
                                </span>

                                <div class="flex flex-col items-end">

                                    <span v-if="showFurigana" class="text-[10px] font-medium text-slate-500 mb-0.5">
                                        {{ item.furigana }}
                                    </span>

                                    <div class="flex items-center gap-1">
                                        <span v-if="item.isException" class="text-[10px]">⚠️</span>
                                        <span class="font-bold text-lg leading-none"
                                            :class="item.isException ? 'text-red-500' : 'text-slate-700'">
                                            {{ item.kanji }}
                                        </span>
                                    </div>

                                    <span v-if="showRomaji"
                                        class="text-[10px] font-bold uppercase tracking-wider mt-0.5"
                                        :class="item.isException ? 'text-red-400' : 'text-slate-400'">
                                        {{ item.romaji }}
                                    </span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    class="bg-white border-4 border-vanilla-dark rounded-[32px] p-6 shadow-[8px_8px_0px_theme('colors.vanilla-dark')] h-fit">

                    <div class="flex justify-between items-center mb-6 border-b-2 border-slate-100 pb-4">
                        <h2 class="font-black text-2xl text-vanilla-dark">Ribuan</h2>
                        <div
                            class="bg-yellow-100 text-vanilla-dark font-bold px-3 py-1 rounded-lg border border-vanilla-dark text-sm flex flex-col items-center leading-none">
                            <span v-if="showFurigana" class="text-[10px] text-slate-500 mb-0.5">せん</span>
                            <span>千</span>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <div v-for="(item, i) in Thousands" :key="i"
                            class="flex justify-between items-center p-3 rounded-xl border-2 border-transparent hover:border-vanilla-dark/10 hover:bg-yellow-50 cursor-pointer transition-all group select-none"
                            @click="playAudio(item.kanji)">

                            <span class="font-black text-xl w-16"
                                :class="item.isException ? 'text-red-500' : 'text-slate-800'">
                                {{ item.num }}
                            </span>

                            <div class="flex items-center gap-3">

                                <span
                                    class="text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-200">
                                    🔊
                                </span>

                                <div class="flex flex-col items-end">

                                    <span v-if="showFurigana" class="text-[10px] font-medium text-slate-500 mb-0.5">
                                        {{ item.furigana }}
                                    </span>

                                    <div class="flex items-center gap-1">
                                        <span v-if="item.isException" class="text-[10px]">⚠️</span>
                                        <span class="font-bold text-lg leading-none"
                                            :class="item.isException ? 'text-red-500' : 'text-slate-700'">
                                            {{ item.kanji }}
                                        </span>
                                    </div>

                                    <span v-if="showRomaji"
                                        class="text-[10px] font-bold uppercase tracking-wider mt-0.5"
                                        :class="item.isException ? 'text-red-400' : 'text-slate-400'">
                                        {{ item.romaji }}
                                    </span>

                                </div>
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
                <p class="text-center text-yellow-100 mb-8 text-sm font-medium">
                    Jepang menghitung per <span class="bg-white/20 px-1 rounded font-bold text-white">4 digit
                        (Man)</span>, bukan 3 digit (Ribu)!
                </p>

                <div class="grid gap-4">
                    <div v-for="(item, i) in BigNumbers" :key="i"
                        class="bg-white text-vanilla-dark rounded-2xl p-5 border-b-8 border-r-4 border-vanilla-accent transform hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group select-none relative overflow-hidden"
                        @click="playAudio(item.kanji)">

                        <div
                            class="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity text-vanilla-accent/50 text-lg">
                            🔊
                        </div>

                        <div class="flex justify-between items-end gap-4">

                            <div class="flex flex-col justify-end pb-1">
                                <h3 class="font-black text-3xl md:text-5xl tracking-tighter text-slate-800">
                                    {{ item.num }}
                                </h3>

                                <div
                                    class="inline-flex items-center gap-1 bg-yellow-100 text-vanilla-dark text-xs font-bold px-2 py-1 rounded-md mt-2 w-fit border border-yellow-200">
                                    <span>💡</span>
                                    <span>{{ item.note }}</span>
                                </div>
                            </div>

                            <div class="flex flex-col items-end text-right min-w-[100px]">

                                <span v-if="showFurigana" class="text-sm font-bold text-slate-500 mb-[-4px] z-10">
                                    {{ item.furigana }}
                                </span>

                                <span
                                    class="block text-5xl md:text-6xl font-black text-vanilla-accent leading-none filter drop-shadow-sm">
                                    {{ item.kanji }}
                                </span>

                                <span v-if="showRomaji"
                                    class="font-bold text-slate-400 text-xs md:text-sm mt-1 uppercase tracking-wider">
                                    {{ item.romaji }}
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>