<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref } from 'vue';
import { useI18n } from 'vue-i18n'; 
import { playAudio } from '@/utils/audio';
import type { CharData } from '@/types';
import { useSettings } from '@/composables/useSettings';

const props = withDefaults(defineProps<{
    isOpen: boolean;
    data: CharData | null;
    theme?: string;
}>(), {
    theme: 'peach'
})

const emit = defineEmits(['close'])

const { locale } = useI18n();

const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
        emit('close')
    }
}

const isLoading = ref(false);

const handlePlayAudio = (text: string) => {
    if (!text) return;
    isLoading.value = true;
    playAudio(text);
    setTimeout(() => { isLoading.value = false; }, 1000);
}

onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))

const dynamicStyle = computed(() => ({
    '--modal-accent': `var(--color-${props.theme}-accent)`,
    '--modal-bg': `var(--color-${props.theme})`,
}))

const localizedMeaning = computed(() => {
    if (!props.data) return '';
    if (locale.value === 'en') {
        return props.data.meaningEn;
    }
    return props.data.meaningId;
});

const { showRomaji } = useSettings();
</script>

<template>
    <Teleport to="body">
        <Transition name="modal-fade">
            <div v-if="isOpen && data"
                class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm"
                @click="emit('close')">

                <div class="bg-white border-4 border-slate-800 rounded-[32px] w-full max-w-sm overflow-hidden shadow-modal relative modal-card"
                    @click.stop :style="dynamicStyle">

                    <div
                        class="bg-[var(--modal-accent)] p-6 text-center relative border-b-4 border-slate-800 transition-colors duration-300">

                        <button @click="emit('close')"
                            class="absolute top-4 right-4 bg-white text-slate-800 w-8 h-8 rounded-full font-bold border-2 border-slate-800 hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer">
                            ✕
                        </button>

                        <h2 class="text-8xl font-black text-white drop-shadow-md mt-2">
                            {{ data.char }}
                        </h2>

                        <span v-if="showRomaji"
                            class="inline-block bg-white text-[var(--modal-accent)] px-4 py-1 rounded-full font-bold border-2 border-slate-800 -mb-9 relative z-10 shadow-sm text-lg uppercase transition-colors duration-300">
                            {{ data.romaji }}
                        </span>
                    </div>

                    <div class="p-8 pt-10 text-center">
                        <p class="text-slate-400 font-bold uppercase text-xs tracking-widest mb-2">
                            CONTOH PENGGUNAAN
                        </p>

                        <div v-if="data.word"
                            class="bg-[var(--modal-bg)]/50 p-4 rounded-xl border-2 border-dashed border-[var(--modal-accent)] mb-6 transition-colors duration-300 flex flex-col items-center gap-1">

                            <p class="text-3xl font-black text-slate-800">
                                {{ data.word }}
                            </p>

                            <p v-if="showRomaji" class="text-lg font-bold text-[var(--modal-accent)]">
                                {{ data.wordRomaji }}
                            </p>

                            <div class="mt-2 text-sm border-t border-slate-800/10 pt-2 w-full">
                                <p class="text-slate-800 font-bold leading-tight text-lg">
                                    {{ localizedMeaning }}
                                </p>
                            </div>
                        </div>

                        <div v-else class="text-slate-400 italic mb-6">
                            Belum ada contoh kata.
                        </div>

                        <div class="flex justify-center w-full">
                            <button @click.stop="handlePlayAudio(data.word)" :disabled="isLoading || !data.word"
                                class="bg-white border-2 border-slate-200 py-3 px-8 rounded-xl font-bold text-slate-500 text-sm hover:border-[var(--modal-accent)] hover:text-[var(--modal-accent)] transition-all flex justify-center items-center gap-2 group active:scale-95 shadow-sm w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">

                                <span v-if="isLoading" class="animate-spin text-lg">⏳</span>
                                <span v-else class="text-lg">🔊</span>

                                <span class="group-hover:underline">
                                    {{ isLoading ? 'Memuat...' : 'Dengarkan Kata' }}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-fade-enter-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-active .modal-card {
    animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-fade-leave-active {
    transition: opacity 0.15s ease;
}

.modal-fade-leave-active .modal-card {
    animation: popIn 0.15s ease-in reverse;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

/* Keyframes Pop In */
@keyframes popIn {
    0% {
        transform: scale(0.9) translateY(20px);
        opacity: 0;
    }
    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}
</style>