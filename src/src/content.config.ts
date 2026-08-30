import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each interview is a Markdown (.md) or MDX (.mdx) file in src/content/interviews/
const interviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/interviews' }),
  schema: ({ image }) => z.object({
    number: z.number(),
    title: z.string(),
    role: z.string(),
    date: z.string(),
    intro: z.string(),
    pullquote: z.string().optional(),
    pullquoteBy: z.string().optional(),
    featured: z.boolean().default(false),
    heroImage: image().optional(),   // wide landscape image for the homepage hero
    heroAlt: z.string().optional(),
    cardImage: image().optional(),   // portrait image for the interviews grid card
    cardAlt: z.string().optional(),
  }),
});

export const collections = { interviews };
