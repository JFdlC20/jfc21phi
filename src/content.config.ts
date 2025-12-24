import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content'; 

const works = defineCollection({
    loader: glob({ base: 'src/content/works', pattern: '*.md' }),
    schema: ({image}) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        category: z.enum(["Personal", "Externo", "Shorts", "Divulgación", "Branding"]),
        services: z.string().max(65),
        year: z.string().max(10),
        featuredImage: image(),
        imageTwo: image().optional(),   // Haz opcionales las imágenes
        imageThree: image().optional(),
        imageFour: image().optional(),
        videoTwo: z.string().optional(),
        videoThree: z.string().optional(),
        videoFour: z.string().optional(),
        liveSite: z.string().url(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean(),
        video: z.string().optional(),
        order: z.number().optional()
    })
})

export const collections = { works };