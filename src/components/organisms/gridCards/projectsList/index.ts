const tailwind = "tailwindcss";
const next = "nextjs";
const react = "reactjs";
const chakra = "chakraui";
const express = "expressjs";
const supabase = "supabase";
const bspwm = "bspwm";
const linux = "linux";

export const ProjectsList = [
  { h2: "The Sugiharto", p: 'Slicing UI Design bang Nauval', repo: "https://github.com/haikelz/the-sugiharto", preview: "https://the-sugiharto.vercel.app", img: "/img/Project_7.webp", stack1: next, stack2: `framermotion` },
  { h2: 'Dotfiles', p: 'My Linux configuration for daily use', repo: 'https://github.com/haikelz/dotfiles', preview: '', img: '/img/Project_2.webp', stack1: linux, stack2: bspwm },
  { h2: 'Anime Words', p: 'Kumpulan kalimat(bukan motivasi) dari tokoh-tokoh Anime.', repo: 'https://github.com/haikelz/anime-words', preview: 'https://anime-words.vercel.app', img: '/img/Project_2.webp', stack1: next, stack2: chakra },
  { h2: 'Cli Quiz Game', p: 'Simple Quiz Game in your terminal', repo: 'https://github.com/haikelz/cli-quiz-game', preview: "", img: '/img/Project_5.webp', stack1: 'nodejs', stack2: 'chalk' },

  { h2: 'Gallery', p: 'Simple image gallery with NextJS, Tailwind, and Supabase', repo: 'https://github.com/haikelz/anime-gallery', preview: 'https://animegallery.vercel.app/', img: '/img/Project_3.webp', stack1: next, stack2: supabase },
  { h2: 'ReactJS CRUD', p: 'Simple CRUD ReactJS', repo: 'https://github.com/haikelz/anime-review-crud', preview: "", img: '/img/Project_1.webp', stack1: react, stack2: express },
  { h2: "Reddit Meme Posts", p: "A website to get meme posts from Reddit", repo: "https://github.com/haikelz/reddit-meme-posts", preview: "https://reddit-meme-posts.netlify.app/", img: "", stack1: next, stack2: tailwind },
];
