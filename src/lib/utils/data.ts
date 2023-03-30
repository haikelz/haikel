import { GuestbookIcon, HomeIcon, NotesIcon, WorkIcon } from "~ui/icons";

export const topNavList = [
  { id: "b", text: "/works", href: "/works" },
  { id: "c", text: "/notes", href: "/notes" },
  { id: 3, text: "/guestbook", href: "/guestbook" },
];

export const socialMediaList = [
  { name: "Email", link: "mailto:halo@haikel.my.id" },
  { name: "Telegram", link: "https://t.me/pempek_kapal_selem" },
  { name: "Facebook", link: "https://facebook.com/kelgfx" },
  { name: "Github", link: "https://github.com/haikelz" },
  { name: "Linkedin", link: "https://www.linkedin.com/in/haikel" },
];

export const bottomNavList = [
  { name: "Home", icon: HomeIcon, link: "/" },
  { name: "Works", icon: WorkIcon, link: "/works" },
  { name: "Notes", icon: NotesIcon, link: "/notes" },
  { name: "Guestbook", icon: GuestbookIcon, link: "/guestbook" },
];

export const metadata = {
  url: "https://haikel.my.id",
  type: "website",
  title: "Haikel",
  description: "A person who interested in Frontend stuff",
  image:
    "https://ik.imagekit.io/haikelz/blog/og-image/haikelz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678430627569",
};
