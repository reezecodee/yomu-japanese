<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { PublicBuildings, Shops, Housing } from '@/data/tatemono';

const buildingTabs = [
    { label: 'Fasilitas (Shisetsu)', value: 'public' },
    { label: 'Toko (Mise)', value: 'shops' },
    { label: 'Rumah (Ie)', value: 'housing' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('public')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="buildingTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'public'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-concrete-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.concrete-accent')]">
                <h2 class="text-3xl font-black text-concrete-accent mb-6 border-b-2 border-concrete pb-2">
                    Fasilitas Umum 🏫
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-concrete-accent">
                    <MenuCard v-for="(item, i) in PublicBuildings" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'shops'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-concrete-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.concrete-accent')]">
                <h2 class="text-3xl font-black text-concrete-accent mb-6 border-b-2 border-concrete pb-2">
                    Toko & Komersial 🛒
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-concrete-accent">
                    <MenuCard v-for="(item, i) in Shops" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'housing'" class="animate-fade-in">
            <div
                class="bg-concrete border-4 border-concrete-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.concrete-accent')]">
                <h2 class="text-3xl font-black text-concrete-accent mb-6 border-b-2 border-white pb-2">
                    Rumah & Ruangan 🏠
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-concrete-accent">
                    <MenuCard v-for="(item, i) in Housing" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-concrete-accent text-white p-6 rounded-3xl border-4 border-slate-700 shadow-card flex items-center gap-4">
                <div class="text-4xl">📍</div>
                <div>
                    <h4 class="font-black text-xl">Partikel NI (に)</h4>
                    <p class="text-slate-200 font-bold text-sm">Menunjukkan keberadaan (Ada di...).</p>
                    <p class="text-xs text-slate-300 mt-1 italic">Gakkou <b>ni</b> imasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-6 rounded-3xl border-4 border-black shadow-card flex items-center gap-4">
                <div class="text-4xl">🏃</div>
                <div>
                    <h4 class="font-black text-xl">Partikel DE (で)</h4>
                    <p class="text-slate-300 font-bold text-sm">Melakukan aksi di tempat.</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Gakkou <b>de</b> benkyou shimasu.</p>
                </div>
            </div>

            <div
                class="bg-white text-concrete-accent p-6 rounded-3xl border-4 border-concrete-accent shadow-card flex items-center gap-4">
                <div class="text-4xl">👉</div>
                <div>
                    <h4 class="font-black text-xl">Partikel E (へ)</h4>
                    <p class="text-slate-500 font-bold text-sm">Menunjukkan tujuan (Ke...).</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Gakkou <b>e</b> ikimasu.</p>
                </div>
            </div>
        </div>

    </div>
</template>