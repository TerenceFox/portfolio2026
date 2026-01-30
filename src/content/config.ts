import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.string(),
    tech: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects };
