import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1311wbk6unapo.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
