<script setup lang="ts">
import TabSwitcher from '@/components/common/nav/TabSwitcher.vue';
import CharModal from '@/components/common/modal/CharModal.vue';
import { computed, ref } from 'vue';
import { seion, dakuten, yoon, tokushuon } from '@/data/katakana';
import type { CharData } from '@/types/Kana';
import CharCard from '@/components/common/card/CharCard.vue';
import { useRoute } from 'vue-router';

const katakanaTabs = [
    { label: 'Seion', value: 'seion' },
    { label: 'Dakuten', value: 'dakuten' },
    { label: 'Yoon', value: 'yoon' },
    { label: 'Tokushuon', value: 'tokushuon' }
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
    <div class="max-w-5xl mx-auto px-4">
        <TabSwitcher :tabs="katakanaTabs" v-model="activeTab" :theme="themeName" />

        <div v-show="activeTab === 'seion'" class="animate-fade-in">
            <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
                <div class="grid grid-cols-5 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in seion" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'dakuten'" class="animate-fade-in">
            <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
                <div class="grid grid-cols-5 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in dakuten" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'yoon'" class="animate-fade-in">
            <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
                <div class="grid grid-cols-3 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in yoon" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" />
                </div>
            </div>
        </div>

        <div v-show="activeTab === 'tokushuon'" class="animate-fade-in">
            <div class="bg-white border-4 border-slate-800 rounded-[32px] p-6 md:p-8 shadow-card">
                <div class="grid grid-cols-4 gap-3 md:gap-4">
                    <CharCard v-for="(item, index) in tokushuon" :key="index" :data="item" :theme="themeName"
                        @click="handleCardClick(item)" />
                </div>
            </div>
        </div>

        <CharModal :is-open="isModalOpen" :data="selectedChar" :theme="themeName" @close="isModalOpen = false" />
    </div>
</template>