module.exports = {
  extends: ["next", "next/core-web-vitals", "turbo", "prettier", "plugin:jsx-a11y/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  plugins: ["jsx-a11y"],
};
