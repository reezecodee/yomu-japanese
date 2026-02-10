<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { godan, ichidan, irregular } from '@/data/doushi';
import { useRoute } from 'vue-router';
import VerbCard from '@/components/common/card/VerbCard.vue';
import IrregularCard from '@/components/common/card/IrregularCard.vue';
import { usePagination } from '@/composables/usePagination';

const doushiTabs = [
    { label: 'Godan (五段)', value: 'godan' },
    { label: 'Ichidan (一段)', value: 'ichidan' },
    { label: 'Fukisoku (不規則)', value: 'irregular' }
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'godan' | 'ichidan' | 'irregular'>('godan');

const currentData = computed(() => {
    if (activeTab.value === 'godan') return godan;
    if (activeTab.value === 'ichidan') return ichidan;
    return irregular;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-${themeName.value}-accent, #e11d48)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">
        <TabSwitcher :tabs="doushiTabs" v-model="activeTab" :theme="themeName" />

        <div class="animate-fade-in min-h-[300px]">
            <div v-if="activeTab !== 'irregular'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                <VerbCard v-for="(verb, index) in paginatedData" :key="index" :verb="verb" :type="activeTab" />
            </div>

            <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <IrregularCard v-for="(verb, index) in paginatedData" :key="index" :verb="verb" />
            </div>
        </div>

        <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 sm:gap-4 mt-10 w-full"
            :style="btnStyle">
            <button @click="currentPage--" :disabled="currentPage === 1"
                class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:shadow-none bg-white cursor-pointer">
                ← <span class="ml-1">Prev</span>
            </button>

            <div class="flex items-center justify-center min-w-[70px] sm:min-w-[120px]">
                <span class="font-black text-slate-800 text-sm sm:text-lg">
                    {{ currentPage }} / {{ totalPages }}
                </span>
            </div>

            <button @click="currentPage++" :disabled="currentPage === totalPages"
                class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:shadow-none bg-[var(--btn-bg)] text-white cursor-pointer">
                <span class="mr-1">Next</span> →
            </button>
        </div>
    </div>
</template>