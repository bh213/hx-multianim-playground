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
