<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="flex flex-col items-center justify-center mt-10">
        <div class="w-24 h-1 bg-slate-800/10 rounded-full mb-5"></div>

        <div class="text-center">
            <div class="flex justify-center">
                <img src="/public/images/favicon-1.png" width="40" alt="" srcset="">
            </div>

            <p class="text-slate-600 font-black text-xs tracking-[0.2em] uppercase">
                &copy; {{ currentYear }} Azuvicenna Dev
            </p>

            <p class="text-slate-400 font-bold text-[10px] uppercase mt-1 tracking-widest">
                YOMU PROJECT • 日本語を学ぼう
            </p>

            <div class="flex items-center justify-center gap-5 mt-5">
                <a href="https://github.com/azuvicenna" target="_blank" class="group">
                    <svg class="w-5 h-5 fill-slate-400 group-hover:fill-slate-800 transition-colors"
                        viewBox="0 0 24 24">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
            </div>

            <div
                class="flex items-center justify-center gap-3 text-[10px] font-bold tracking-wider uppercase text-slate-400 mt-5">
                <a href="https://github.com/azuvicenna/yomu-japanese/issues" target="_blank"
                    class="hover:text-red-500 hover:underline decoration-2 underline-offset-4 transition-all">
                    Lapor Bug
                </a>
                <span class="text-slate-300">•</span>
                <a href="https://github.com/azuvicenna/yomu-japanese" target="_blank"
                    class="hover:text-green-500 hover:underline decoration-2 underline-offset-4 transition-all">
                    Kontribusi
                </a>
            </div>
        </div>
    </footer>
</template>