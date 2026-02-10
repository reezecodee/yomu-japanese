<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePagination } from '@/composables/usePagination';
import { LandAnimals, WaterAnimals, FlyingAnimals } from '@/data/doubutsu';

const animalTabs = [
    { label: 'Riku (陸)', value: 'land' },
    { label: 'Mizu (水)', value: 'water' },
    { label: 'Sora (空)', value: 'air' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'land' | 'water' | 'air'>('land');

const currentData = computed(() => {
    if (activeTab.value === 'land') return LandAnimals;
    if (activeTab.value === 'water') return WaterAnimals;
    return FlyingAnimals;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-safari-accent, #10b981)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="animalTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-safari-accent rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_theme('colors.safari-accent')] sm:shadow-[8px_8px_0px_theme('colors.safari-accent')]">

                <h2
                    class="text-xl sm:text-3xl font-black text-safari-accent mb-4 sm:mb-6 border-b-2 border-safari pb-2">
                    <span v-if="activeTab === 'land'">Hewan Darat 🐕</span>
                    <span v-else-if="activeTab === 'water'">Hewan Air 🐟</span>
                    <span v-else>Burung & Serangga 🦋</span>
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

        <div class="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-safari-accent text-white p-5 rounded-2xl border-4 border-safari-dark shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🐕</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Hiki (匹)</h4>
                    <p class="text-orange-100 font-bold text-xs sm:text-sm">Hewan kecil (Kucing, Ikan)</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-5 rounded-2xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🐘</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Tou (頭)</h4>
                    <p class="text-slate-300 font-bold text-xs sm:text-sm">Hewan besar (Gajah, Sapi)</p>
                </div>
            </div>

            <div
                class="bg-white text-safari-dark p-5 rounded-2xl border-4 border-safari-dark shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🐦</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Wa (羽)</h4>
                    <p class="text-slate-500 font-bold text-xs sm:text-sm">Hewan bersayap/burung</p>
                </div>
            </div>
        </div>

    </div>
</template>