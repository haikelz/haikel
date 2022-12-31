import { MdAccountCircle, MdHomeFilled, MdLibraryBooks, MdWork } from "react-icons/md";

const tailwind: string = "tailwindcss";
const next: string = "nextjs";
const chakra: string = "chakra-ui";
const reactQuery: string = "react-query";
const jotai: string = "jotai";
const motion: string = "framer-motion";
const swr: string = "swr";
const svelte: string = "svelte";

export const projectsList = [
  {
    h4: "Jadwal Sholat",
    p: "Website jadwal Sholat dan baca Al-Qur'an",
    repo: "https://github.com/haikelz/jadwal-sholat",
    preview: "https://info-jadwal-sholat.vercel.app",
    stack1: next,
    stack2: tailwind,
  },
  {
    h4: "The Zeitplan",
    p: "Sebuah cara untuk mengatur kuliah kamu",
    repo: "https://github.com/haikelz/the-zeitplan",
    preview: "https://the-zeitplan.pages.dev",
    stack1: next,
    stack2: tailwind,
  },
  {
    h4: "The Sugiharto",
    p: "Slicing UI Design bang Nauval Array ID",
    repo: "https://github.com/haikelz/the-sugiharto",
    preview: "https://the-sugiharto.vercel.app",
    stack1: next,
    stack2: motion,
  },
  {
    h4: "Kumpulan Do'a",
    p: "Kumpulan do'a sehari-hari",
    repo: "https://github.com/haikelz/kumpulan-doa",
    preview: "https://kumpulan-doa.pages.dev/",
    stack1: next,
    stack2: chakra,
  },
  {
    h4: "Animeow",
    p: "A website to search your favorite anime, and manga",
    repo: "https://github.com/haikelz/animeow",
    preview: "https://animeow-red.vercel.app",
    stack1: next,
    stack2: reactQuery,
  },
  {
    h4: "Reddit Posts",
    p: "A website to get Posts from Reddit(mostly memes)",
    repo: "https://github.com/haikelz/reddit-posts",
    preview: "https://reddit-posts.netlify.app/",
    stack1: next,
    stack2: tailwind,
  },
  {
    h4: "Wakaranai",
    p: "A website to convert Romaji to Hiragana/Katakana",
    repo: "https://github.com/haikelz/wakaranai",
    preview: "https://wakaranai.vercel.app",
    stack1: svelte,
    stack2: tailwind,
  },
];

export const headerList = [
  { id: "a", text: "About", href: "/about" },
  { id: "b", text: "Works", href: "/works" },
  { id: "c", text: "Notes", href: "/notes" },
];

export const socialMediaList = [
  { name: "Telegram", link: "https://t.me/pempek_kapal_selem" },
  { name: "Facebook", link: "https://facebook.com/kelgfx" },
  { name: "Github", link: "https://github.com/haikelz" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/haikel-ilham-hakim" },
];

export const bottomNavList = [
  { name: "Home", icon: MdHomeFilled, link: "/" },
  { name: "About", icon: MdAccountCircle, link: "/about" },
  { name: "Works", icon: MdWork, link: "/works" },
  { name: "Notes", icon: MdLibraryBooks, link: "/notes" },
];
