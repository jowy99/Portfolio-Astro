import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    schema: z.object({
        title: z.string(),
        imageUrl: z.string(),
        projectUrl: z.string().url(),
        webUrl: z.string().url().optional(),
        tools: z.array(z.string()).optional(),
        status: z.array(z.string()).optional(),
        date: z.date(),
        layout: z.string(),
    }),
  })
  
  export const collections = { projects }