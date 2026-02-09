import { ref, watch } from 'vue';

const showFurigana = ref(false);
const showRomaji = ref(true);

const initSettings = () => {
  const savedFurigana = localStorage.getItem('setting-furigana');
  const savedRomaji = localStorage.getItem('setting-romaji');

  if (savedFurigana !== null) showFurigana.value = JSON.parse(savedFurigana);
  if (savedRomaji !== null) showRomaji.value = JSON.parse(savedRomaji);
};

initSettings();

watch(showFurigana, (val) => localStorage.setItem('setting-furigana', JSON.stringify(val)));
watch(showRomaji, (val) => localStorage.setItem('setting-romaji', JSON.stringify(val)));

export function useSettings() {
  return {
    showFurigana,
    showRomaji
  };
}