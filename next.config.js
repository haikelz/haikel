/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "ik.imagekit.io", "i.ibb.co"],
  },
};

module.exports = nextConfig;
