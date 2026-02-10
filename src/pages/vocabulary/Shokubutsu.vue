<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { usePagination } from '@/composables/usePagination';
import { Trees, Flowers, Herbs, NatureParts } from '@/data/shokubutsu';

const plantTabs = [
    { label: 'Ki (木)', value: 'trees' },
    { label: 'Hana (花)', value: 'flowers' },
    { label: 'Yakusou・Supaisu (薬草・スパイス)', value: 'herbs' },
    { label: 'Shizen・Bubun (自然・部分)', value: 'parts' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);
const activeTab = ref<'trees' | 'flowers' | 'herbs' | 'parts'>('trees');

const currentData = computed(() => {
    if (activeTab.value === 'trees') return Trees;
    if (activeTab.value === 'flowers') return Flowers;
    if (activeTab.value === 'herbs') return Herbs;
    return NatureParts;
});

const {
    currentPage,
    paginatedData,
    totalPages,
    nextPage,
    prevPage
} = usePagination(currentData, 8);

const btnStyle = computed(() => ({
    '--btn-bg': `var(--color-forest-accent, #10b981)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="plantTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-forest-accent rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_theme('colors.forest-accent')] sm:shadow-[8px_8px_0px_theme('colors.forest-accent')]">

                <h2
                    class="text-xl sm:text-3xl font-black text-forest-accent mb-4 sm:mb-6 border-b-2 border-green-100 pb-2">
                    <span v-if="activeTab === 'trees'">Pohon & Hutan 🌳</span>
                    <span v-else-if="activeTab === 'flowers'">Bunga-bungaan 🌻</span>
                    <span v-else-if="activeTab === 'herbs'">Herbal & Rempah 🫚</span>
                    <span v-else>Bagian Tanaman & Alam 🌿</span>
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
                class="bg-forest-accent text-white p-5 rounded-2xl border-4 border-green-900 shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🌳</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Hon (本)</h4>
                    <p class="text-green-100 font-bold text-xs sm:text-sm">Pohon (benda panjang).</p>
                    <p class="text-[10px] sm:text-xs text-green-200 mt-1 italic">Ki ga ip<b>pon</b> arimasu.</p>
                </div>
            </div>

            <div
                class="bg-slate-800 text-white p-5 rounded-2xl border-4 border-slate-900 shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🌻</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">~Rin (輪)</h4>
                    <p class="text-slate-300 font-bold text-xs sm:text-sm">Satuan bunga mekar.</p>
                    <p class="text-[10px] sm:text-xs text-slate-400 mt-1 italic">Bisa pakai ~Hon untuk tangkai.</p>
                </div>
            </div>

            <div
                class="bg-white text-forest-accent p-5 rounded-2xl border-4 border-forest-accent shadow-card flex items-center gap-4">
                <div class="text-3xl sm:text-4xl shrink-0">🎍</div>
                <div>
                    <h4 class="font-black text-lg sm:text-xl leading-tight">Kabin (花瓶)</h4>
                    <p class="text-slate-500 font-bold text-xs sm:text-sm">Vas Bunga.</p>
                    <p class="text-[10px] sm:text-xs text-slate-400 mt-1 italic">Kabin ni hana o iremasu.</p>
                </div>
            </div>
        </div>

    </div>
</template>