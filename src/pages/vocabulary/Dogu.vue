<script setup lang="ts">
import MenuCard from '@/components/common/card/MenuCard.vue';
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { carpentryTools, cleaningTools, gardeningTools } from '@/data/dogu';

const toolTabs = [
    { label: 'Pertukangan (Kōgu)', value: 'carpentry' },
    { label: 'Kebersihan (Sōji)', value: 'cleaning' },
    { label: 'Berkebun (Engei)', value: 'gardening' },
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string || 'orange');
const activeTab = ref<'carpentry' | 'cleaning' | 'gardening'>('carpentry');

// --- LOGIC PAGINATION ---
const currentPage = ref(1);
const itemsPerPage = 8;

const currentData = computed(() => {
    if (activeTab.value === 'carpentry') return carpentryTools;
    if (activeTab.value === 'cleaning') return cleaningTools;
    return gardeningTools;
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
    '--btn-bg': `var(--color-orange-accent, #f97316)`,
}));
</script>

<template>
    <div class="max-w-6xl mx-auto px-3 sm:px-4 pb-12">

        <TabSwitcher :tabs="toolTabs" v-model="activeTab" :theme="themeName" class="mb-6" />

        <div class="animate-fade-in">
            <div
                class="bg-white border-4 border-orange-accent rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_var(--color-orange-accent)] sm:shadow-[8px_8px_0px_var(--color-orange-accent)]">

                <h2
                    class="text-xl sm:text-3xl font-black text-orange-accent mb-4 sm:mb-6 border-b-2 border-orange-200 pb-2">
                    <span v-if="activeTab === 'carpentry'">Alat Pertukangan 🛠️</span>
                    <span v-else-if="activeTab === 'cleaning'">Alat Kebersihan 🧹</span>
                    <span v-else>Alat Berkebun 🪴</span>
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
    </div>
</template>