import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/features/blog/content",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    isDraft: z.boolean(),
    lang: z.enum(["fr", "en"]).optional().default("fr"),
    //slug: z.string(), // Explicitly define slug used in frontmatter
    // Ajoute d'autres champs que tu utilises dans ton frontmatter
  }),
});

export const collections = {
  blog: blogCollection,
};
