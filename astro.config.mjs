// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig, fontProviders } from "astro/config"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "DM Sans",
      cssVariable: "--font-dm-sans",
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Playfair Display",
      cssVariable: "--font-playfair-display",
      fallbacks: ["serif"],
    },
  ],
})
