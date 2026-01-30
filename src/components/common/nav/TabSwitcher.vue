<script setup lang="ts">
import { computed } from 'vue';

interface TabItem {
    label: string;
    value: string;
}

const props = withDefaults(defineProps<{
    tabs: TabItem[];
    modelValue: string;
    theme?: string;
}>(), {
    theme: 'peach'
})

const emit = defineEmits(['update:modelValue']);

const tabStyle = computed(() => {
    return {
        '--active-color': `var(--color-${props.theme}-accent)`
    }
})

const getButtonClass = (tabValue: string) => {
    const isActive = props.modelValue === tabValue;

    // PERUBAHAN RESPONSIVE DI SINI:
    // 1. text-sm sm:text-base -> Font kecil di HP, normal di PC
    // 2. px-3 py-2 sm:px-6 sm:py-3 -> Padding kecil di HP
    // 3. flex-1 sm:flex-none -> Di HP tombol melar rata kanan-kiri, di PC ikut panjang teks
    // 4. min-w-[100px] -> Agar di HP tidak terlalu gepeng jika teksnya pendek

    const base = "flex-1 sm:flex-none min-w-[100px] text-center font-black uppercase tracking-wider text-sm sm:text-base px-3 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl border-[3px] border-slate-800 transition-all duration-200 cursor-pointer select-none";

    const active = "bg-[var(--active-color)] text-white shadow-[2px_2px_0px_#334155] translate-y-[2px] translate-x-[2px]";

    const inactive = "bg-white text-slate-800 shadow-[3px_3px_0px_#334155] sm:shadow-[4px_4px_0px_#334155] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[5px_5px_0px_#334155] sm:hover:shadow-[6px_6px_0px_#334155] hover:bg-slate-50";

    return `${base} ${isActive ? active : inactive}`;
}
</script>

<template>
    <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 w-full" :style="tabStyle">
        <button v-for="tab in tabs" :key="tab.value" @click="emit('update:modelValue', tab.value)"
            :class="getButtonClass(tab.value)">
            {{ tab.label }}
        </button>
    </div>
</template>

<style scoped></style>