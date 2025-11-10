import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb"
    }
  },
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;

