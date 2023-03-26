/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: ["avatars.githubusercontent.com", "ik.imagekit.io", "i.ibb.co"],
  },
};

module.exports = nextConfig;
