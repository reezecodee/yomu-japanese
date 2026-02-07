import { createI18n } from "vue-i18n";
import id from "@/locales/id.json";
import en from "@/locales/en.json";
import ja from "@/locales/ja.json";

const savedLocale = localStorage.getItem("user-locale") || "id";

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: "en",
  globalInjection: true,
  messages: {
    id,
    en,
    ja,
  },
});

export default i18n;
