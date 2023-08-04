import { IBM_Plex_Sans, IBM_Plex_Serif, JetBrains_Mono, Noto_Naskh_Arabic } from "next/font/google";

export const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ibm-serif",
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

export const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ibm-sans",
  display: "swap",
});
