import type { NextConfig } from "next";
import { sectionPages } from "./content/sections";

/** Every page that has a Portuguese version at the site root. */
const pages = ["plantas", "mandala", ...sectionPages.map(({ slug }) => slug)].join("|");

const nextConfig: NextConfig = {
  // Portuguese is the default language and lives at the site root.
  async rewrites() {
    return [
      { source: "/", destination: "/pt" },
      { source: `/:page(${pages})`, destination: "/pt/:page" },
    ];
  },
  async redirects() {
    return [
      { source: "/pt", destination: "/", permanent: true },
      { source: `/pt/:page(${pages})`, destination: "/:page", permanent: true },
    ];
  },
};

export default nextConfig;
