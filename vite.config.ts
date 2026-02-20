import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { watch } from 'fs'

function haxeHotReload() {
  return {
    name: 'haxe-hot-reload',
    configureServer(server: any) {
      const playgroundJsPath = resolve(__dirname, 'public/playground.js')
      const watcher = watch(playgroundJsPath, (eventType) => {
        if (eventType === 'change') {
          console.log('\n  Haxe rebuild detected, reloading...\n')
          server.ws.send({ type: 'full-reload', path: '*' })
        }
      })
      server.httpServer?.on('close', () => { watcher.close() })

      // Watch .manim and .anim asset files for changes
      const assetsPath = resolve(__dirname, 'public/assets')
      server.watcher.add(assetsPath)
      server.watcher.on('change', (file: string) => {
        if (file.endsWith('.manim') || file.endsWith('.anim')) {
          const publicDir = resolve(__dirname, 'public')
          const relative = file.startsWith(publicDir) ? file.slice(publicDir.length + 1) : file
          console.log(`\n  Asset changed: ${relative}, reloading...\n`)
          server.ws.send({ type: 'full-reload', path: '*' })
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), haxeHotReload()],
  base: './',
  root: 'react_src',
  server: {
    port: 3000,
    open: true,
    watch: { ignored: ['!**/public/**'] }
  },
  build: {
    outDir: '../dist',
    sourcemap: true
  },
  publicDir: '../public',
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  assetsInclude: ['**/*.manim', '**/*.anim']
})
