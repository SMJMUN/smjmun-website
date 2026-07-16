import { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { defineQuery } from "next-sanity";
import { getAllProgramSlugs } from "@/data/programs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://smjmun.com";

  // Fetch dynamic routes from Sanity
  const conferencesQuery = defineQuery(`*[_type == "conference" && status != "draft"]{ "slug": slug.current, _updatedAt }`);
  const blogsQuery = defineQuery(`*[_type == "blog"]{ "slug": slug.current, _updatedAt }`);
  const galleriesQuery = defineQuery(`*[_type == "gallery"]{ "slug": slug.current, _updatedAt }`);

  const [conferences, blogs, galleries] = await Promise.all([
    client.fetch(conferencesQuery),
    client.fetch(blogsQuery),
    client.fetch(galleriesQuery),
  ]);

  // Static routes
  const staticDate = new Date("2025-01-01T00:00:00Z");
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: staticDate, changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${baseUrl}/conferences`, lastModified: staticDate, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/programs`, lastModified: staticDate, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: staticDate, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/gallery`, lastModified: staticDate, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: staticDate, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/media`, lastModified: staticDate, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${baseUrl}/partnerships`, lastModified: staticDate, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: staticDate, changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  // Dynamic routes
  const conferenceRoutes = conferences.map((conf: { slug: string; _updatedAt: string }) => ({
    url: `${baseUrl}/conferences/${conf.slug}`,
    lastModified: conf._updatedAt ? new Date(conf._updatedAt) : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogs.map((blog: { slug: string; _updatedAt: string }) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: blog._updatedAt ? new Date(blog._updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const galleryRoutes = galleries.map((gallery: { slug: string; _updatedAt: string }) => ({
    url: `${baseUrl}/gallery/${gallery.slug}`,
    lastModified: gallery._updatedAt ? new Date(gallery._updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Local static dynamic routes
  const programSlugs = getAllProgramSlugs();
  const programRoutes = programSlugs.map((slug) => ({
    url: `${baseUrl}/programs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...conferenceRoutes,
    ...programRoutes,
    ...blogRoutes,
    ...galleryRoutes,
  ];
}
