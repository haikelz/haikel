/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "raw.githubusercontent.com",
      "cdn.statically.io",
      "ik.imagekit.io",
    ],
    loader: "akamai",
    path:
      "https://avatars.githubusercontent.com/u/77146709?v=4" ||
      "https://cdn.statically.io/gh/haikelz/website/8086598b/public/img/taken.svg",
  },
};

module.exports = nextConfig;
