import MainLayout from "@/components/layouts/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/Home.vue"),
      meta: {
        title: "topics.others.home.title",
        themeColor: "#ffdecc",
      },
    },
    {
      path: "/kana",
      name: "Kana",
      component: MainLayout,
      children: [
        {
          path: "hiragana",
          name: "Hiragana",
          component: () => import("@/pages/kana/Hiragana.vue"),
          meta: {
            title: "topics.scripts.hiragana.title",
            bgClass: "peach",
            themeColor: "#ffdecc",
          },
        },
        {
          path: "katakana",
          name: "Katakana",
          component: () => import("@/pages/kana/Katakana.vue"),
          meta: {
            title: "topics.scripts.katakana.title",
            bgClass: "ice",
            themeColor: "#e0f7fa",
          },
        },
        {
          path: "kanji",
          name: "Kanji",
          component: () => import("@/pages/kana/Kanji.vue"),
          meta: {
            title: "topics.scripts.kanji.title",
            bgClass: "lavender",
            themeColor: "#f3e8ff",
          },
        },
        {
          path: "suuji",
          name: "Suuji",
          component: () => import("@/pages/kana/Suuji.vue"),
          meta: {
            title: "topics.basics.number.title",
            bgClass: "vanilla",
            themeColor: "#fffbeb",
          },
        },
      ],
    },
    {
      path: "/vocabulary",
      name: "Vocabulary",
      component: MainLayout,
      children: [
        {
          path: "kotoba",
          name: "Kotoba",
          component: () => import("@/pages/vocabulary/Kotoba.vue"),
          meta: {
            title: "topics.basics.kotoba.title",
            bgClass: "kotoba",
            themeColor: "#f3f4f6",
          },
        },
        {
          path: "doushi",
          name: "Doushi",
          component: () => import("@/pages/vocabulary/Doushi.vue"),
          meta: {
            title: "topics.vocabulary.doushi.title",
            bgClass: "rose",
            themeColor: "#fff1f2",
          },
        },
        {
          path: "keiyoushi",
          name: "Keiyoushi",
          component: () => import("@/pages/vocabulary/Keiyoushi.vue"),
          meta: {
            title: "topics.vocabulary.keiyoushi.title",
            bgClass: "aqua",
            themeColor: "#ecfeff",
          },
        },
        {
          path: "mono",
          name: "Mono",
          component: () => import("@/pages/vocabulary/Mono.vue"),
          meta: {
            title: "topics.vocabulary.mono.title",
            bgClass: "ghost",
            themeColor: "#f8fafc",
          },
        },
        {
          path: "shigoto",
          name: "Shigoto",
          component: () => import("@/pages/vocabulary/Shigoto.vue"),
          meta: {
            title: "topics.vocabulary.shigoto.title",
            bgClass: "surface",
            themeColor: "#f1f5f9",
          },
        },
        {
          path: "tabemono",
          name: "Tabemono",
          component: () => import("@/pages/vocabulary/Tabemono.vue"),
          meta: {
            title: "topics.vocabulary.tabemono.title",
            bgClass: "apricot",
            themeColor: "#fff7ed",
          },
        },
        {
          path: "doubutsu",
          name: "Doubutsu",
          component: () => import("@/pages/vocabulary/Doubutsu.vue"),
          meta: {
            title: "topics.vocabulary.doubutsu.title",
            bgClass: "safari",
            themeColor: "#fffbeb",
          },
        },
        {
          path: "norimono",
          name: "Norimono",
          component: () => import("@/pages/vocabulary/Norimono.vue"),
          meta: {
            title: "topics.vocabulary.norimono.title",
            bgClass: "metro",
            themeColor: "#f5f3ff",
          },
        },
        {
          path: "tatemono",
          name: "Tatemono",
          component: () => import("@/pages/vocabulary/Tatemono.vue"),
          meta: {
            title: "topics.vocabulary.tatemono.title",
            bgClass: "concrete",
            themeColor: "#f1f5f9",
          },
        },
        {
          path: "kudamono",
          name: "Kudamono",
          component: () => import("@/pages/vocabulary/Kudamono.vue"),
          meta: {
            title: "topics.vocabulary.kudamono.title",
            bgClass: "berry",
            themeColor: "#fce7f3",
          },
        },
        {
          path: "shokubutsu",
          name: "Shokubutsu",
          component: () => import("@/pages/vocabulary/Shokubutsu.vue"),
          meta: {
            title: "topics.vocabulary.shokubutsu.title",
            bgClass: "forest",
            themeColor: "#f0fdf4",
          },
        },
        {
          path: "byouki",
          name: "Byouki",
          component: () => import("@/pages/vocabulary/Byouki.vue"),
          meta: {
            title: "topics.vocabulary.byouki.title",
            bgClass: "rose",
            themeColor: "#fff1f2",
          },
        },
        {
          path: "dogu",
          name: "Dōgu",
          component: () => import("@/pages/vocabulary/Dogu.vue"),
          meta: {
            title: "topics.vocabulary.dogu.title",
            bgClass: "orange",
            themeColor: "#f97316",
          },
        },
      ],
    },
    {
      path: "/grammar",
      name: "Grammar",
      component: MainLayout,
      children: [
        {
          path: "aisatsu",
          name: "Aisatsu",
          component: () => import("@/pages/grammar/Aisatsu.vue"),
          meta: {
            title: "topics.basics.aisatsu.title",
            bgClass: "sky",
            themeColor: "#f0f9ff",
          },
        },
        {
          path: "bunpou",
          name: "Bunpou",
          component: () => import("@/pages/grammar/Bunpou.vue"),
          meta: {
            title: "topics.grammar.bunpou.title",
            bgClass: "cool",
            themeColor: "#f0f4f8",
          },
        },
        {
          path: "joshi",
          name: "Joshi",
          component: () => import("@/pages/grammar/Joshi.vue"),
          meta: {
            title: "topics.grammar.joshi.title",
            bgClass: "mint",
            themeColor: "#dcfce7",
          },
        },
      ],
    },
    {
      path: "/memory-practice",
      name: "Memory Practice",
      component: MainLayout,
      children: [
        {
          path: "flashcard",
          name: "Flashcard",
          component: () => import("@/pages/memory-practice/Flashcard.vue"),
          meta: {
            title: "topics.others.flashcard.title",
            bgClass: "indigo",
            themeColor: "#e0e7ff",
          },
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.afterEach((to) => {
  const themeColor = (to.meta.themeColor as string) || "#ffffff";
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", themeColor);
  }
});

export default router;
