import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Google-Extended",
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "Bytespider",
          "cohere-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://archxngel.cv/sitemap.xml",
  };
}
