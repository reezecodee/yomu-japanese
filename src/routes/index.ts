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
          },
        },
        {
          path: "katakana",
          name: "Katakana",
          component: () => import("@/pages/kana/Katakana.vue"),
          meta: {
            title: "Huruf Katakana",
            bgClass: "ice",
          },
        },
        {
          path: "kanji",
          name: "Kanji",
          component: () => import("@/pages/kana/Kanji.vue"),
          meta: {
            title: "Kanji N5-N1",
            bgClass: "lavender",
          },
        },
        {
          path: "suuji",
          name: "Suuji",
          component: () => import("@/pages/kana/Suuji.vue"),
          meta: {
            title: "Angka (Suuji)",
            bgClass: "vanilla",
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
          path: "doushi",
          name: "Doushi",
          component: () => import("@/pages/vocabulary/Doushi.vue"),
          meta: {
            title: "Kata Kerja (Doushi)",
            bgClass: "rose",
          },
        },
        {
          path: "keiyoushi",
          name: "Keiyoushi",
          component: () => import("@/pages/vocabulary/Keiyoushi.vue"),
          meta: {
            title: "Kata Sifat (Keiyoushi)",
            bgClass: "aqua",
          },
        },
        {
          path: "mono",
          name: "Mono",
          component: () => import("@/pages/vocabulary/Mono.vue"),
          meta: {
            title: "Benda (Mono)",
            bgClass: "ghost",
          },
        },
        {
          path: "shigoto",
          name: "Shigoto",
          component: () => import("@/pages/vocabulary/Shigoto.vue"),
          meta: {
            title: "Profesi (Shigoto)",
            bgClass: "surface",
          },
        },
        {
          path: "tabemono",
          name: "Tabemono",
          component: () => import("@/pages/vocabulary/Tabemono.vue"),
          meta: {
            title: "Makanan (Tabemono)",
            bgClass: "apricot",
          },
        },
        {
          path: "doubutsu",
          name: "Doubutsu",
          component: () => import("@/pages/vocabulary/Doubutsu.vue"),
          meta: {
            title: "Hewan (Doubutsu)",
            bgClass: "safari",
          },
        },
        {
          path: "norimono",
          name: "Norimono",
          component: () => import("@/pages/vocabulary/Norimono.vue"),
          meta: {
            title: "Transportasi (Norimono)",
            bgClass: "metro",
          },
        },
        {
          path: "tatemono",
          name: "Tatemono",
          component: () => import("@/pages/vocabulary/Tatemono.vue"),
          meta: {
            title: "Bangunan (Tatemono)",
            bgClass: "concrete",
          },
        },
        {
          path: "kudamono",
          name: "Kudamono",
          component: () => import("@/pages/vocabulary/Kudamono.vue"),
          meta: {
            title: "Buah & Sayur (Kudamono)",
            bgClass: "berry",
          },
        },
        {
          path: "shokubutsu",
          name: "Shokubutsu",
          component: () => import("@/pages/vocabulary/Shokubutsu.vue"),
          meta: {
            title: "Tanaman (Shokubutsu)",
            bgClass: "forest",
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
          },
        },
        {
          path: "bunpou",
          name: "Bunpou",
          component: () => import("@/pages/grammar/Bunpou.vue"),
          meta: {
            title: "Tata Bahasa (Bunpou)",
            bgClass: "cool",
          },
        },
        {
          path: "joshi",
          name: "Joshi",
          component: () => import("@/pages/grammar/Joshi.vue"),
          meta: {
            title: "Partikel (Joshi)",
            bgClass: "mint",
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

// --- UPDATE JUDUL BROWSER ---
const DEFAULT_TITLE = "Yomu Japanese";

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title;

  if (pageTitle) {
    document.title = `${pageTitle} - ${DEFAULT_TITLE}`;
  } else {
    document.title = DEFAULT_TITLE;
  }

  next();
});

export default router;
