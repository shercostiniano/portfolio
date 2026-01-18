import { defineField, defineType } from "sanity";

export const technology = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon name or URL",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: "Hex color code (e.g., #14b8a6)",
    }),
  ],
});
