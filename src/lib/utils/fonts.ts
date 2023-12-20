import { IBM_Plex_Mono, Inter, Noto_Naskh_Arabic } from "next/font/google";

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const naskhArabic = Noto_Naskh_Arabic({
  weight: ["700"],
  style: ["normal"],
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
