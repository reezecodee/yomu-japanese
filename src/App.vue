<script setup lang="ts">
import LanguageDrawer from '@/components/common/nav/LanguageDrawer.vue';
import SettingsDrawer from './components/common/nav/SettingsDrawer.vue';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const isLangOpen = ref(false);

const { t, locale } = useI18n();
const route = useRoute();
const DEFAULT_TITLE = "Yomu Japanese";

const updateDocumentTitle = () => {
  const titleKey = route.meta.title as string;

  if (titleKey) {
    const translatedTitle = t(titleKey);
    document.title = `${translatedTitle} - ${DEFAULT_TITLE}`;
  } else {
    document.title = DEFAULT_TITLE;
  }
};

watch(locale, () => {
  updateDocumentTitle();
});

watch(
  () => route.path,
  () => {
    updateDocumentTitle();
  }
);
</script>

<template>
  <div class="fixed top-32 right-0 z-50 flex flex-col items-end gap-1 pointer-events-none">

    <LanguageDrawer @toggle="(val) => isLangOpen = val" />
    <SettingsDrawer v-show="!isLangOpen" />

  </div>
  <router-view></router-view>
</template>

<style scoped></style>
