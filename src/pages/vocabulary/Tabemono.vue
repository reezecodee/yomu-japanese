<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { FoodItems, DrinkItems, TasteItems } from '@/data/tabemono';

const tabemonoTabs = [
    { label: 'Makanan (Tabemono)', value: 'tabemono' },
    { label: 'Minuman (Nomimono)', value: 'nomimono' },
    { label: 'Rasa (Aji)', value: 'aji' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('tabemono')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="tabemonoTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'tabemono'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-apricot-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_var(--color-apricot-dark)]">
                <h2 class="text-3xl font-black text-apricot-dark mb-6 border-b-2 border-orange-100 pb-2">Menu Makanan
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MenuCard v-for="(item, i) in FoodItems" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'nomimono'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-apricot-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_var(--color-apricot-dark)]">
                <h2 class="text-3xl font-black text-apricot-dark mb-6 border-b-2 border-orange-100 pb-2">Menu Minuman
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MenuCard v-for="(item, i) in DrinkItems" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'aji'" class="animate-fade-in">
            <div
                class="bg-apricot border-4 border-apricot-dark rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_var(--color-apricot-dark)]">
                <h2 class="text-3xl font-black text-apricot-dark mb-6 border-b-2 border-orange-200 pb-2">Rasa (Aji)</h2>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <MenuCard v-for="(item, i) in TasteItems" :key="i" :item="item" />
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
                class="bg-apricot-accent text-white p-6 rounded-3xl border-4 border-apricot-dark shadow-card flex items-center gap-4">
                <div class="text-4xl">🙏</div>
                <div>
                    <h4 class="font-black text-xl">Itadakimasu</h4>
                    <p class="text-orange-100 font-bold text-sm">Diucapkan SEBELUM makan (Selamat makan)</p>
                </div>
            </div>
            <div
                class="bg-slate-800 text-white p-6 rounded-3xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">😌</div>
                <div>
                    <h4 class="font-black text-xl">Gochisousama</h4>
                    <p class="text-slate-300 font-bold text-sm">Diucapkan SETELAH makan (Terima kasih hidangannya)</p>
                </div>
            </div>
        </div>

    </div>
</template>