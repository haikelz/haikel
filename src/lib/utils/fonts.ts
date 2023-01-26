import {
  IBM_Plex_Serif,
  JetBrains_Mono,
  Noto_Naskh_Arabic,
  Noto_Sans_JP,
  Space_Grotesk,
} from "@next/font/google";

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const japanese = Noto_Sans_JP({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const naskhArabic = Noto_Naskh_Arabic({
  weight: ["700"],
  style: ["normal"],
  subsets: ["arabic"],
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
