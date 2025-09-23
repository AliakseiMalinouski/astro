import { z, defineCollection } from "astro:content";

export const articles = defineCollection({
    type: 'content',
    schema: ({ image }) => 
        z.object({
            putDate: z.date(),
            title: z.string(),
            description: z.string(),
            thumbnail: image().refine((img) => img.format === 'jpg', {
                message: 'Thumbnail must be a JPS format image',
            }),
        }),
});
