import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Portuguese is the default language and lives at the site root.
  async rewrites() {
    return [
      { source: "/", destination: "/pt" },
      { source: "/plantas", destination: "/pt/plantas" },
    ];
  },
  async redirects() {
    return [
      { source: "/pt", destination: "/", permanent: true },
      { source: "/pt/plantas", destination: "/plantas", permanent: true },
    ];
  },
};

export default nextConfig;
