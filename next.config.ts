import type { NextConfig } from "next";

const basePath = process.env.VERCEL ? "" : (process.env.NODE_ENV === "production" ? "/Resume-Nextjs" : "");

const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? {} : { output: "export" }),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)",
          },
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; script-src 'self' 'unsafe-inline' ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""} https://formsubmit.co; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: blob: https:; connect-src 'self' https://formsubmit.co; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formsubmit.co;`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
