import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Apne CDN ka domain yahan likho

      },
    ],
  },
};

export default nextConfig;
