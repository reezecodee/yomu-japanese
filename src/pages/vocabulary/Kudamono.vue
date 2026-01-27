<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { CommonFruits, SeasonalFruits, Vegetables } from '@/data/kudamono';

const foodTabs = [
    { label: 'Buah Umum', value: 'common' },
    { label: 'Musiman & Berry', value: 'seasonal' },
    { label: 'Sayuran (Yasai)', value: 'vegetables' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('common')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="foodTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'common'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-berry-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.berry-accent')]">
                <h2 class="text-3xl font-black text-berry-accent mb-6 border-b-2 border-berry pb-2">
                    Buah Umum 🍎
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-berry-accent">
                    <MenuCard v-for="(item, i) in CommonFruits" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'seasonal'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-berry-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.berry-accent')]">
                <h2 class="text-3xl font-black text-berry-accent mb-6 border-b-2 border-berry pb-2">
                    Musiman & Berries 🍓
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-berry-accent">
                    <MenuCard v-for="(item, i) in SeasonalFruits" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'vegetables'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-berry-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.berry-accent')]">
                <h2 class="text-3xl font-black text-berry-accent mb-6 border-b-2 border-white pb-2">
                    Sayuran (Yasai) 🥕
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-green-600">
                    <MenuCard v-for="(item, i) in Vegetables" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-berry-accent text-white p-6 rounded-3xl border-4 border-pink-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🍎</div>
                <div>
                    <h4 class="font-black text-xl">~Ko (個)</h4>
                    <p class="text-pink-100 font-bold text-sm">Untuk benda bulat kecil (Apel, Jeruk).</p>
                    <p class="text-xs text-pink-200 mt-1 italic">Ringo ga ik<b>ko</b> arimasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-6 rounded-3xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🍌</div>
                <div>
                    <h4 class="font-black text-xl">~Hon (本)</h4>
                    <p class="text-slate-300 font-bold text-sm">Untuk benda panjang (Pisang, Wortel).</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Banana ga nip<b>pon</b> arimasu.</p>
                </div>
            </div>

            <div
                class="bg-white text-berry-accent p-6 rounded-3xl border-4 border-berry-accent shadow-card flex items-center gap-4">
                <div class="text-4xl">🥬</div>
                <div>
                    <h4 class="font-black text-xl">~Mai (枚)</h4>
                    <p class="text-slate-500 font-bold text-sm">Untuk benda tipis/lembaran.</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Kyabetsu no ha (Daun kubis).</p>
                </div>
            </div>
        </div>

    </div>
</template>