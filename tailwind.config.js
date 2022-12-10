module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        light: "10px 10px 0px -3px #000000",
        dark: "10px 10px 0px -3px #FFFFFF",
        progress: "0 0 10px #29d, 0 0 5px #29d",
        allaround: "0px 0px 10px 1px rgba(0,0,0,0.25)",
      },
      colors: {
        light: "#ECEFF4",
        dark: "#16161D",
        card: {
          light: "#F1F5F9",
          dark: "#1F1D2E",
        },
        underline: {
          light: "#F05454",
          dark: "#2563EB",
        },
        tag: {
          light: "#247881",
          dark: "#D1D9D0",
        },
        texthover: "#2563EB",
      },
      fontFamily: {
        logo: "Caveat",
        body: "Rubik",
        code: "JetBrains Mono",
        arabic: "Noto Naskh Arabic",
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
