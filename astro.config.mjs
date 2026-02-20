import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    mode: "advanced",
    imageService: "compile"
  }),
  site: 'https://callmedongt.vip',
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})
