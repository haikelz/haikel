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
      },
    },
  },
  plugins: [],
};
