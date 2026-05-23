import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.startmunich.de" },
      { protocol: "https", hostname: "ndb.startmunich.de" },
      { protocol: "https", hostname: "images.lumacdn.com" },
    ],
  },
};

export default nextConfig;
