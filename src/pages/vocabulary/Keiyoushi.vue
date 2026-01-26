<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { I_AdjectivePairs, Na_AdjectivePairs } from '@/data/keiyoushi';
import { useRoute } from 'vue-router';
import AdjectiveCard from '@/components/common/card/AdjectiveCard.vue';


const keiyoushiTabs = [
    { label: 'Kata Sifat-I', value: 'i' },
    { label: 'Kata Sifat-NA', value: 'na' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('i')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4">
        <TabSwitcher :tabs="keiyoushiTabs" v-model="activeTab" :theme="themeName" />

        <div class="max-w-3xl mx-auto bg-white border-4 border-dashed border-pop-dark rounded-2xl p-5 mb-8 text-center">
            <h3 class="font-black text-xl text-pop-dark mb-1">Dua Jenis Kata Sifat</h3>
            <div class="flex justify-center gap-4 text-sm font-bold mt-2">
                <span class="text-pink-500">Kata Sifat-I (Akhiran 'i')</span>
                <span class="text-slate-300">|</span>
                <span class="text-green-600">Kata Sifat-NA (Akhiran bebas)</span>
            </div>
        </div>

        <div v-show="activeTab === 'i'" class="animate-fade-in">
            <div class="grid grid-cols-3 gap-3 md:gap-4">
                <AdjectiveCard v-for="(pair, index) in I_AdjectivePairs" :key="'i-' + index" :pair="pair" group="i" />
            </div>
        </div>

        <div v-show="activeTab === 'na'" class="animate-fade-in">
            <div class="grid grid-cols-3 gap-3 md:gap-4">
                <AdjectiveCard v-for="(pair, index) in Na_AdjectivePairs" :key="'na-' + index" :pair="pair"
                    group="na" />
            </div>
        </div>

    </div>
</template>