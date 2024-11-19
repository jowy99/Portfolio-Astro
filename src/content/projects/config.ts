import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    projectUrl: z.string().url(),
    tools: z.array(z.string()).optional(),
    layout: z.string(),
});

export const projects = defineCollection({
    schema: projectSchema,
});