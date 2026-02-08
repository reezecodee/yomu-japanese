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
        title: "Beranda",
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
            title: "Huruf Hiragana",
            bgClass: "peach",
            themeColor: "#ffdecc",
          },
        },
        {
          path: "katakana",
          name: "Katakana",
          component: () => import("@/pages/kana/Katakana.vue"),
          meta: {
            title: "Huruf Katakana",
            bgClass: "ice",
            themeColor: "#e0f7fa",
          },
        },
        {
          path: "kanji",
          name: "Kanji",
          component: () => import("@/pages/kana/Kanji.vue"),
          meta: {
            title: "Kanji N5-N1",
            bgClass: "lavender",
            themeColor: "#f3e8ff",
          },
        },
        {
          path: "suuji",
          name: "Suuji",
          component: () => import("@/pages/kana/Suuji.vue"),
          meta: {
            title: "Angka (Suuji)",
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
            title: "Kosakata (Kotoba)",
            bgClass: "kotoba",
            themeColor: "#f3f4f6",
          },
        },
        {
          path: "doushi",
          name: "Doushi",
          component: () => import("@/pages/vocabulary/Doushi.vue"),
          meta: {
            title: "Kata Kerja (Doushi)",
            bgClass: "rose",
            themeColor: "#fff1f2",
          },
        },
        {
          path: "keiyoushi",
          name: "Keiyoushi",
          component: () => import("@/pages/vocabulary/Keiyoushi.vue"),
          meta: {
            title: "Kata Sifat (Keiyoushi)",
            bgClass: "aqua",
            themeColor: "#ecfeff",
          },
        },
        {
          path: "mono",
          name: "Mono",
          component: () => import("@/pages/vocabulary/Mono.vue"),
          meta: {
            title: "Benda (Mono)",
            bgClass: "ghost",
            themeColor: "#f8fafc",
          },
        },
        {
          path: "shigoto",
          name: "Shigoto",
          component: () => import("@/pages/vocabulary/Shigoto.vue"),
          meta: {
            title: "Profesi (Shigoto)",
            bgClass: "surface",
            themeColor: "#f1f5f9",
          },
        },
        {
          path: "tabemono",
          name: "Tabemono",
          component: () => import("@/pages/vocabulary/Tabemono.vue"),
          meta: {
            title: "Makanan (Tabemono)",
            bgClass: "apricot",
            themeColor: "#fff7ed",
          },
        },
        {
          path: "doubutsu",
          name: "Doubutsu",
          component: () => import("@/pages/vocabulary/Doubutsu.vue"),
          meta: {
            title: "Hewan (Doubutsu)",
            bgClass: "safari",
            themeColor: "#fffbeb",
          },
        },
        {
          path: "norimono",
          name: "Norimono",
          component: () => import("@/pages/vocabulary/Norimono.vue"),
          meta: {
            title: "Transportasi (Norimono)",
            bgClass: "metro",
            themeColor: "#f5f3ff",
          },
        },
        {
          path: "tatemono",
          name: "Tatemono",
          component: () => import("@/pages/vocabulary/Tatemono.vue"),
          meta: {
            title: "Bangunan (Tatemono)",
            bgClass: "concrete",
            themeColor: "#f1f5f9",
          },
        },
        {
          path: "kudamono",
          name: "Kudamono",
          component: () => import("@/pages/vocabulary/Kudamono.vue"),
          meta: {
            title: "Buah & Sayur (Kudamono)",
            bgClass: "berry",
            themeColor: "#fce7f3",
          },
        },
        {
          path: "shokubutsu",
          name: "Shokubutsu",
          component: () => import("@/pages/vocabulary/Shokubutsu.vue"),
          meta: {
            title: "Tanaman (Shokubutsu)",
            bgClass: "forest",
            themeColor: "#f0fdf4",
          },
        },
        {
          path: "byouki",
          name: "Byouki",
          component: () => import("@/pages/vocabulary/Byouki.vue"),
          meta: {
            title: "Penyakit (Byouki)",
            bgClass: "rose",
            themeColor: "#fff1f2",
          },
        },
        {
          path: "dogu",
          name: "Dōgu",
          component: () => import("@/pages/vocabulary/Dogu.vue"),
          meta: {
            title: "Peralatan (Dōgu)",
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
            title: "Salam (Aisatsu)",
            bgClass: "sky",
            themeColor: "#f0f9ff",
          },
        },
        {
          path: "bunpou",
          name: "Bunpou",
          component: () => import("@/pages/grammar/Bunpou.vue"),
          meta: {
            title: "Tata Bahasa (Bunpou)",
            bgClass: "cool",
            themeColor: "#f0f4f8",
          },
        },
        {
          path: "joshi",
          name: "Joshi",
          component: () => import("@/pages/grammar/Joshi.vue"),
          meta: {
            title: "Partikel (Joshi)",
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
            title: "Latihan Flashcard",
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

const DEFAULT_TITLE = "Yomu Japanese";

router.afterEach((to) => {
  const pageTitle = to.meta.title;
  if (pageTitle) {
    document.title = `${pageTitle} - ${DEFAULT_TITLE}`;
  } else {
    document.title = DEFAULT_TITLE;
  }

  const themeColor = (to.meta.themeColor as string) || "#ffffff";
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", themeColor);
  }
});

export default router;
