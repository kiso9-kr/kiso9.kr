import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kiso9.kr', // TODO: 구매한 도메인으로 변경
  integrations: [mdx()],
});
