<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { CommonFruits, SeasonalFruits, Vegetables } from '@/data/kudamono';

const foodTabs = [
    { label: 'Buah Umum', value: 'common' },
    { label: 'Musiman & Berry', value: 'seasonal' },
    { label: 'Sayuran (Yasai)', value: 'vegetables' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'common' | 'seasonal' | 'vegetables'>('common');

// --- LOGIC PAGINATION (STANDAR BOS) ---
const currentPage = ref(1);
const itemsPerPage = 8;

const currentData = computed(() => {
    if (activeTab.value === 'common') return CommonFruits;
    if (activeTab.value === 'seasonal') return SeasonalFruits;
    return Vegetables;
});

const totalPages = computed(() => Math.ceil(currentData.value.length / itemsPerPage));

const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return currentData.value.slice(start, end);
});

watch(activeTab, () => {
    currentPage.value = 1;
});

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-berry-accent, #db2777)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="foodTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-berry-accent rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_theme('colors.berry-accent')] sm:shadow-[8px_8px_0px_theme('colors.berry-accent')]">

                <h2
                    class="text-xl sm:text-3xl font-black text-berry-accent mb-4 sm:mb-6 border-b-2 border-pink-100 pb-2">
                    <span v-if="activeTab === 'common'">Buah Umum 🍎</span>
                    <span v-else-if="activeTab === 'seasonal'">Musiman & Berries 🍓</span>
                    <span v-else>Sayuran (Yasai) 🥕</span>
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <MenuCard v-for="(item, i) in paginatedData" :key="activeTab + i" :item="item" :theme="themeName" />
                </div>

                <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 sm:gap-4 mt-8 w-full"
                    :style="btnStyle">

                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed bg-white text-slate-800 cursor-pointer text-sm sm:text-base">
                        ← <span>Prev</span>
                    </button>

                    <div class="flex items-center justify-center min-w-[70px] sm:min-w-[120px]">
                        <span class="font-black text-slate-800 text-sm sm:text-lg">
                            {{ currentPage }} / {{ totalPages }}
                        </span>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed bg-[var(--btn-bg)] text-white cursor-pointer text-sm sm:text-base">
                        <span>Next</span> →
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-berry-accent text-white p-5 rounded-2xl border-4 border-pink-900 shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🍎</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Ko (個)</h4>
                    <p class="text-pink-100 font-bold text-xs sm:text-sm">Benda bulat kecil (Apel, Jeruk).</p>
                    <p class="text-[10px] sm:text-xs text-pink-200 mt-1 italic">Ringo ga ik<b>ko</b> arimasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-5 rounded-2xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🍌</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Hon (本)</h4>
                    <p class="text-slate-300 font-bold text-xs sm:text-sm">Benda panjang (Pisang, Wortel).</p>
                    <p class="text-[10px] sm:text-xs text-slate-400 mt-1 italic">Banana ga nip<b>pon</b> arimasu.</p>
                </div>
            </div>

            <div
                class="bg-white text-berry-accent p-5 rounded-2xl border-4 border-berry-accent shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🥬</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Mai (枚)</h4>
                    <p class="text-slate-500 font-bold text-xs sm:text-sm">Benda tipis/lembaran.</p>
                    <p class="text-[10px] sm:text-xs text-slate-400 mt-1 italic">Kyabetsu no ha (Daun kubis).</p>
                </div>
            </div>
        </div>

    </div>
</template>