import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery Collection",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "eventDate",
      title: "Event Date",
      type: "datetime",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "featured",
      title: "Featured Gallery",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineField({
          name: "galleryImage",
          title: "Gallery Image",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),

            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),

            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),

            defineField({
              name: "category",
              title: "Category",
              type: "string",
              options: {
                list: [
                  { title: "Opening Ceremony", value: "opening" },
                  { title: "Committee Session", value: "committee" },
                  { title: "Networking", value: "networking" },
                  { title: "Awards", value: "awards" },
                  { title: "Group Photo", value: "group" },
                  { title: "Other", value: "other" },
                ],
              },
            }),
          ],

          preview: {
            select: {
              title: "caption",
              media: "image",
            },
          },
        }),
      ],
    }),

    defineField({
      name: "relatedConference",
      title: "Related Conference",
      type: "reference",
      to: [{ type: "conference" }],
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "coverImage",
    },
  },
});