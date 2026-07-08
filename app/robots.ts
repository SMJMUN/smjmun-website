import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/studio/", "/sanity/", "/_next/", "/admin/"],
    },
    sitemap: "https://smjmun.com/sitemap.xml",
  };
}
