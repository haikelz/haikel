/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  images: {
    domains: ["avatars.githubusercontent.com", "ik.imagekit.io", "i.ibb.co"],
  },
};

module.exports = nextConfig;
