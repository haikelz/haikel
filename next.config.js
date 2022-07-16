/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.statically.io"],
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
