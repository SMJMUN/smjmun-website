import { defineQuery } from "next-sanity";

export const NAVIGATION_CONFERENCE_FIELDS = `
  title,
  "slug": slug.current,
  heroImage,
  venue,
  date,
  registrationOpen,
  status,
  featured
`;

export const FEATURED_NAVIGATION_CONFERENCE_QUERY = defineQuery(`
  *[_type == "conference" && status != "draft" && featured == true] | order(date desc)[0] {
    ${NAVIGATION_CONFERENCE_FIELDS}
  }
`);

export const UPCOMING_NAVIGATION_CONFERENCES_QUERY = defineQuery(`
  *[_type == "conference" && status != "draft" && date >= now()] | order(date asc)[0...4] {
    ${NAVIGATION_CONFERENCE_FIELDS}
  }
`);
