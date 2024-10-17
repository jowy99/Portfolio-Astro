import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
    title: z.string(),
    imageUrl: z.string(),
    projectUrl: z.string().url(),
    layout: z.string(),
});

export const projects = defineCollection({
    schema: projectSchema,
});