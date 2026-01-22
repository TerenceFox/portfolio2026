import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    role: z.string(),
    year: z.number(),
    tech: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { projects };
