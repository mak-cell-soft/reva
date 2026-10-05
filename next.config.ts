import type { NextConfig } from "next";
import path from "path";

// RÉVA Consulting Next.js configuration
const nextConfig: NextConfig = {
  // Turbopack explicit root
  turbopack: {
    root: path.join(__dirname),
  },
  // Redirect root path to default locale /fr
  async redirects() {
    return [
      {
        source: '/',
        destination: '/fr',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
