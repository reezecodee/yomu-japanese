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
      title: t("topics.scripts.hiragana.title"),
      desc: t("topics.scripts.hiragana.desc"),
      tag: t("topics.scripts.hiragana.tag"),
      hoverColor: "var(--color-peach-accent)",
      theme: "rose",
    },
    {
      to: "/kana/katakana",
      icon: "ア",
      title: t("topics.scripts.katakana.title"),
      desc: t("topics.scripts.katakana.desc"),
      tag: t("topics.scripts.katakana.tag"),
      hoverColor: "var(--color-ice-accent)",
      theme: "teal",
    },
    {
      to: "/kana/kanji",
      icon: "山",
      title: t("topics.scripts.kanji.title"),
      desc: t("topics.scripts.kanji.desc"),
      tag: t("topics.scripts.kanji.tag"),
      hoverColor: "var(--color-lavender-accent)",
      theme: "violet",
    },
    {
      to: "/kana/suuji",
      icon: "123",
      title: t("topics.basics.number.title"),
      desc: t("topics.basics.number.desc"),
      tag: t("topics.basics.number.tag"),
      hoverColor: "var(--color-vanilla-accent)",
      theme: "amber",
    },

    // ==========================================
    // SECTION 2: KOSAKATA
    // ==========================================
    {
      to: "/vocabulary/kotoba",
      icon: "🍱",
      title: t("topics.basics.kotoba.title"),
      desc: t("topics.basics.kotoba.desc"),
      tag: t("topics.basics.kotoba.tag"),
      hoverColor: "var(--color-indigo-accent)",
      theme: "indigo",
    },
    {
      to: "/vocabulary/doushi",
      icon: "🏃",
      title: t("topics.vocabulary.doushi.title"),
      desc: t("topics.vocabulary.doushi.desc"),
      tag: t("topics.vocabulary.doushi.tag"),
      hoverColor: "var(--color-rose-accent)",
      theme: "pink",
    },
    {
      to: "/vocabulary/keiyoushi",
      icon: "✨",
      title: t("topics.vocabulary.keiyoushi.title"),
      desc: t("topics.vocabulary.keiyoushi.desc"),
      tag: t("topics.vocabulary.keiyoushi.tag"),
      hoverColor: "var(--color-aqua-accent)",
      theme: "cyan",
    },
    {
      to: "/vocabulary/mono",
      icon: "📦",
      title: t("topics.vocabulary.mono.title"),
      desc: t("topics.vocabulary.mono.desc"),
      tag: t("topics.vocabulary.mono.tag"),
      hoverColor: "var(--color-ghost-accent)",
      theme: "zinc",
    },
    {
      to: "/vocabulary/shigoto",
      icon: "💼",
      title: t("topics.vocabulary.shigoto.title"),
      desc: t("topics.vocabulary.shigoto.desc"),
      tag: t("topics.vocabulary.shigoto.tag"),
      hoverColor: "var(--color-surface-accent)",
      theme: "blue",
    },
    {
      to: "/vocabulary/tabemono",
      icon: "🍜",
      title: t("topics.vocabulary.tabemono.title"),
      desc: t("topics.vocabulary.tabemono.desc"),
      tag: t("topics.vocabulary.tabemono.tag"),
      hoverColor: "var(--color-apricot-accent)",
      theme: "orange",
    },
    {
      to: "/vocabulary/doubutsu",
      icon: "🐯",
      title: t("topics.vocabulary.doubutsu.title"),
      desc: t("topics.vocabulary.doubutsu.desc"),
      tag: t("topics.vocabulary.doubutsu.tag"),
      hoverColor: "var(--color-safari-accent)",
      theme: "lime",
    },
    {
      to: "/vocabulary/norimono",
      icon: "🚄",
      title: t("topics.vocabulary.norimono.title"),
      desc: t("topics.vocabulary.norimono.desc"),
      tag: t("topics.vocabulary.norimono.tag"),
      hoverColor: "var(--color-metro-accent)",
      theme: "fuchsia",
    },
    {
      to: "/vocabulary/tatemono",
      icon: "🏢",
      title: t("topics.vocabulary.tatemono.title"),
      desc: t("topics.vocabulary.tatemono.desc"),
      tag: t("topics.vocabulary.tatemono.tag"),
      hoverColor: "var(--color-concrete-accent)",
      theme: "stone",
    },
    {
      to: "/vocabulary/kudamono",
      icon: "🍓",
      title: t("topics.vocabulary.kudamono.title"),
      desc: t("topics.vocabulary.kudamono.desc"),
      tag: t("topics.vocabulary.kudamono.tag"),
      hoverColor: "var(--color-berry-accent)",
      theme: "red",
    },
    {
      to: "/vocabulary/shokubutsu",
      icon: "🌿",
      title: t("topics.vocabulary.shokubutsu.title"),
      desc: t("topics.vocabulary.shokubutsu.desc"),
      tag: t("topics.vocabulary.shokubutsu.tag"),
      hoverColor: "var(--color-forest-accent)",
      theme: "emerald",
    },
    {
      to: "/vocabulary/byouki",
      icon: "🤒",
      title: t("topics.vocabulary.byouki.title"),
      desc: t("topics.vocabulary.byouki.desc"),
      tag: t("topics.vocabulary.byouki.tag"),
      hoverColor: "var(--color-rose-accent)",
      theme: "rose",
    },
    {
      to: "/vocabulary/dogu",
      icon: "🛠️",
      title: t("topics.vocabulary.dogu.title"),
      desc: t("topics.vocabulary.dogu.desc"),
      tag: t("topics.vocabulary.dogu.tag"),
      hoverColor: "var(--color-orange-accent)",
      theme: "orange",
    },

    // ==========================================
    // SECTION 3: GRAMMAR
    // ==========================================
    {
      to: "/grammar/bunpou",
      icon: "🏗️",
      title: t("topics.grammar.bunpou.title"),
      desc: t("topics.grammar.bunpou.desc"),
      tag: t("topics.grammar.bunpou.tag"),
      hoverColor: "var(--color-cool-dark)",
      theme: "slate",
    },
    {
      to: "/grammar/joshi",
      icon: "🔗",
      title: t("topics.grammar.joshi.title"),
      desc: t("topics.grammar.joshi.desc"),
      tag: t("topics.grammar.joshi.tag"),
      hoverColor: "var(--color-mint-accent)",
      theme: "green",
    },
    {
      to: "/grammar/aisatsu",
      icon: "💬",
      title: t("topics.basics.aisatsu.title"),
      desc: t("topics.basics.aisatsu.desc"),
      tag: t("topics.basics.aisatsu.tag"),
      hoverColor: "var(--color-sky-accent)",
      theme: "sky",
    },
    {
      to: "/grammar/kanyouku",
      icon: "📜",
      title: t("topics.grammar.kanyoku.title"),
      desc: t("topics.grammar.kanyoku.desc"),
      tag: t("topics.grammar.kanyoku.tag"),
      hoverColor: "var(--color-indigo-accent)",
      theme: "indigo",
    },
  ]);

  return { menuItems };
}
