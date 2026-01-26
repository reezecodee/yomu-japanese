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
      ],
    },
  ],
});

export default router;
