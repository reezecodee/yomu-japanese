import MainLayout from "@/components/layouts/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
            title: "Hiragana",
            bgClass: "peach",
          },
        },
        {
          path: "katakana",
          name: "Katakana",
          component: () => import("@/pages/kana/Katakana.vue"),
          meta: {
            title: "Katakana",
            bgClass: "ice",
          },
        },
        {
          path: "kanji",
          name: "Kanji",
          component: () => import("@/pages/kana/Kanji.vue"),
          meta: {
            title: "Kanji",
            bgClass: "lavender",
          },
        },
        {
          path: "suuji",
          name: "Suuji",
          component: () => import("@/pages/kana/Suuji.vue"),
          meta: {
            title: "Suuji",
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
            title: "Doushi",
            bgClass: "rose",
          },
        },
        {
          path: "keiyoushi",
          name: "Keiyoushi",
          component: () => import("@/pages/vocabulary/Keiyoushi.vue"),
          meta: {
            title: "Keiyoushi",
            bgClass: "aqua",
          },
        },
        {
          path: "mono",
          name: "Mono",
          component: () => import("@/pages/vocabulary/Mono.vue"),
          meta: {
            title: "Mono",
            bgClass: "ghost",
          },
        },
        {
          path: "shigoto",
          name: "Shigoto",
          component: () => import("@/pages/vocabulary/Shigoto.vue"),
          meta: {
            title: "Shigoto",
            bgClass: "surface",
          },
        },
        {
          path: "tabemono",
          name: "Tabemono",
          component: () => import("@/pages/vocabulary/Tabemono.vue"),
          meta: {
            title: "Tabemono",
            bgClass: "apricot",
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
            title: "Aisatsu",
            bgClass: "sky",
          },
        },
        {
          path: "bunpou",
          name: "Bunpou",
          component: () => import("@/pages/grammar/Bunpou.vue"),
          meta: {
            title: "Bunpou",
            bgClass: "cool",
          },
        },
        {
          path: "joshi",
          name: "Joshi",
          component: () => import("@/pages/grammar/Joshi.vue"),
          meta: {
            title: "Joshi",
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
            title: "Flashcard",
            bgClass: "indigo",
          },
        },
      ],
    },
  ],
});

export default router;
