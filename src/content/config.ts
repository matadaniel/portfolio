import { z, defineCollection } from 'astro:content'

const dateString = z.string().transform(str => new Date(str))

const baseBlogSchema = z
  .object({
    title: z.string(),
    series: z.string().optional(),
  })
  .strict()

const blog = defineCollection({
  schema: z.discriminatedUnion('isDraft', [
    baseBlogSchema.extend({
      isDraft: z.literal(false),
      description: z.string(),
      tags: z.array(z.string()),
      publishDate: dateString,
      updateDate: dateString.optional(),
    }),
    baseBlogSchema.extend({
      isDraft: z.literal(true),
      draftDate: dateString,
    }),
  ]),
})

export const collections = { blog }
