import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    type: z.enum(['youtube', 'work', 'text', 'strudel']),
    youtube: z.string().optional(),    // YouTube 영상 ID (예: dQw4w9WgXcQ)
    image: z.string().optional(),      // 작업 이미지 경로 (예: /images/work.png)
    thumbnail: z.string().optional(),  // text 타입일 때 썸네일 (선택사항)
    description: z.string().optional(),
    code: z.string().optional(),       // Strudel live coding 코드
    section: z.string().optional(),    // 섹션 분류 (live-coding, podcast, play, etc)
    hideDate: z.boolean().optional(),  // 날짜 표시 숨김
    hideTitle: z.boolean().optional(), // 제목 표시 숨김
    centerAlign: z.boolean().optional(), // 제목·내용 가운데 정렬
    thumbnailWidth: z.string().optional(), // 썸네일 너비 (예: "60%")
    gallery: z.array(z.string()).optional(), // 스와이프 갤러리 이미지 목록
    galleryHalf: z.boolean().optional(),    // 갤러리를 50% 너비로 표시
  }),
});

export const collections = { posts };
