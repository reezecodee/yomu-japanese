import { computed } from "vue";
import { useI18n } from "vue-i18n";

export function useMenu() {
  const { t } = useI18n();

  const menuItems = computed(() => [
    // ==========================================
    // SECTION 1: HURUF & ANGKA
    // ==========================================
    {
      to: "/kana/hiragana",
      icon: "あ",
      title: t("navMenu.hiragana.title"),
      desc: t("navMenu.hiragana.desc"),
      tag: t("navMenu.hiragana.tag"),
      hoverColor: "var(--color-peach-accent)",
      theme: "rose",
    },
    {
      to: "/kana/katakana",
      icon: "ア",
      title: t("navMenu.katakana.title"),
      desc: t("navMenu.katakana.desc"),
      tag: t("navMenu.katakana.tag"),
      hoverColor: "var(--color-ice-accent)",
      theme: "teal",
    },
    {
      to: "/kana/kanji",
      icon: "山",
      title: t("navMenu.kanji.title"),
      desc: t("navMenu.kanji.desc"),
      tag: t("navMenu.kanji.tag"),
      hoverColor: "var(--color-lavender-accent)",
      theme: "violet",
    },
    {
      to: "/kana/suuji",
      icon: "123",
      title: t("navMenu.number.title"),
      desc: t("navMenu.number.desc"),
      tag: t("navMenu.number.tag"),
      hoverColor: "var(--color-vanilla-accent)",
      theme: "amber",
    },

    // ==========================================
    // SECTION 2: KOSAKATA
    // ==========================================
    {
      to: "/vocabulary/kotoba",
      icon: "🍱",
      title: t("navMenu.kotoba.title"),
      desc: t("navMenu.kotoba.desc"),
      tag: t("navMenu.kotoba.tag"),
      hoverColor: "var(--color-indigo-accent)",
      theme: "indigo",
    },
    {
      to: "/vocabulary/doushi",
      icon: "🏃",
      title: t("navMenu.doushi.title"),
      desc: t("navMenu.doushi.desc"),
      tag: t("navMenu.doushi.tag"),
      hoverColor: "var(--color-rose-accent)",
      theme: "pink",
    },
    {
      to: "/vocabulary/keiyoushi",
      icon: "✨",
      title: t("navMenu.keiyoushi.title"),
      desc: t("navMenu.keiyoushi.desc"),
      tag: t("navMenu.keiyoushi.tag"),
      hoverColor: "var(--color-aqua-accent)",
      theme: "cyan",
    },
    {
      to: "/vocabulary/mono",
      icon: "📦",
      title: t("navMenu.mono.title"),
      desc: t("navMenu.mono.desc"),
      tag: t("navMenu.mono.tag"),
      hoverColor: "var(--color-ghost-accent)",
      theme: "zinc",
    },
    {
      to: "/vocabulary/shigoto",
      icon: "💼",
      title: t("navMenu.shigoto.title"),
      desc: t("navMenu.shigoto.desc"),
      tag: t("navMenu.shigoto.tag"),
      hoverColor: "var(--color-surface-accent)",
      theme: "blue",
    },
    {
      to: "/vocabulary/tabemono",
      icon: "🍜",
      title: t("navMenu.tabemono.title"),
      desc: t("navMenu.tabemono.desc"),
      tag: t("navMenu.tabemono.tag"),
      hoverColor: "var(--color-apricot-accent)",
      theme: "orange",
    },
    {
      to: "/vocabulary/doubutsu",
      icon: "🐯",
      title: t("navMenu.doubutsu.title"),
      desc: t("navMenu.doubutsu.desc"),
      tag: t("navMenu.doubutsu.tag"),
      hoverColor: "var(--color-safari-accent)",
      theme: "lime",
    },
    {
      to: "/vocabulary/norimono",
      icon: "🚄",
      title: t("navMenu.norimono.title"),
      desc: t("navMenu.norimono.desc"),
      tag: t("navMenu.norimono.tag"),
      hoverColor: "var(--color-metro-accent)",
      theme: "fuchsia",
    },
    {
      to: "/vocabulary/tatemono",
      icon: "🏢",
      title: t("navMenu.tatemono.title"),
      desc: t("navMenu.tatemono.desc"),
      tag: t("navMenu.tatemono.tag"),
      hoverColor: "var(--color-concrete-accent)",
      theme: "stone",
    },
    {
      to: "/vocabulary/kudamono",
      icon: "🍓",
      title: t("navMenu.kudamono.title"),
      desc: t("navMenu.kudamono.desc"),
      tag: t("navMenu.kudamono.tag"),
      hoverColor: "var(--color-berry-accent)",
      theme: "red",
    },
    {
      to: "/vocabulary/shokubutsu",
      icon: "🌿",
      title: t("navMenu.shokubutsu.title"),
      desc: t("navMenu.shokubutsu.desc"),
      tag: t("navMenu.shokubutsu.tag"),
      hoverColor: "var(--color-forest-accent)",
      theme: "emerald",
    },
    {
      to: "/vocabulary/byouki",
      icon: "🤒",
      title: t("navMenu.byouki.title"),
      desc: t("navMenu.byouki.desc"),
      tag: t("navMenu.byouki.tag"),
      hoverColor: "var(--color-rose-accent)",
      theme: "rose",
    },
    {
      to: "/vocabulary/dogu",
      icon: "🛠️",
      title: t("navMenu.dogu.title"),
      desc: t("navMenu.dogu.desc"),
      tag: t("navMenu.dogu.tag"),
      hoverColor: "var(--color-orange-accent)",
      theme: "orange",
    },

    // ==========================================
    // SECTION 3: GRAMMAR
    // ==========================================
    {
      to: "/grammar/bunpou",
      icon: "🏗️",
      title: t("navMenu.bunpou.title"),
      desc: t("navMenu.bunpou.desc"),
      tag: t("navMenu.bunpou.tag"),
      hoverColor: "var(--color-cool-dark)",
      theme: "slate",
    },
    {
      to: "/grammar/joshi",
      icon: "🔗",
      title: t("navMenu.joshi.title"),
      desc: t("navMenu.joshi.desc"),
      tag: t("navMenu.joshi.tag"),
      hoverColor: "var(--color-mint-accent)",
      theme: "green",
    },
    {
      to: "/grammar/aisatsu",
      icon: "💬",
      title: t("navMenu.aisatsu.title"),
      desc: t("navMenu.aisatsu.desc"),
      tag: t("navMenu.aisatsu.tag"),
      hoverColor: "var(--color-sky-accent)",
      theme: "sky",
    },
    {
      to: "/grammar/kanyouku",
      icon: "📜",
      title: t("navMenu.kanyoku.title"),
      desc: t("navMenu.kanyoku.desc"),
      tag: t("navMenu.kanyoku.tag"),
      hoverColor: "var(--color-indigo-accent)",
      theme: "indigo",
    },
  ]);

  return { menuItems };
}
