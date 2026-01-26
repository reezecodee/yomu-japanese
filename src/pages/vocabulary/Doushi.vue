<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { godan, ichidan, irregular } from '@/data/doushi';
import { useRoute } from 'vue-router';
import VerbCard from '@/components/common/card/VerbCard.vue';
import IrregularCard from '@/components/common/card/IrregularCard.vue';

const doushiTabs = [
    { label: 'Group 1 (Godan)', value: 'godan' },
    { label: 'Group 2 (Ichidan)', value: 'ichidan' },
    { label: 'Group 3 (Irregular)', value: 'irregular' }
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('godan')
</script>

<template>
    <div class="max-w-6xl mx-auto px-4">
        <TabSwitcher :tabs="doushiTabs" v-model="activeTab" :theme="themeName" />

        <div
            class="max-w-3xl mx-auto bg-white border-4 border-dashed border-rose-dark rounded-2xl p-6 mb-8 text-center">
            <h3 class="font-black text-xl text-rose-dark mb-2">💡 Tips Konjugasi</h3>
            <p class="text-slate-600 font-medium text-sm md:text-base">
                Bahasa Jepang punya 3 grup kata kerja. <br>
                Kotak abu-abu adalah <b>Bentuk Kamus (Casual)</b>, kotak merah muda adalah <b>Bentuk Masu (Sopan)</b>.
            </p>
        </div>

        <div v-show="activeTab === 'godan'" class="animate-fade-in">
            <div class="grid grid-cols-4 gap-3 md:gap-4">
                <VerbCard v-for="(verb, index) in godan" :key="index" :verb="verb" type="godan" />
            </div>
        </div>

        <div v-show="activeTab === 'ichidan'" class="animate-fade-in">
            <div class="grid grid-cols-4 gap-3 md:gap-4">
                <VerbCard v-for="(verb, index) in ichidan" :key="index" :verb="verb" type="ichidan" />
            </div>
        </div>

        <div v-show="activeTab === 'irregular'" class="animate-fade-in">
            <div class="grid grid-cols-2 gap-3 md:gap-4">
                <IrregularCard v-for="(verb, index) in irregular" :key="index" :verb="verb" />
            </div>
        </div>
    </div>
</template>