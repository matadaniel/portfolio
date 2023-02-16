import { defineConfig } from 'astro/config'

// https://astro.build/config
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  markdown: { shikiConfig: { theme: 'dark-plus', wrap: true } },
})
