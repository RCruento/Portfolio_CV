import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd39zum0jwvcigt.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'www.web-creatif.net',
      },
      {
        protocol: 'https',
        hostname: 'www.radiofrance.fr',
      },
      {
        protocol: 'https',
        hostname: 'cujas.hypotheses.org',
      },
      {
        protocol: 'https',
        hostname: 'mmj.azureedge.net',
      },
      {
        protocol: 'https',
        hostname: 'www.geonov.fr',
      },
    ],
  },
};

export default nextConfig;
