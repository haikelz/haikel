module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        light: "8px 8px 0px -3px #000000",
        dark: "8px 8px 0px -3px #FFFFFF",
        progress: "0 0 10px #29d, 0 0 5px #29d",
      },
      colors: {
        antiflashwhite: "#F1F5F9",
        azure: "#EFFFFD",
        brightgray: "#ECEFF4",
        crayola: "#2563EB",
        celedongreen: "#247881",
        eerieblack: "#16161D",
        fireopal: "#F05454",
        lightgray: "#D1D9D0",
        raisinblack: "#1F1F28",
      },
      fontFamily: {
        arabic: "Noto Naskh Arabic",
        japanese: "Noto Sans Japanese",
        jetbrains: "JetBrains Mono",
        rubik: "Rubik",
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
                borderRadius: theme("borderRadius.sm"),
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
                borderRadius: theme("borderRadius.sm"),
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
              a: {
                textUnderlineOffset: "3px",
                textDecorationThickness: "2px",
                textDecorationStyle: "dashed",
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
              "pre, pre code": {
                borderRadius: theme("borderRadius.sm"),
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
