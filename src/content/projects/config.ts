import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        imageUrl: z.string(),
        projectUrl: z.string().url(),
        tools: z.array(z.string()).optional(),
        layout: z.string(),
    }),
  })
  
  export const collections = { projects }