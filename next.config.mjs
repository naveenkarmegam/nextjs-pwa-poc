

import withSerwistInit from "@serwist/next";

const revision = crypto.randomUUID();

const withSerwist = withSerwistInit({
    cacheOnNavigation: true,
    swSrc: "src/app/sw.ts",
    swDest: "public/sw.js",
    additionalPrecacheEntries: [{ url: "/~offline", revision }],
  });

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
  };
  
  export default withSerwist(nextConfig);