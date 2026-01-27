<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { LandTransport, AirTransport, SeaTransport } from '@/data/norimono';

const transportTabs = [
    { label: 'Darat (Riku)', value: 'land' },
    { label: 'Udara (Sora)', value: 'air' },
    { label: 'Laut (Umi)', value: 'sea' }, 
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('land')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="transportTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'land'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-metro-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.metro-accent')]">
                <h2 class="text-3xl font-black text-metro-accent mb-6 border-b-2 border-metro pb-2">
                    Transportasi Darat 🚗
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MenuCard v-for="(item, i) in LandTransport" :key="i" :item="item" :theme="themeName" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'air'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-metro-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.metro-accent')]">
                <h2 class="text-3xl font-black text-metro-accent mb-6 border-b-2 border-metro pb-2">
                    Transportasi Udara ✈️
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MenuCard v-for="(item, i) in AirTransport" :key="i" :item="item" :theme="themeName" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'sea'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-metro-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.metro-accent')]">
                <h2 class="text-3xl font-black text-metro-accent mb-6 border-b-2 border-white pb-2">
                    Transportasi Laut 🚢
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MenuCard v-for="(item, i) in SeaTransport" :key="i" :item="item" :theme="themeName" />
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-metro-accent text-white p-6 rounded-3xl border-4 border-violet-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🚃</div>
                <div>
                    <h4 class="font-black text-xl">Norimasu (乗ります)</h4>
                    <p class="text-violet-100 font-bold text-sm">Naik (kendaraan). Partikel: <b>NI</b></p>
                    <p class="text-xs text-violet-200 mt-1 italic">Basu <b>ni</b> norimasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-6 rounded-3xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🚶</div>
                <div>
                    <h4 class="font-black text-xl">Orimasu (降ります)</h4>
                    <p class="text-slate-300 font-bold text-sm">Turun (kendaraan). Partikel: <b>O</b></p>
                    <p class="text-xs text-slate-400 mt-1 italic">Basu <b>o</b> orimasu.</p>
                </div>
            </div>

            <div
                class="bg-white text-metro-accent p-6 rounded-3xl border-4 border-metro-accent shadow-card flex items-center gap-4">
                <div class="text-4xl">🛠️</div>
                <div>
                    <h4 class="font-black text-xl">Partikel DE (で)</h4>
                    <p class="text-slate-500 font-bold text-sm">Menunjukkan alat transportasi.</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Basu <b>de</b> ikimasu.</p>
                </div>
            </div>
        </div>

    </div>
</template>