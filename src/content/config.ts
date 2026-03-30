import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['youtube', 'work', 'text']),
    youtube: z.string().optional(),    // YouTube 영상 ID (예: dQw4w9WgXcQ)
    image: z.string().optional(),      // 작업 이미지 경로 (예: /images/work.png)
    thumbnail: z.string().optional(),  // text 타입일 때 썸네일 (선택사항)
    description: z.string().optional(),
  }),
});

export const collections = { posts };
