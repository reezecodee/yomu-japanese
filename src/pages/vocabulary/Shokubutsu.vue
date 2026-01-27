<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Trees, Flowers, NatureParts } from '@/data/shokubutsu';

const plantTabs = [
    { label: 'Pohon (Ki)', value: 'trees' },
    { label: 'Bunga (Hana)', value: 'flowers' },
    { label: 'Bagian & Alam', value: 'parts' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('trees')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4 pb-12">

        <TabSwitcher :tabs="plantTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div v-show="activeTab === 'trees'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-forest-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.forest-accent')]">
                <h2 class="text-3xl font-black text-forest-accent mb-6 border-b-2 border-forest pb-2">
                    Pohon & Hutan 🌳
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-forest-accent">
                    <MenuCard v-for="(item, i) in Trees" :key="i" :item="item" :theme="themeName" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'flowers'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-forest-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.forest-accent')]">
                <h2 class="text-3xl font-black text-forest-accent mb-6 border-b-2 border-forest pb-2">
                    Bunga-bungaan 🌻
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-rose-500">
                    <MenuCard v-for="(item, i) in Flowers" :key="i" :item="item" :theme="themeName" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'parts'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-forest-accent rounded-[32px] p-6 md:p-8 shadow-[8px_8px_0px_theme('colors.forest-accent')]">
                <h2 class="text-3xl font-black text-forest-accent mb-6 border-b-2 border-white pb-2">
                    Bagian Tanaman 🌿
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-forest-accent">
                    <MenuCard v-for="(item, i) in NatureParts" :key="i" :item="item" :theme="themeName" />
                </div>
            </div>
        </div>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-forest-accent text-white p-6 rounded-3xl border-4 border-green-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🌳</div>
                <div>
                    <h4 class="font-black text-xl">~Hon (本)</h4>
                    <p class="text-green-100 font-bold text-sm">Untuk pohon (benda panjang).</p>
                    <p class="text-xs text-green-200 mt-1 italic">Ki ga ip<b>pon</b> arimasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-6 rounded-3xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl">🌻</div>
                <div>
                    <h4 class="font-black text-xl">~Rin (輪)</h4>
                    <p class="text-slate-300 font-bold text-sm">Satuan khusus untuk bunga mekar.</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Juga bisa pakai ~Hon untuk tangkainya.</p>
                </div>
            </div>

            <div
                class="bg-white text-forest-accent p-6 rounded-3xl border-4 border-forest-accent shadow-card flex items-center gap-4">
                <div class="text-4xl">🎍</div>
                <div>
                    <h4 class="font-black text-xl">Kabin (花瓶)</h4>
                    <p class="text-slate-500 font-bold text-sm">Vas Bunga.</p>
                    <p class="text-xs text-slate-400 mt-1 italic">Kabin ni hana o iremasu.</p>
                </div>
            </div>
        </div>

    </div>
</template>