<script setup lang="ts">
import ObjectCard from '@/components/common/card/ObjectCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { HomeItems, SchoolItems, NatureItems, HospitalItems, SportItems } from '@/data/mono'

const monoTabs = [
    { label: 'Rumah', value: 'rumah' },
    { label: 'Sekolah', value: 'sekolah' },
    { label: 'Alam', value: 'alam' },
    { label: 'RS', value: 'rs' },
    { label: 'Olahraga', value: 'olahraga' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('rumah')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="monoTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'rumah'" class="animate-fade-in">
            <div class="bg-orange-50 border-4 border-orange-200 rounded-[32px] p-6 md:p-8">
                <h2 class="text-2xl font-black text-orange-800 mb-6 flex items-center gap-2">
                    <span
                        class="bg-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-orange-300">🏠</span>
                    Benda di Rumah (Ie)
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <ObjectCard v-for="(item, index) in HomeItems" :key="index" :item="item" variant="home" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'sekolah'" class="animate-fade-in">
            <div class="bg-blue-50 border-4 border-blue-200 rounded-[32px] p-6 md:p-8">
                <h2 class="text-2xl font-black text-blue-800 mb-6 flex items-center gap-2">
                    <span
                        class="bg-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-blue-300">🏫</span>
                    Benda di Sekolah (Gakkou)
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <ObjectCard v-for="(item, index) in SchoolItems" :key="index" :item="item" variant="school" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'alam'" class="animate-fade-in">
            <div class="bg-green-50 border-4 border-green-200 rounded-[32px] p-6 md:p-8">
                <h2 class="text-2xl font-black text-green-800 mb-6 flex items-center gap-2">
                    <span
                        class="bg-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-green-300">🌳</span>
                    Benda di Alam (Shizen)
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <ObjectCard v-for="(item, index) in NatureItems" :key="index" :item="item" variant="nature" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'rs'" class="animate-fade-in">
            <div class="bg-red-50 border-4 border-red-200 rounded-[32px] p-6 md:p-8">
                <h2 class="text-2xl font-black text-red-800 mb-6 flex items-center gap-2">
                    <span
                        class="bg-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-red-300">🏥</span>
                    Rumah Sakit (Byouin)
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <ObjectCard v-for="(item, index) in HospitalItems" :key="index" :item="item" variant="hospital" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'olahraga'" class="animate-fade-in">
            <div class="bg-purple-50 border-4 border-purple-200 rounded-[32px] p-6 md:p-8">
                <h2 class="text-2xl font-black text-purple-800 mb-6 flex items-center gap-2">
                    <span
                        class="bg-white w-10 h-10 rounded-full flex items-center justify-center border-2 border-purple-300">⚽</span>
                    Tempat Olahraga (Supootsu)
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <ObjectCard v-for="(item, index) in SportItems" :key="index" :item="item" variant="sport" />
                </div>
            </div>
        </div>

        <div class="mt-8 bg-white border-4 border-pop-dark rounded-[32px] p-6 text-center shadow-card">
            <h3 class="font-black text-xl text-pop-dark mb-4">Contoh Kalimat</h3>
            <div class="flex flex-col md:flex-row gap-4 justify-center">
                <div class="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 flex-1">
                    <p class="text-slate-500 font-bold uppercase text-xs mb-1">Menunjuk Benda (Dekat)</p>
                    <p class="font-black text-lg text-slate-800">これ は <span class="text-sky-600">[Benda]</span> です。</p>
                    <p class="text-slate-700 font-medium">Kore wa <span class="text-slate-500 font-bold">[Benda]</span>
                        desu.</p>
                    <p class="text-sm text-slate-400 mt-1">Ini adalah [Benda].</p>
                </div>
                <div class="bg-slate-50 p-4 rounded-2xl border-2 border-slate-200 flex-1">
                    <p class="text-slate-500 font-bold uppercase text-xs mb-1">Keberadaan Benda</p>
                    <p class="font-black text-lg text-slate-800"><span class="text-sky-600">[Benda]</span> が あります。</p>
                    <p class="text-slate-700 font-medium"><span class="text-slate-500 font-bold">[Benda]</span> ga
                        arimasu.</p>
                    <p class="text-sm text-slate-400 mt-1">Ada [Benda].</p>
                </div>
            </div>
        </div>

    </div>
</template>