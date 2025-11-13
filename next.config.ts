import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export", // ⭐ REQUIRED for static export
  images: {
    unoptimized: true, // ⭐ Required for next/image in static export
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" }
    ]
  },
  outputFileTracingRoot: path.resolve(__dirname, "../../"),
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;
