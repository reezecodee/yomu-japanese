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
    const base = "font-black uppercase tracking-wider px-6 py-3 rounded-2xl border-[3px] border-slate-800 transition-all duration-200 cursor-pointer";
    const active = "bg-[var(--active-color)] text-white shadow-[2px_2px_0px_#334155] translate-y-[2px] translate-x-[2px]";
    const inactive = "bg-white text-slate-800 shadow-[4px_4px_0px_#334155] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#334155] hover:bg-slate-50";

    return `${base} ${isActive ? active : inactive}`;
}
</script>

<template>
    <div class="flex flex-wrap justify-center gap-4 mb-10" :style="tabStyle">
        <button v-for="tab in tabs" :key="tab.value" @click="emit('update:modelValue', tab.value)"
            :class="getButtonClass(tab.value)">
            {{ tab.label }}
        </button>
    </div>
</template>

<style scoped></style>