import type { AisatsuItem } from "@/types";

// ==========================================
// 1. DAILY GREETINGS (SALAM HARIAN)
// ==========================================
export const DailyGreetings: AisatsuItem[] = [
  {
    kana: "おはようございます",
    romaji: "Ohayou Gozaimasu",
    meaningId: "Selamat Pagi (Sopan)",
    meaningEn: "Good Morning (Polite)",
    align: "left",
    situationId: "Formal",
    situationEn: "Formal",
  },
  {
    kana: "おはよう！",
    romaji: "Ohayou!",
    meaningId: "Pagi! (Santai ke teman)",
    meaningEn: "Morning! (Casual)",
    align: "right",
    situationId: "Santai",
    situationEn: "Casual",
  },
  {
    kana: "こんにちは",
    romaji: "Konnichiwa",
    meaningId: "Selamat Siang / Halo",
    meaningEn: "Good Afternoon / Hello",
    align: "left",
    situationId: "Siang",
    situationEn: "Daytime",
  },
  {
    kana: "こんばんは",
    romaji: "Konbanwa",
    meaningId: "Selamat Malam",
    meaningEn: "Good Evening",
    align: "right",
    situationId: "Malam",
    situationEn: "Night",
  },
  {
    kana: "おやすみなさい",
    romaji: "Oyasuminasai",
    meaningId: "Selamat Tidur / Istirahat",
    meaningEn: "Good Night / Rest well",
    align: "right",
    situationId: "Tidur",
    situationEn: "Bedtime",
  },
];

// ==========================================
// 2. PARTING (PERPISAHAN)
// ==========================================
export const PartingGreetings: AisatsuItem[] = [
  {
    kana: "さようなら",
    romaji: "Sayounara",
    meaningId: "Selamat tinggal (Waktu lama)",
    meaningEn: "Goodbye (Long time/Final)",
    align: "left",
    situationId: "Formal",
    situationEn: "Formal",
  },
  {
    kana: "またね！",
    romaji: "Mata ne!",
    meaningId: "Sampai jumpa lagi!",
    meaningEn: "See you later!",
    align: "right",
    situationId: "Santai",
    situationEn: "Casual",
  },
  {
    kana: "じゃ、また",
    romaji: "Ja, mata",
    meaningId: "Dah, sampai nanti",
    meaningEn: "Well, see you",
    align: "right",
    situationId: "Santai",
    situationEn: "Casual",
  },
];

// ==========================================
// 3. GRATITUDE & APOLOGY (TERIMA KASIH & MAAF)
// ==========================================
export const GratitudeGreetings: AisatsuItem[] = [
  {
    kana: "ありがとうございます",
    romaji: "Arigatou Gozaimasu",
    meaningId: "Terima kasih banyak",
    meaningEn: "Thank you very much",
    align: "left",
    situationId: "Umum",
    situationEn: "General",
  },
  {
    kana: "いいえ、どういたしまして",
    romaji: "Iie, douitashimashite",
    meaningId: "Sama-sama / Tidak masalah",
    meaningEn: "You're welcome / Not at all",
    align: "right",
    situationId: "Balasan",
    situationEn: "Reply",
  },
  {
    kana: "すみません",
    romaji: "Sumimasen",
    meaningId: "Maaf / Permisi",
    meaningEn: "Excuse me / I'm sorry",
    align: "left",
    situationId: "Formal",
    situationEn: "Formal",
  },
  {
    kana: "ごめんなさい",
    romaji: "Gomennasai",
    meaningId: "Maaf ya",
    meaningEn: "I am sorry (Casual)",
    align: "right",
    situationId: "Santai",
    situationEn: "Casual",
  },
];

// ==========================================
// 4. HOME INTERACTIONS (DI RUMAH)
// ==========================================
export const HomeGreetings: AisatsuItem[] = [
  {
    kana: "行ってきます",
    romaji: "Ittekimasu",
    meaningId: "Saya berangkat!",
    meaningEn: "I'm leaving! / I'm off!",
    align: "left",
    situationId: "Pergi",
    situationEn: "Leaving",
  },
  {
    kana: "行ってらっしゃい",
    romaji: "Itterasshai",
    meaningId: "Hati-hati di jalan",
    meaningEn: "Take care / See you later",
    align: "right",
    situationId: "Melepas",
    situationEn: "Sending off",
  },
  {
    kana: "ただいま",
    romaji: "Tadaima",
    meaningId: "Saya pulang!",
    meaningEn: "I'm home!",
    align: "left",
    situationId: "Pulang",
    situationEn: "Returning",
  },
  {
    kana: "お帰りなさい",
    romaji: "Okaerinasai",
    meaningId: "Selamat datang kembali",
    meaningEn: "Welcome back home",
    align: "right",
    situationId: "Menyambut",
    situationEn: "Welcoming",
  },
];

// ==========================================
// 5. FIRST MEETING (PERKENALAN)
// ==========================================
export const IntroGreetings: AisatsuItem[] = [
  {
    kana: "初めまして",
    romaji: "Hajimemashite",
    meaningId: "Salam kenal (Awal bertemu)",
    meaningEn: "Nice to meet you (First time)",
    align: "left",
    situationId: "Awal",
    situationEn: "Start",
  },
  {
    kana: "よろしくお願いします",
    romaji: "Yoroshiku Onegaishimasu",
    meaningId: "Mohon bimbingannya / kerjasamanya",
    meaningEn: "Please treat me well / Nice meeting you",
    align: "right",
    situationId: "Akhir",
    situationEn: "End",
  },
];