<script setup lang="ts">
import LanguageDrawer from '@/components/common/nav/LanguageDrawer.vue';
import SettingsDrawer from './components/common/nav/SettingsDrawer.vue';
import { ref } from 'vue';

const isLangOpen = ref(false);
</script>

<template>
  <div class="fixed top-32 right-0 z-50 flex flex-col items-end gap-1 pointer-events-none">
    
    <LanguageDrawer @toggle="(val) => isLangOpen = val" />
    <SettingsDrawer v-show="!isLangOpen" />
    
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
