import { MdAccountCircle, MdEmail, MdHomeFilled, MdLibraryBooks } from "react-icons/md";

const tailwind: string = "tailwindcss";
const next: string = "nextjs";
const chakra: string = "chakra-ui";
const reactQuery: string = "react-query";
const jotai: string = "jotai";
const motion: string = "framer-motion";
const swr: string = "swr";
const svelte: string = "svelte";

export const ProjectsList = [
  {
    h2: "Jadwal Sholat",
    p: "Website jadwal Sholat dan baca Al-Qur'an",
    repo: "https://github.com/haikelz/jadwal-sholat",
    preview: "https://jadwal-sholat.pages.dev/",
    stack1: next,
    stack2: tailwind,
  },
  {
    h2: "The Zeitplan",
    p: "Sebuah cara untuk mengatur kuliah kamu",
    repo: "https://github.com/haikelz/the-zeitplan",
    preview: "https://the-zeitplan.pages.dev",
    stack1: next,
    stack2: tailwind,
  },
  {
    h2: "The Sugiharto",
    p: "Slicing UI Design bang Nauval Array ID",
    repo: "https://github.com/haikelz/the-sugiharto",
    preview: "https://the-sugiharto.vercel.app",
    stack1: next,
    stack2: motion,
  },
  {
    h2: "Kumpulan Do'a",
    p: "Kumpulan do'a sehari-hari",
    repo: "https://github.com/haikelz/kumpulan-doa",
    preview: "https://kumpulan-doa.pages.dev/",
    stack1: next,
    stack2: chakra,
  },
  {
    h2: "Animeow",
    p: "A website to search your favorite anime, and manga",
    repo: "https://github.com/haikelz/animeow",
    preview: "https://animeow-red.vercel.app",
    stack1: next,
    stack2: reactQuery,
  },
  {
    h2: "Beritakan",
    p: "Kumpulan berita dari berbagai sumber",
    repo: "https://github.com/haikelz/beritakan",
    preview: "https://beritakan.vercel.app",
    stack1: next,
    stack2: reactQuery,
  },
  {
    h2: "Masakan",
    p: "Get daily food recipes inspiration",
    repo: "https://github.com/haikelz/masakan",
    preview: "https://masakan-six.vercel.app/",
    stack1: next,
    stack2: swr,
  },
  {
    h2: "Reddit Posts",
    p: "A website to get posts from Reddit(mostly memes)",
    repo: "https://github.com/haikelz/reddit-posts",
    preview: "https://reddit-posts.netlify.app/",
    stack1: next,
    stack2: tailwind,
  },
  {
    h2: "Wakaranai",
    p: "A website to convert Romaji to Hiragana/Katakana",
    repo: "https://github.com/haikelz/wakaranai",
    preview: "https://wakaranai.vercel.app",
    stack1: svelte,
    stack2: tailwind,
  },
];

export const HeaderList = [
  { id: "a", text: "About", href: "/about" },
  { id: "b", text: "Works", href: "/works" },
  { id: "c", text: "Contact", href: "/contact" },
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
  { name: "Works", icon: MdLibraryBooks, link: "/works" },
  { name: "Contact", icon: MdEmail, link: "/contact" },
];
