<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import KanjiCard from '@/components/common/card/KanjiCard.vue';
import { useRoute } from 'vue-router';
import { N5, N4, N3, N2, N1 } from '@/data/kanji';

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const kanjiTabs = [
    { label: `N5 (${N5.length})`, value: 'n5' },
    { label: `N4 (${N4.length})`, value: 'n4' },
    { label: `N3 (${N3.length})`, value: 'n3' },
    { label: `N2 (${N2.length})`, value: 'n2' },
    { label: `N1 (${N1.length})`, value: 'n1' },
];

const activeTab = ref('n5');

// --- LOGIC PAGINATION ---

const currentPage = ref(1);
const itemsPerPage = 24;

const currentDataSource = computed(() => {
    switch (activeTab.value) {
        case 'n5': return N5;
        case 'n4': return N4;
        case 'n3': return N3;
        case 'n2': return N2;
        case 'n1': return N1;
        default: return [];
    }
});

const totalPages = computed(() => Math.ceil(currentDataSource.value.length / itemsPerPage));

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return currentDataSource.value.slice(start, end);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

watch(activeTab, () => {
    currentPage.value = 1;
});

const btnStyle = computed(() => {
    return {
        '--btn-bg': `var(--color-${themeName.value}-accent, #6366f1)`,
        '--btn-text': '#ffffff'
    }
});
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="kanjiTabs" v-model="activeTab" :theme="themeName" />

        <div class="animate-fade-in min-h-[400px]">

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                <KanjiCard v-for="(item, index) in paginatedData" :key="`${activeTab}-${index}`" :data="item"
                    :theme="themeName" />
            </div>

            <div v-if="paginatedData.length === 0" class="text-center py-12 text-slate-400 font-bold">
                Belum ada data Kanji untuk level ini.
            </div>
        </div>

        <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 sm:gap-4 mt-10 sm:mt-14 w-full"
            :style="btnStyle">

            <button @click="prevPage" :disabled="currentPage === 1"
                class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold transition-all border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none bg-white text-slate-800 hover:bg-slate-50 cursor-pointer text-sm sm:text-base">
                ← <span class="ml-1">Prev</span>
            </button>

            <div class="flex items-center justify-center min-w-[70px] sm:min-w-[120px]">
                <span class="font-black text-slate-800 text-sm sm:text-lg">
                    {{ currentPage }} / {{ totalPages }}
                </span>
            </div>

            <button @click="nextPage" :disabled="currentPage === totalPages"
                class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold transition-all border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none bg-[var(--btn-bg)] text-white hover:brightness-110 cursor-pointer text-sm sm:text-base">
                <span class="mr-1">Next</span> →
            </button>

        </div>
    </div>
</template>