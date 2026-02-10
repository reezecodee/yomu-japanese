<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { I_AdjectivePairs, Na_AdjectivePairs } from '@/data/keiyoushi';
import { useRoute } from 'vue-router';
import AdjectiveCard from '@/components/common/card/AdjectiveCard.vue';
import { usePagination } from '@/composables/usePagination';

const activeTab = ref<'i' | 'na'>('i');

const keiyoushiTabs = [
    { label: 'I-Keiyoushi (イ形容詞)', value: 'i' },
    { label: 'Na-Keiyoushi (ナ形容詞)', value: 'na' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const currentData = computed(() => {
    return activeTab.value === 'i' ? I_AdjectivePairs : Na_AdjectivePairs;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-${themeName.value}-accent, #10b981)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">
        <TabSwitcher :tabs="keiyoushiTabs" v-model="activeTab" :theme="themeName" />

        <div class="animate-fade-in min-h-[300px]">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <AdjectiveCard v-for="(pair, index) in paginatedData" :key="activeTab + '-' + index" :pair="pair"
                    :group="activeTab" />
            </div>
        </div>

        <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 sm:gap-4 mt-10 w-full"
            :style="btnStyle">
            <button @click="currentPage--" :disabled="currentPage === 1"
                class="flex-1 sm:flex-none px-4 sm:px-8 py-2.5 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:shadow-none bg-white cursor-pointer text-sm">
                ← <span class="ml-1">Prev</span>
            </button>

            <div class="flex items-center justify-center min-w-[70px] sm:min-w-[120px]">
                <span class="font-black text-slate-800 text-sm sm:text-lg">
                    {{ currentPage }} / {{ totalPages }}
                </span>
            </div>

            <button @click="currentPage++" :disabled="currentPage === totalPages"
                class="flex-1 sm:flex-none px-4 sm:px-8 py-2.5 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:shadow-none bg-[var(--btn-bg)] text-white cursor-pointer text-sm">
                <span class="mr-1">Next</span> →
            </button>
        </div>
    </div>
</template>