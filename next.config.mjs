import { withContentlayer } from "next-contentlayer";

import "./src/env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
      },
    ],
  },
};

export default withContentlayer(nextConfig);
