import { defineQuery } from "next-sanity";

export const BLOG_POSTS_QUERY = defineQuery(
  `*[_type == "blog" && (isQueuedForAutoPublish != true) && publishedAt <= now()] | order(publishedAt desc){
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    author,
    publishedAt,
    featured,
    tags
  }`
);

export const FEATURED_BLOG_POSTS_QUERY = defineQuery(
  `*[_type == "blog" && featured == true && (isQueuedForAutoPublish != true) && publishedAt <= now()] | order(publishedAt desc){
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    author,
    publishedAt,
    featured,
    tags
  }`
);

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(
  `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    author,
    publishedAt,
    featured,
    tags,
    seoTitle,
    seoDescription
  }`
);
