/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: ["avatars.githubusercontent.com", "ik.imagekit.io"],
  },
};

module.exports = nextConfig;
