import { defineQuery } from "next-sanity";

// ─── Homepage ──────────────────────────────────────────────────────

export const HOMEPAGE_QUERY = defineQuery(
  `*[_type == "homepage" && _id == "homepage"][0]{
    _id,
    _type,
    heroTitle,
    heroSubtitle,
    heroImages,
    stats,
    partnerLogos,
    ctaText,
    ctaLink
  }`
);

// ─── Conferences ───────────────────────────────────────────────────

export const CONFERENCES_QUERY = defineQuery(
  `*[_type == "conference" && status != "draft"] | order(date desc){
    _id,
    _type,
    title,
    slug,
    heroImage,
    venue,
    date,
    registrationFee,
    capacity,
    registrationOpen,
    status,
    featured
  }`
);

export const FEATURED_CONFERENCES_QUERY = defineQuery(
  `*[_type == "conference" && featured == true && status != "draft"] | order(date desc){
    _id,
    _type,
    title,
    slug,
    heroImage,
    venue,
    date,
    registrationFee,
    status,
    featured
  }`
);

export const CONFERENCE_BY_SLUG_QUERY = defineQuery(
  `*[_type == "conference" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    heroImage,
    overview,
    venue,
    date,
    registrationFee,
    capacity,
    registrationOpen,
    registrationCloseDate,
    status,
    featured,
    committees,
    agenda,
    gallery,
    seoTitle,
    seoDescription
  }`
);

export const CONFERENCE_BY_ID_QUERY = defineQuery(
  `*[_type == "conference" && _id == $id][0]{
    _id,
    title,
    venue,
    date
  }`
);

// ─── Blog ──────────────────────────────────────────────────────────

export const BLOG_POSTS_QUERY = defineQuery(
  `*[_type == "blog"] | order(publishedAt desc){
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
  `*[_type == "blog" && featured == true] | order(publishedAt desc){
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

// ─── Gallery ────────────────────────────────────────────────────────
export const GALLERIES_QUERY = defineQuery(`
  *[_type == "gallery"] | order(eventDate desc){
    _id,
    _type,
    title,
    slug,
    coverImage,
    description,
    eventDate,
    location,
    featured,
    "photoCount": count(images),
    "conferenceTitle": relatedConference->title,
    "conferenceSlug": relatedConference->slug.current
  }
`);

export const FEATURED_GALLERY_QUERY = defineQuery(`
  *[_type == "gallery" && featured == true] | order(eventDate desc)[0]{
    _id,
    _type,
    title,
    slug,
    coverImage,
    description,
    eventDate,
    location,
    featured,
    "photoCount": count(images),
    "conferenceTitle": relatedConference->title,
    "conferenceSlug": relatedConference->slug.current
  }
`);

export const GALLERY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "gallery" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    coverImage,
    description,
    eventDate,
    location,
    featured,
    images[]{
      _key,
      image,
      alt,
      caption,
      category
    },
    "photoCount": count(images),
    "conferenceTitle": relatedConference->title,
    "conferenceSlug": relatedConference->slug.current,
    "delegateCount": relatedConference->capacity,
    "committeeCount": count(relatedConference->committees)
  }
`);

export const RELATED_GALLERIES_QUERY = defineQuery(`
  *[_type == "gallery" && slug.current != $slug] | order(eventDate desc)[0...3]{
    _id,
    _type,
    title,
    slug,
    coverImage,
    eventDate,
    location,
    "photoCount": count(images)
  }
`);

// ─── Testimonials ──────────────────────────────────────────────────

export const TESTIMONIALS_QUERY = defineQuery(
  `*[_type == "testimonial"]{
    _id,
    _type,
    name,
    role,
    quote,
    avatar,
    "conferenceName": conference->title
  }`
);

// ─── Media / Press ─────────────────────────────────────────────────

export const MEDIA_QUERY = defineQuery(
  `*[_type == "media"] | order(publishedAt desc){
    _id,
    _type,
    title,
    publisher,
    url,
    coverImage,
    publishedAt
  }`
);
