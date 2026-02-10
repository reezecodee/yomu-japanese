<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import CharModal from '@/components/common/modal/CharModal.vue';
import { computed, ref } from 'vue';
import { seion, dakuten, yoon } from '@/data/hiragana';
import type { CharData } from '@/types';
import CharCard from '@/components/common/card/CharCard.vue';
import { useRoute } from 'vue-router';

const hiraganaTabs = [
    { label: 'Seion (清音)', value: 'seion' },
    { label: 'Dakuten (濁音)', value: 'dakuten' },
    { label: 'Yoon (拗音)', value: 'yoon' }
]

const route = useRoute();
const themeName = computed(() => route.meta.bgClass as string);

const activeTab = ref('seion')

// -- state modal
const isModalOpen = ref(false)
const selectedChar = ref<CharData | null>(null);

const handleCardClick = (char: CharData) => {
    if (char.type === 'empty') return;
    selectedChar.value = char
    isModalOpen.value = true
}
</script>

<template>
    <div class="max-w-5xl mx-auto px-3 sm:px-4 pb-12">
        <TabSwitcher :tabs="hiraganaTabs" v-model="activeTab" :theme="themeName" />

        <div v-show="activeTab === 'seion'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-slate-800 rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_#1e293b] sm:shadow-card">
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in seion" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" :class="{ 'hidden md:block': item.type === 'empty' }" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'dakuten'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-slate-800 rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_#1e293b] sm:shadow-card">
                <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in dakuten" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" :class="{ 'hidden md:block': item.type === 'empty' }" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'yoon'" class="animate-fade-in">
            <div
                class="bg-white border-4 border-slate-800 rounded-2xl sm:rounded-[32px] p-4 sm:p-8 shadow-[6px_6px_0px_#1e293b] sm:shadow-card">
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in yoon" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" :class="{ 'hidden md:block': item.type === 'empty' }" />
                </div>
            </div>
        </div>

        <CharModal :is-open="isModalOpen" :data="selectedChar" :theme="themeName" @close="isModalOpen = false" />
    </div>
</template>