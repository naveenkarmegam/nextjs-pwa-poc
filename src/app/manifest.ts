import type { MetadataRoute } from "next";

interface ManifestScreenshot {
  src: string;
  sizes?: string;
  type?: string;
  form_factor?: "narrow" | "wide";
}

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nuke Pc",
    short_name: "NukePc",
    description: "we build people before we build pc",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait",
    id: "/",
    icons: [
      {
        src: "/icon/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    
    screenshots: [
      {
        src: "/screenshot/screenshot-mobile.png",
        sizes: "525x1163",
        type: "image/png",
        form_factor: "narrow",
      },
      {
        src: "/screenshot/screenshot-desktop.png",
        sizes: "1918x1045",
        type: "image/png",
        form_factor: "wide",
      },
    ] as ManifestScreenshot[],
  };
}
