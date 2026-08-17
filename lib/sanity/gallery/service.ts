import { sanityFetch } from "../client";
import {
  GALLERIES_QUERY,
  FEATURED_GALLERY_QUERY,
  GALLERY_BY_SLUG_QUERY,
  RELATED_GALLERIES_QUERY,
  GALLERY_BY_CONFERENCE_SLUG_QUERY,
} from "./queries";
import type { Gallery } from "./types";

export class GalleryService {
  static async getGalleries(): Promise<Gallery[]> {
    return sanityFetch<Gallery[]>({
      query: GALLERIES_QUERY,
      tags: ["gallery"],
    });
  }

  static async getFeaturedGallery(): Promise<Gallery | null> {
    return sanityFetch<Gallery | null>({
      query: FEATURED_GALLERY_QUERY,
      tags: ["gallery"],
    });
  }

  static async getGalleryBySlug(slug: string): Promise<Gallery | null> {
    return sanityFetch<Gallery | null>({
      query: GALLERY_BY_SLUG_QUERY,
      params: { slug },
      tags: ["gallery", `gallery:${slug}`],
    });
  }

  static async getRelatedGalleries(slug: string): Promise<Gallery[]> {
    return sanityFetch<Gallery[]>({
      query: RELATED_GALLERIES_QUERY,
      params: { slug },
      tags: ["gallery"],
    });
  }

  static async getGalleryByConferenceSlug(slug: string): Promise<Gallery | null> {
    return sanityFetch<Gallery | null>({
      query: GALLERY_BY_CONFERENCE_SLUG_QUERY,
      params: { slug },
      tags: ["gallery", `conference:${slug}`],
    });
  }
}
