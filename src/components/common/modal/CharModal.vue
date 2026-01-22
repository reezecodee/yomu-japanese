<script setup lang="ts">
import { onMounted, onUnmounted, computed } from 'vue';

interface CharData {
    char: string;
    romaji: string;
    desc?: string;
}

const props = withDefaults(defineProps<{
    isOpen: boolean;
    data: CharData | null;
    theme?: string;
}>(), {
    theme: 'peach'
})

const emit = defineEmits(['close'])

const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.isOpen) {
        emit('close')
    }
}

onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))

const dynamicStyle = computed(() => {
    return {
        '--modal-accent': `var(--color-${props.theme}-accent)`,
        '--modal-bg': `var(--color-${props.theme})`,
    }
})
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
                            class="absolute top-4 right-4 bg-white text-slate-800 w-8 h-8 rounded-full font-bold border-2 border-slate-800 hover:bg-slate-100 transition-colors cursor-pointer">
                            ✕
                        </button>

                        <h2 class="text-8xl font-black text-white drop-shadow-md mt-2">
                            {{ data.char }}
                        </h2>

                        <span
                            class="inline-block bg-white text-[var(--modal-accent)] px-4 py-1 rounded-full font-bold border-2 border-slate-800 -mb-9 relative z-10 shadow-sm text-lg uppercase transition-colors duration-300">
                            {{ data.romaji }}
                        </span>
                    </div>

                    <div class="p-8 pt-10 text-center">

                        <p class="text-slate-400 font-bold uppercase text-xs tracking-widest mb-2">
                            CONTOH KATA
                        </p>

                        <div
                            class="bg-[var(--modal-bg)]/50 p-4 rounded-xl border-2 border-dashed border-[var(--modal-accent)] mb-6 transition-colors duration-300">
                            <p class="text-xl font-bold text-slate-800">
                                {{ data.desc || 'Belum ada contoh' }}
                            </p>
                        </div>

                        <div class="grid grid-cols-2 gap-3">
                            <button
                                class="bg-white border-2 border-slate-200 py-2 rounded-xl font-bold text-slate-500 text-sm hover:border-[var(--modal-accent)] hover:text-[var(--modal-accent)] transition-colors flex justify-center items-center gap-2 group">
                                <span>🔊</span> <span class="group-hover:underline">Audio</span>
                            </button>
                            <button
                                class="bg-white border-2 border-slate-200 py-2 rounded-xl font-bold text-slate-500 text-sm hover:border-[var(--modal-accent)] hover:text-[var(--modal-accent)] transition-colors flex justify-center items-center gap-2 group">
                                <span>✍️</span> <span class="group-hover:underline">Stroke</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active .modal-card {
    animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-fade-leave-active .modal-card {
    animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) reverse;
}

@keyframes popIn {
    0% {
        transform: scale(0.8) translateY(20px);
        opacity: 0;
    }

    100% {
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}
</style>