import { defineCollection, z } from 'astro:content';

export const books = defineCollection({
    type: 'data',
    schema: z.object({
        pages: z.number(),
        title: z.string(),
        description: z.string(),
    }),
});
