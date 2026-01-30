<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { PublicBuildings, Shops, Housing } from '@/data/tatemono';

const buildingTabs = [
    { label: 'Fasilitas (Shisetsu)', value: 'public' },
    { label: 'Toko (Mise)', value: 'shops' },
    { label: 'Rumah (Ie)', value: 'housing' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'public' | 'shops' | 'housing'>('public');

// --- LOGIC PAGINATION (STANDAR BOS) ---
const currentPage = ref(1);
const itemsPerPage = 8;

const currentData = computed(() => {
    if (activeTab.value === 'public') return PublicBuildings;
    if (activeTab.value === 'shops') return Shops;
    return Housing;
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
    '--btn-bg': `var(--color-concrete-accent, #64748b)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="buildingTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-concrete-accent rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_theme('colors.concrete-accent')] sm:shadow-[8px_8px_0px_theme('colors.concrete-accent')]">

                <h2
                    class="text-xl sm:text-3xl font-black text-concrete-accent mb-4 sm:mb-6 border-b-2 border-slate-100 pb-2">
                    <span v-if="activeTab === 'public'">Fasilitas Umum 🏫</span>
                    <span v-else-if="activeTab === 'shops'">Toko & Komersial 🛒</span>
                    <span v-else>Rumah & Ruangan 🏠</span>
                </h2>

                <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <MenuCard v-for="(item, i) in paginatedData" :key="activeTab + i" :item="item" :theme="themeName" />
                </div>

                <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 sm:gap-4 mt-8 w-full"
                    :style="btnStyle">

                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed bg-white text-slate-800 cursor-pointer text-sm sm:text-base whitespace-nowrap">
                        ← <span>Prev</span>
                    </button>

                    <div class="flex items-center justify-center min-w-[70px] sm:min-w-[120px]">
                        <span class="font-black text-slate-800 text-sm sm:text-lg">
                            {{ currentPage }} / {{ totalPages }}
                        </span>
                    </div>

                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="flex-1 sm:flex-none px-4 sm:px-8 py-2 rounded-xl font-bold border-2 border-slate-800 shadow-[4px_4px_0px_#1e293b] active:translate-y-1 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed bg-[var(--btn-bg)] text-white cursor-pointer text-sm sm:text-base whitespace-nowrap">
                        <span>Next</span> →
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
                class="bg-concrete-accent text-white p-5 rounded-2xl border-4 border-slate-700 shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">📍</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">Partikel NI</h4>
                    <p class="text-slate-200 font-bold text-xs sm:text-sm">Keberadaan (Ada di...).</p>
                    <p class="text-[10px] sm:text-xs text-slate-300 mt-1 italic">Gakkou <b>ni</b> imasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-5 rounded-2xl border-4 border-black shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🏃</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">Partikel DE</h4>
                    <p class="text-slate-300 font-bold text-xs sm:text-sm">Aksi di tempat.</p>
                    <p class="text-[10px] sm:text-xs text-slate-400 mt-1 italic">Gakkou <b>de</b> benkyou shimasu.</p>
                </div>
            </div>

            <div
                class="bg-white text-concrete-accent p-5 rounded-2xl border-4 border-concrete-accent shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">👉</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">Partikel E</h4>
                    <p class="text-slate-500 font-bold text-xs sm:text-sm">Tujuan (Ke...).</p>
                    <p class="text-[10px] sm:text-xs text-slate-400 mt-1 italic">Gakkou <b>e</b> ikimasu.</p>
                </div>
            </div>
        </div>

    </div>
</template>