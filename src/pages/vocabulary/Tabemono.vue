<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePagination } from '@/composables/usePagination';
import { FoodItems, DrinkItems, TasteItems } from '@/data/tabemono';

const tabemonoTabs = [
    { label: 'Tabemono (食べ物)', value: 'tabemono' },
    { label: 'Nomimono (飲み物)', value: 'nomimono' },
    { label: 'Aji (味)', value: 'aji' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'tabemono' | 'nomimono' | 'aji'>('tabemono');

const currentData = computed(() => {
    if (activeTab.value === 'tabemono') return FoodItems;
    if (activeTab.value === 'nomimono') return DrinkItems;
    return TasteItems;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-apricot-dark, #fb923c)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="tabemonoTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-apricot-dark rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_var(--color-apricot-dark)] sm:shadow-[8px_8px_0px_var(--color-apricot-dark)]">

                <h2
                    class="text-xl sm:text-3xl font-black text-apricot-dark mb-4 sm:mb-6 border-b-2 border-orange-100 pb-2 capitalize">
                    {{ activeTab === 'aji' ? 'Rasa (Aji)' : `Menu ${activeTab}` }}
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <MenuCard v-for="(item, i) in paginatedData" :key="activeTab + i" :item="item" :theme="themeName" />
                </div>

                <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 sm:gap-4 mt-8 w-full"
                    :style="btnStyle">

                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed bg-white text-slate-800 cursor-pointer">
                        ← <span class="ml-1">Prev</span>
                    </button>

                    <div class="flex items-center justify-center min-w-[70px] sm:min-w-[120px]">
                        <span class="font-black text-slate-800 text-sm sm:text-lg">
                            {{ currentPage }} / {{ totalPages }}
                        </span>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed bg-[var(--btn-bg)] text-white cursor-pointer">
                        <span class="mr-1">Next</span> →
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
                class="bg-apricot-accent text-white p-5 rounded-3xl border-4 border-apricot-dark shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🙏</div>
                <div>
                    <h4 class="font-black text-xl">Itadakimasu</h4>
                    <p class="text-orange-100 font-bold text-sm">Diucapkan SEBELUM makan</p>
                </div>
            </div>
            <div
                class="bg-slate-800 text-white p-5 rounded-3xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">😌</div>
                <div>
                    <h4 class="font-black text-xl">Gochisousama</h4>
                    <p class="text-slate-300 font-bold text-sm">Diucapkan SETELAH makan</p>
                </div>
            </div>
        </div>

    </div>
</template>