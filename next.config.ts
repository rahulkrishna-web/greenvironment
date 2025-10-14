import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "picsum.photos",
      "placekitten.com", // add any external host you need
    ],
  },
}

export default nextConfig;
