import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Portuguese is the default language and lives at the site root.
  async rewrites() {
    return [{ source: "/", destination: "/pt" }];
  },
  async redirects() {
    return [{ source: "/pt", destination: "/", permanent: true }];
  },
};

export default nextConfig;
