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
        light: "#ECEFF4",
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
        logo: "Caveat",
        body: "Rubik",
        code: "JetBrains Mono",
        arabic: "Noto Naskh Arabic",
      },
      backgroundImage: {
        polkadotLight: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='30' height='30' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(248, 250, 252,1)'/%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(22, 22, 29,1)'/%3E%3Cpath d='M19 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaNm1 0aInfinityInfinity 0 0 1InfinityNaNaInfinityInfinity 0 0 1-InfinityNaNz' fill='rgba(22, 22, 29,1)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
        polkadotDark: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='100%25' width='100%25'%3E%3Cdefs%3E%3Cpattern id='doodad' width='30' height='30' viewBox='0 0 40 40' patternUnits='userSpaceOnUse' patternTransform=''%3E%3Crect width='100%25' height='100%25' fill='rgba(22, 22, 29,1)'/%3E%3Ccircle cx='20' cy='20' r='1' fill='rgba(248, 250, 252,0.5)'/%3E%3Cpath d='M19 20aInfinityInfinity 0 0 0InfinityNaNaInfinityInfinity 0 0 0-InfinityNaNm1 0aInfinityInfinity 0 0 1InfinityNaNaInfinityInfinity 0 0 1-InfinityNaNz' fill='rgba(248, 250, 252,0.5)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23doodad)' height='200%25' width='200%25'/%3E%3C/svg%3E ")`,
      },
      typography: ({ theme }) => {
        return {
          DEFAULT: {
            css: {
              pre: {
                code: {
                  padding: "0 !important",
                  fontSize: theme("fontSize.base")[0],
                },
              },
              code: {
                borderRadius: theme("borderRadius.md"),
                paddingTop: theme("spacing.1"),
                paddingBottom: theme("spacing.1"),
                paddingLeft: theme("spacing.1"),
                paddingRight: theme("spacing.1"),
                fontFamily: "inherit !important",
                fontWeight: "500 !important",
                color: theme("colors.slate.900"),
                backgroundColor: theme("colors.slate.300"),
              },
              "pre, pre code": {
                color: theme("colors.slate.200"),
                backgroundColor: "#1F1F28",
              },
              "code::before": {
                content: '""',
              },
              "code::after": {
                content: '""',
              },
              hr: {
                borderColor: theme("colors.slate.300"),
              },
              ul: {
                marginTop: "0 !important",
                marginBottom: "0 !important",
              },
              li: {
                marginTop: "0 !important",
                marginBottom: "0 !important",
              },
              img: {
                marginLeft: "auto",
                marginRight: "auto",
              },
              "h1,h2,h3,h4,h5,h6": {
                a: {
                  color: "inherit",
                  textDecoration: "none",
                },
              },
            },
          },
          sm: {
            css: {
              pre: {
                code: {
                  fontSize: theme("fontSize.base")[0],
                },
              },
            },
          },
          lg: {
            css: {
              h1: {
                fontSize: theme("fontSize.4xl")[0],
              },
            },
          },
          invert: {
            css: {
              hr: {
                borderColor: theme("colors.slate.700"),
              },
              code: {
                color: theme("colors.slate.300"),
                backgroundColor: "#2A2A37",
              },
              "a code": {
                color: theme("colors.white"),
              },
              "pre, pre code": {
                color: theme("colors.slate.200"),
                backgroundColor: "#1F1F28",
              },
            },
          },
        };
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
