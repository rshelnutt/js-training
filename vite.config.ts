import { defineConfig } from 'vite'
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    tailwindcss(),
    viteReact()
  ],
  assetsInclude: ['**/*.md'],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
})
