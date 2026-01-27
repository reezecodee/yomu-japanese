<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { LandAnimals, WaterAnimals, FlyingAnimals } from '@/data/doubutsu';

const animalTabs = [
    { label: 'Darat (Riku)', value: 'land' },
    { label: 'Air (Mizu)', value: 'water' },
    { label: 'Udara (Sora)', value: 'air' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('land')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="animalTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'land'" class="animate-fade-in">
            <div class="bg-white border-4 border-safari-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.safari-accent')]">
                
                <h2 class="text-3xl font-black text-safari-accent mb-6 border-b-2 border-safari pb-2">
                    Hewan Darat 🐕
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-safari-accent">
                    <MenuCard v-for="(item, i) in LandAnimals" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'water'" class="animate-fade-in">
            <div class="bg-white border-4 border-safari-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.safari-accent')]">
                <h2 class="text-3xl font-black text-safari-accent mb-6 border-b-2 border-safari pb-2">
                    Hewan Air 🐟
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sky-500">
                    <MenuCard v-for="(item, i) in WaterAnimals" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'air'" class="animate-fade-in">
            <div class="bg-white border-4 border-safari-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.safari-accent')]">
                <h2 class="text-3xl font-black text-safari-accent mb-6 border-b-2 border-white pb-2">
                    Burung & Serangga 🦋
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-safari-accent">
                    <MenuCard v-for="(item, i) in FlyingAnimals" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-safari-accent text-white p-6 rounded-3xl border-4 border-safari-dark shadow-card flex items-center gap-4">
                <div class="text-4xl">🐕</div>
                <div>
                    <h4 class="font-black text-xl">~Hiki (匹)</h4>
                    <p class="text-orange-100 font-bold text-sm">Untuk hewan kecil (Kucing, Ikan)</p>
                </div>
            </div>
            
            <div class="bg-slate-800 text-white p-6 rounded-3xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🐘</div>
                <div>
                    <h4 class="font-black text-xl">~Tou (頭)</h4>
                    <p class="text-slate-300 font-bold text-sm">Untuk hewan besar (Gajah, Sapi)</p>
                </div>
            </div>

            <div class="bg-white text-safari-dark p-6 rounded-3xl border-4 border-safari-dark shadow-card flex items-center gap-4">
                <div class="text-4xl">🐦</div>
                <div>
                    <h4 class="font-black text-xl">~Wa (羽)</h4>
                    <p class="text-slate-500 font-bold text-sm">Untuk hewan bersayap/burung</p>
                </div>
            </div>
        </div>

    </div>
</template>