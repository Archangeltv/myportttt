import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aimiuwu Victor (Archangel) — Full Stack Software Developer",
    short_name: "Archangel Portfolio",
    description:
      "Aimiuwu Victor Idahosa (Archangel) — Full Stack Software Developer from Lagos, Nigeria. Building high-performance web applications, bots, smart contracts, and Web3 systems.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0E14",
    theme_color: "#FF4500",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
