// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Import Zod
import { z } from "astro/zod";

const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      image: image().optional(),
      tags: z.array(z.string()).optional(),
      order: z.number(),
    }),
});

const experiencesColection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experiences" }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      position: z.string(),
      description: z.string(),
      startDate: z.number(),
      endDate: z.number().optional(),
      tags: z.array(z.string()).optional(),
      location: z.string().optional(),
    }),
});

export const collections = {
  projects: projectsCollection,
  experiences: experiencesColection,
};
