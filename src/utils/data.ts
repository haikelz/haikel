import { MdAccountCircle, MdHomeFilled, MdLibraryBooks, MdWork } from "react-icons/md";

const tailwind: string = "tailwindcss";
const next: string = "nextjs";
const reactQuery: string = "react-query";
const motion: string = "framer-motion";
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
    h4: "Animeow",
    p: "A website to search your favorite anime, and manga",
    repo: "https://github.com/haikelz/animeow",
    preview: "https://animeow-red.vercel.app",
    stack1: next,
    stack2: reactQuery,
  },
  {
    h4: "Beritakan",
    p: "A website to get news from various resources",
    repo: "https://github.com/haikelz/beritakan",
    preview: "https://beritakan.vercel.app/",
    stack1: next,
    stack2: reactQuery,
  },
  {
    h4: "Wakaranai",
    p: "A website to convert Romaji to Hiragana/Katakana",
    repo: "https://github.com/haikelz/wakaranai",
    preview: "https://wakaranai.vercel.app",
    stack1: svelte,
    stack2: tailwind,
  },
  {
    h4: "Vite Starter",
    p: "Another Vite Starter for React JS",
    repo: "https://github.com/haikelz/vite-starter",
    preview: "https://vite-starter-gamma.vercel.app/",
    stack1: "React JS",
    stack2: "Vite",
  },
];

export const headerList = [
  { id: "a", text: "/about", href: "/about" },
  { id: "b", text: "/works", href: "/works" },
  { id: "c", text: "/notes", href: "/notes" },
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

export const MetaData = {
  url: "https://haikel.my.id",
  type: "website",
  title: "Haikel",
  description: "Haikel's Website",
  image: "https://avatars.githubusercontent.com/u/77146709?v=4",
};
