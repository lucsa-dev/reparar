import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Portuguese is the default language and lives at the site root.
  async rewrites() {
    return [
      { source: "/", destination: "/pt" },
      { source: "/plantas", destination: "/pt/plantas" },
      { source: "/mandala", destination: "/pt/mandala" },
    ];
  },
  async redirects() {
    return [
      { source: "/pt", destination: "/", permanent: true },
      { source: "/pt/plantas", destination: "/plantas", permanent: true },
      { source: "/pt/mandala", destination: "/mandala", permanent: true },
    ];
  },
};

export default nextConfig;
