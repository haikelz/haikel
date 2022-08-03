const tailwind = "tailwindcss";
const next = "nextjs";
const chakra = "chakraui";
const bspwm = "bspwm";
const linux = "linux";

export const ProjectsList = [
    { h2: 'Jadwal Sholat', p: "Website jadwal Sholat dan baca Al-Qur'an", repo: "https://github.com/haikelz/jadwal-sholat", preview: "https://jadwal-sholat.pages.dev/", img: "", stack1: next, stack2: tailwind },
    { h2: "The Sugiharto", p: 'Slicing UI Design bang Nauval', repo: "https://github.com/haikelz/the-sugiharto", preview: "https://the-sugiharto.vercel.app", img: "/img/Project_7.webp", stack1: next, stack2: `framermotion` },
    { h2: "Reddit Posts", p: "A website to get posts from Reddit(mostly memes)", repo: "https://github.com/haikelz/reddit-posts", preview: "ht", img: "", stack1: next, stack2: tailwind },
    { h2: 'Todo App', p: 'Simple Todo List', repo: 'https://github.com/haikelz/beritakan', preview: "https://beritakan.vercel.app", img: '/img/Project_5.webp', stack1: "ReactJS", stack2: tailwind },
    { h2: "Kumpulan Do'a", p: "Kumpulan do'a sehari-hari", repo: "https://github.com/haikelz/kumpulan-doa", preview: "https://kumpulan-doa.pages.dev/", img: "", stack1: next, stack2: chakra },
    { h2: 'Anime Words', p: 'Kumpulan kalimat(bukan motivasi) dari tokoh-tokoh Anime.', repo: 'https://github.com/haikelz/anime-words', preview: 'https://anime-words.vercel.app', img: '/img/Project_2.webp', stack1: next, stack2: chakra },
    { h2: 'Dotfiles', p: 'My Linux configuration for daily use', repo: 'https://github.com/haikelz/dotfiles', preview: '', img: '/img/Project_2.webp', stack1: linux, stack2: bspwm },
];

export const HeaderList = [
    { id: "a", text: "About", href: "/about" },
    { id: "b", text: "Works", href: "/works" },
    { id: "c", text: "Contact", href: "/contact" },
];