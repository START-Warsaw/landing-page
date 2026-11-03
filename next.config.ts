import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.startwarsaw.org" },
      { protocol: "https", hostname: "ndb.startwarsaw.org" },
      { protocol: "https", hostname: "images.lumacdn.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/apply-now",
        destination: "/apply",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "https://start-jobs-six.vercel.app/jobs",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
