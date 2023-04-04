import { IBM_Plex_Serif, JetBrains_Mono, Noto_Naskh_Arabic, Space_Grotesk } from "next/font/google";

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ibm",
  display: "swap",
});

export const jetbrains = JetBrains_Mono({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const naskhArabic = Noto_Naskh_Arabic({
  weight: ["700"],
  style: ["normal"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});
