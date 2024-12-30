import { defineCollection, z } from "astro:content";

// Define la colección "projects" con su esquema
const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    imageUrl: z.string(),
    projectUrl: z.string().url(),
    featured: z.boolean().optional().default(false), // Valor predeterminado "false"
    webUrl: z.string().url().optional(),
    tools: z.array(z.string()).default([]), // Array vacío como valor predeterminado
    status: z.array(z.string()).default([]), // Array vacío como valor predeterminado
    date: z.date(), // Campo obligatorio
  }),
});

export const collections = { projects };
