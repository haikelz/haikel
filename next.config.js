/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.statically.io", "ik.imagekit.io"],
  },
};

module.exports = nextConfig;
