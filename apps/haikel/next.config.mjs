import { withContentlayer } from "next-contentlayer";

import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ["avatars.githubusercontent.com", "ik.imagekit.io", "i.ibb.co"],
  },
};

export default withContentlayer(nextConfig);
