import { MdHomeFilled, MdLibraryBooks, MdWork } from "react-icons/md";

const tailwind: string = "tailwindcss";
const next: string = "nextjs";
const reactQuery: string = "react-query";
const motion: string = "framer-motion";
const svelte: string = "svelte";
const react: string = "reactjs";

export const projectsList = [
  {
    title: "Jadwal Sholat",
    description: "Website jadwal Sholat dan baca Al-Qur'an",
    repo: "https://github.com/haikelz/jadwal-sholat",
    preview: "https://info-jadwal-sholat.vercel.app",
    stack: [next, tailwind],
  },
  {
    title: "Animeow",
    description: "A website to search your favorite anime, and manga",
    repo: "https://github.com/haikelz/animeow",
    preview: "https://animeow-red.vercel.app",
    stack: [next, reactQuery],
  },
  {
    title: "The Zeitplan",
    description: "Sebuah cara untuk mengatur kuliah kamu",
    repo: "https://github.com/haikelz/the-zeitplan",
    preview: "https://the-zeitplan.pages.dev",
    stack: [react, tailwind],
  },
  {
    title: "Chat n' rechat",
    description: "Slicing UI Design: Chat n' rechat",
    repo: "https://github.com/haikelz/chat-n-rechat",
    preview: "https://chat-n-rechat-seven.vercel.app/",
    stack: [next, tailwind],
  },
  {
    title: "The Sugiharto",
    description: "Slicing UI Design bang Nauval Array ID",
    repo: "https://github.com/haikelz/the-sugiharto",
    preview: "https://the-sugiharto.vercel.app",
    stack: [next, motion],
  },
  {
    title: "Wakaranai",
    description: "A website to convert Romaji to Hiragana/Katakana",
    repo: "https://github.com/haikelz/wakaranai",
    preview: "https://wakaranai.vercel.app",
    stack: [svelte, tailwind],
  },
  {
    title: "Vite Starter",
    description: "Another Vite Starter for React JS",
    repo: "https://github.com/haikelz/vite-starter",
    preview: "https://vite-starter-gamma.vercel.app/",
    stack: [react, "vite"],
  },
];

export const topNavList = [
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
  { name: "Works", icon: MdWork, link: "/works" },
  { name: "Notes", icon: MdLibraryBooks, link: "/notes" },
];

export const metadata = {
  url: "https://haikel.my.id",
  type: "website",
  title: "Haikel",
  description: "Haikel's Website",
  image: "https://avatars.githubusercontent.com/u/77146709?v=4",
};
