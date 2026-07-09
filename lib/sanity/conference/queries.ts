import { defineQuery } from "next-sanity";

// We keep the old ones for website if needed, but rename them to be explicit, or just update them all
// Let's create a FULL projection string to reuse
const FULL_CONFERENCE_PROJECTION = `
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
    seoDescription,
    eligibility,
    eligibilityRichText,
    dressCode,
    reportingTime,
    accommodationAvailable,
    foodProvided,
    transportAvailable,
    parkingAvailable,
    certificateProvided,
    delegateKitIncluded,
    awards,
    resources,
    refundPolicy,
    cancellationPolicy,
    codeOfConduct,
    contact
`;

export const CONFERENCES_QUERY = defineQuery(
  `*[_type == "conference" && status != "draft"] | order(date desc){
    ${FULL_CONFERENCE_PROJECTION}
  }`
);

export const FEATURED_CONFERENCES_QUERY = defineQuery(
  `*[_type == "conference" && featured == true && status != "draft"] | order(date desc){
    ${FULL_CONFERENCE_PROJECTION}
  }`
);

export const CONFERENCE_BY_SLUG_QUERY = defineQuery(
  `*[_type == "conference" && slug.current == $slug][0]{
    ${FULL_CONFERENCE_PROJECTION}
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

export const SEARCH_CONFERENCES_QUERY = defineQuery(
  `*[_type == "conference" && status != "draft"] | order(date desc){
    ${FULL_CONFERENCE_PROJECTION}
  }`
);

export const UPCOMING_CONFERENCES_QUERY = defineQuery(
  `*[_type == "conference" && status == "upcoming"] | order(date asc){
    ${FULL_CONFERENCE_PROJECTION}
  }`
);

export const FULL_CONFERENCE_QUERY = defineQuery(
  `*[_type == "conference" && slug.current == $slug][0]{
    ${FULL_CONFERENCE_PROJECTION}
  }`
);
