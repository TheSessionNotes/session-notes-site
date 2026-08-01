import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each interview is a Markdown file in src/content/interviews/
const interviews = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/interviews' }),
  schema: z.object({
    number: z.number(),
    title: z.string(),
    role: z.string(),
    date: z.string(),
    intro: z.string(),
    pullquote: z.string().optional(),
    pullquoteBy: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { interviews };
