<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePagination } from '@/composables/usePagination';
import {
    HomeItems,
    SchoolItems,
    NatureItems,
    HospitalItems,
    SportItems,
    RestaurantItems
} from '@/data/mono';

const monoTabs = [
    { label: 'Ie (家)', value: 'home' },
    { label: 'Gakkou (学校)', value: 'school' },
    { label: 'Shizen (自然)', value: 'nature' },
    { label: 'Byouin (病院)', value: 'hospital' },
    { label: 'Supōtsu (スポーツ)', value: 'sport' },
    { label: 'Resutoran (レストラン)', value: 'restaurant' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'home' | 'school' | 'nature' | 'hospital' | 'sport' | 'restaurant'>('home');

const currentData = computed(() => {
    if (activeTab.value === 'home') return HomeItems;
    if (activeTab.value === 'school') return SchoolItems;
    if (activeTab.value === 'nature') return NatureItems;
    if (activeTab.value === 'hospital') return HospitalItems;
    if (activeTab.value === 'sport') return SportItems;
    return RestaurantItems;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-${themeName.value}-accent, #6366f1)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="monoTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-ghost-accent rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_theme('colors.ghost-accent')] sm:shadow-[8px_8px_0px_theme('colors.ghost-accent')]">

                <h2
                    class="text-xl sm:text-3xl font-black text-ghost-accent mb-4 sm:mb-6 border-b-2 border-ghost-200 pb-2">
                    <span v-if="activeTab === 'home'">Benda di Rumah 🏠</span>
                    <span v-else-if="activeTab === 'school'">Benda di Sekolah 🏫</span>
                    <span v-else-if="activeTab === 'nature'">Alam & Lingkungan 🌳</span>
                    <span v-else-if="activeTab === 'hospital'">Fasilitas Medis 🏥</span>
                    <span v-else-if="activeTab === 'sport'">Alat Olahraga ⚽</span>
                    <span v-else>Restoran & Makanan 🍱</span>
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
                class="bg-ghost-accent text-white p-5 rounded-2xl border-4 border-ghost-dark shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">📦</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Tsu (つ)</h4>
                    <p class="text-indigo-100 font-bold text-xs sm:text-sm">Satuan benda umum (Hitotsu, Futatsu)</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-5 rounded-2xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">🍎</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Ko (個)</h4>
                    <p class="text-slate-300 font-bold text-xs sm:text-sm">Benda kecil bulat (Apel, Telur)</p>
                </div>
            </div>

            <div
                class="bg-white text-ghost-dark p-5 rounded-2xl border-4 border-ghost-dark shadow-card flex items-center gap-4">
                <div class="text-4xl shrink-0">📄</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Mai (枚)</h4>
                    <p class="text-slate-500 font-bold text-xs sm:text-sm">Benda tipis (Kertas, Piring, Baju)</p>
                </div>
            </div>
        </div>

    </div>
</template>