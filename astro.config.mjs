import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  output: 'server',          // 改为 server 模式
  adapter: cloudflare({
    mode: "advanced",
    imageService: "compile"
  }),
  site: 'https://dhy-8yd.pages.dev',
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})
