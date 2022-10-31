module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        light: "10px 10px 0px -3px #000000",
        dark: "10px 10px 0px -3px #FFFFFF",
        progress: "0 0 10px #29d, 0 0 5px #29d",
        allAround: "0px 0px 10px 1px rgba(0,0,0,0.25)",
      },
      colors: {
        light: "#F8FAFC",
        dark: "#16161D",
        lightCard: "#F1F5F9",
        lightUnderline: "#F05454",
        darkUnderline: "#2563EB",
        darkCard: "#1F1D2E",
        textHover: "#2563EB",
        lightTag: "#247881",
        darkTag: "#D1D9D0",
      },
      fontFamily: {
        logo: ["Caveat"],
        body: ["Rubik"],
        code: ["JetBrains Mono"],
      },
      backgroundImage: {
        polkadotLight: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='25' height='25' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(248, 250, 252,1)'/%3E%3Ccircle cx='40' cy='20' r='0.25' fill='rgba(22, 22, 29,1)'/%3E%3Ccircle cx='0' cy='20' r='1' fill='rgba(22, 22, 29,1)'/%3E%3Ccircle cx='40' cy='20' r='1' fill='rgba(22, 22, 29,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
        polkadotDark: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='25' height='25' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(22, 22, 29,1)'/%3E%3Ccircle cx='40' cy='20' r='0.25' fill='rgba(248, 250, 252,1)'/%3E%3Ccircle cx='0' cy='20' r='1' fill='rgba(248, 250, 252,1)'/%3E%3Ccircle cx='40' cy='20' r='1' fill='rgba(248, 250, 252,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
      },
    },
  },
  plugins: [],
};
