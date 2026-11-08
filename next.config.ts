import type { NextConfig } from "next";
import path from "path";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  turbopack: { root: path.join(__dirname) },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
