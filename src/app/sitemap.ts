import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nextjs-pwa-poc-yl87.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    }
  ];
}
