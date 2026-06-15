import { defineQuery } from "next-sanity";

// ─── Gallery Landing Page ───────────────────────────────────────────────────

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

// ─── Collection Detail Page ─────────────────────────────────────────────────

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
    "conferenceVenue": relatedConference->venue,
    "conferenceDate": relatedConference->date,
    "delegateCount": relatedConference->capacity,
    "committeeCount": count(relatedConference->committees),
    "conferenceAgenda": relatedConference->agenda
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

// ─── Filters ────────────────────────────────────────────────────────────────

/** Returns distinct years and event types for filter UI */
export const GALLERY_FILTERS_QUERY = defineQuery(`
  *[_type == "gallery"] | order(eventDate desc){
    "year": eventDate[0..3],
    eventDate,
    slug
  }
`);
