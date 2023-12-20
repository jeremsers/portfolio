import { defineCollection, z } from "astro:content";

const projetCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      img: image().refine((img) => img.width >= 0, {
        message: "Cover image must be at least 300 pixels wide!",
      }),
      description: z.string(),
      link: z.string().optional(),
      tags: z.array(z.string()),
    }),
});

const projectlistCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      image: image().refine((img) => img.width >= 0, {
        message: "Cover image must be at least 300 pixels wide!",
      }),
      description: z.string(),
      link: z.string().optional(),
    }),
});

export const collections = {
  projet: projetCollection,
  projectlist: projectlistCollection,
};
