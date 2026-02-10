<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePagination } from '@/composables/usePagination';
import { ShoujouItems, DiseaseItems, KegaItems } from '@/data/byouki';

const diseaseTabs = [
    { label: 'Byouki (病気)', value: 'byouki' },
    { label: 'Shoujou (症状)', value: 'shoujou' },
    { label: 'Kega (怪我)', value: 'injuries' },
]

const route = useRoute();
const themeName = computed(() => (route.meta.bgClass as string) || 'rose');
const activeTab = ref<'byouki' | 'shoujou' | 'injuries'>('byouki');

const currentData = computed(() => {
    if (activeTab.value === 'byouki') return DiseaseItems;
    if (activeTab.value === 'shoujou') return ShoujouItems;
    return KegaItems;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-${themeName.value}-accent, #f43f5e)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="diseaseTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div class="bg-white border-4 rounded-2xl sm:rounded-[32px] p-4 sm:p-8 transition-colors duration-300"
                :class="[
                    `border-${themeName}-accent`,
                    `shadow-[6px_6px_0px_var(--color-${themeName}-accent)] sm:shadow-[8px_8px_0px_var(--color-${themeName}-accent)]`
                ]" :style="{ '--color-rose-accent': '#f43f5e', '--color-amber-accent': '#f59e0b' }">

                <h2 class="text-xl sm:text-3xl font-black mb-4 sm:mb-6 border-b-2 pb-2"
                    :class="`text-${themeName}-accent border-${themeName}-200`">
                    <span v-if="activeTab === 'byouki'">Nama Penyakit 🩺</span>
                    <span v-else-if="activeTab === 'shoujou'">Gejala Umum 😷</span>
                    <span v-else>Cedera & Luka 🤕</span>
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <MenuCard v-for="(item, i) in paginatedData" :key="activeTab + currentPage + i" :item="item"
                        :theme="themeName" />
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
                class="bg-rose-500 text-white p-5 rounded-2xl border-4 border-rose-700 shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">💥</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Tsuu (痛)</h4>
                    <p class="text-rose-100 font-bold text-xs sm:text-sm">Akhiran untuk rasa nyeri (Zutsuu, Fukutsuu)
                    </p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-5 rounded-2xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🦠</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Byou (病)</h4>
                    <p class="text-slate-300 font-bold text-xs sm:text-sm">Akhiran nama penyakit (Tounyoubyou)</p>
                </div>
            </div>

            <div
                class="bg-white text-rose-600 p-5 rounded-2xl border-4 border-rose-600 shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🩹</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Shou (傷/症)</h4>
                    <p class="text-slate-500 font-bold text-xs sm:text-sm">Luka (Resshou) atau Gejala (Fuminshou)</p>
                </div>
            </div>
        </div>

    </div>
</template>