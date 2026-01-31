import type { JoshiItem, JoshiExtraItem } from "@/types/Joshi";

// ==========================================
// 1. MAIN PARTICLES (KARTU UTAMA)
// ==========================================
export const MainParticles: JoshiItem[] = [
  {
    kana: "は",
    romaji: "WA",
    label: "Topik",
    function:
      'Menandakan topik pembicaraan (subjek utama kalimat). Dibaca "Wa", bukan "Ha".',
    example: {
      jp: "私はアティラです。",
      ro: "Watashi wa Atyla desu.",
      id: "Saya adalah Atyla.",
      highlight: "は",
    },
  },
  {
    kana: "を",
    romaji: "WO / O",
    label: "Objek",
    function:
      "Menandai objek yang dikenai tindakan (kata kerja). Biasanya diletakkan sebelum kata kerja.",
    example: {
      jp: "寿司を食べます。",
      ro: "Sushi o tabemasu.",
      id: "Makan sushi.",
      highlight: "を",
    },
  },
  {
    kana: "も",
    romaji: "MO",
    label: "Juga",
    function:
      'Berarti "juga" atau "pun". Menggantikan partikel "Wa" atau "Ga".',
    example: {
      jp: "私も学生です。",
      ro: "Watashi mo gakusei desu.",
      id: "Saya juga mahasiswa.",
      highlight: "も",
    },
  },
  {
    kana: "に",
    romaji: "NI",
    label: "Waktu / Lokasi",
    function: "Menunjukkan waktu spesifik atau lokasi keberadaan (statis).",
    example: {
      jp: "6時に起きます。",
      ro: "Roku-ji ni okimasu.",
      id: "Bangun pada jam 6.",
      highlight: "に",
    },
  },
  {
    kana: "で",
    romaji: "DE",
    label: "Di / Dengan",
    function:
      "Menunjukkan tempat kejadian (aksi) atau cara/alat yang digunakan.",
    example: {
      jp: "バスで行きます。",
      ro: "Basu de ikimasu.",
      id: "Pergi dengan bus.",
      highlight: "で",
    },
  },
  {
    kana: "へ",
    romaji: "E",
    label: "Ke Arah",
    function:
      'Menunjukkan arah tujuan. Mirip "Ni" tapi lebih fokus ke arah pergerakan. Dibaca "E".',
    example: {
      jp: "日本へ行きたい。",
      ro: "Nihon e ikitai.",
      id: "Ingin pergi ke Jepang.",
      highlight: "へ",
    },
  },
  {
    kana: "の",
    romaji: "NO",
    label: "Milik",
    function:
      "Menandakan kepemilikan atau menghubungkan dua kata benda. (Rumus: Pemilik + NO + Benda).",
    example: {
      jp: "私の本です。",
      ro: "Watashi no hon desu.",
      id: "Buku milik saya.",
      highlight: "の",
    },
  },
  {
    kana: "と",
    romaji: "TO",
    label: "Dan / Bersama",
    function:
      'Berarti "dan" (untuk daftar lengkap) atau "bersama" (jika diikuti orang).',
    example: {
      jp: "猫と犬。",
      ro: "Neko to inu.",
      id: "Kucing dan Anjing.",
      highlight: "と",
    },
  },
  {
    kana: "か",
    romaji: "KA",
    label: "Tanya (?)",
    function:
      "Diletakkan di akhir kalimat untuk mengubahnya menjadi pertanyaan.",
    example: {
      jp: "元気ですか。",
      ro: "Genki desu ka?",
      id: "Apa kabar?",
      highlight: "か",
    },
  },
];

// ==========================================
// 2. EXTRA PARTICLES (LIST TAMBAHAN)
// ==========================================
export const ExtraParticles: JoshiExtraItem[] = [
  {
    kana: "から",
    romaji: "Kara (Dari / Karena)",
    desc: "Menunjukkan titik awal waktu/tempat, atau alasan.",
    example_jp: "月曜日から",
    example_ro: "Getsuyoubi kara",
    example_meaning: "Dari hari Senin",
  },
  {
    kana: "まで",
    romaji: "Made (Sampai)",
    desc: "Menunjukkan batas akhir waktu/tempat.",
    example_jp: "金曜日まで",
    example_ro: "Kinyoubi made",
    example_meaning: "Sampai hari Jumat",
  },
  {
    kana: "ね",
    romaji: "Ne (Ya? / Kan?)",
    desc: "Di akhir kalimat untuk mencari persetujuan.",
    example_jp: "おいしいですね",
    example_ro: "Oishii desu ne",
    example_meaning: "Enak ya?",
  },
  {
    kana: "よ",
    romaji: "Yo (Lho!)",
    desc: "Di akhir kalimat untuk memberi penekanan.",
    example_jp: "暑いですよ",
    example_ro: "Atsui desu yo",
    example_meaning: "Panas lho!",
  },
];
