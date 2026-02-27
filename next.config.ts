import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "placekitten.com" }, // add any external host you need
      { protocol: "https", hostname: "genv-strape.greenvironment.co.in" },
    ],
  },
}

export default nextConfig;
