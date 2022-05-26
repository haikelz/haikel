/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
    loader: 'akamai', 
    path: '',
  },
};

module.exports = nextConfig;
