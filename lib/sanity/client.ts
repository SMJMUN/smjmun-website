import { createClient, type QueryParams } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: process.env.NODE_ENV === "production",
});

/**
 * Typed wrapper around `client.fetch()` with ISR revalidation.
 *
 * Usage:
 *   const posts = await sanityFetch<Blog[]>({ query: BLOG_POSTS_QUERY });
 *   const post  = await sanityFetch<Blog>({ query: BLOG_POST_BY_SLUG_QUERY, params: { slug } });
 */
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: revalidate === false ? undefined : revalidate,
      tags,
    },
  });
}
