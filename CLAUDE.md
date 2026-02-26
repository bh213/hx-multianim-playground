# hx-multianim-playground

Interactive web playground for the [hx-multianim](../hx-multianim/) library. Haxe compiles to JavaScript, React provides the shell UI with navigation, source viewer, and hot reload.

Live demo: https://bh213.github.io/hx-multianim-playground/

## Architecture

```
hx-multianim-playground/
├── src/                    # Haxe source (compiles to public/playground.js)
│   ├── Main.hx            # App entry point, screen registry, resource loader
│   ├── NavScreen.hx       # Navigation hub
│   ├── DemoScreenBase.hx  # Base class for demo screens
│   ├── DemoMasterScreen.hx # Master layout (title/description + content)
│   └── screens/           # 60+ demo screens organized by category
│       ├── ui/            # Buttons, checkboxes, sliders, dropdowns, etc.
│       ├── layout/        # Static/dynamic refs, flow, repeatable, slots
│       ├── graphics/      # Bitmaps, ninepatch, text, pixels
│       ├── animation/     # State anim, particles, paths, curves
│       ├── gamelike/      # Inventory, battle HUD, skill tree, dialogue
│       └── advanced/      # Expressions, conditionals, settings, macros
├── react_src/             # React/TypeScript frontend
│   ├── App.tsx            # Main layout, URL hash routing (#screen=name)
│   ├── PlaygroundBridge.ts # Bridge between React and Haxe/WebGL
│   ├── Sidebar.tsx        # Collapsible category navigation
│   ├── SourceViewer.tsx   # .manim source code viewer with highlighting
│   ├── fileLoader.ts      # .manim/.anim file loading
│   └── haxe-loader.ts    # Dynamic playground.js loader
├── public/                # Compiled Haxe output + static assets
│   ├── playground.js      # Compiled Haxe → JS
│   └── assets/            # Sprites, atlases, fonts, .manim/.anim files
├── playground.hxml        # Haxe build config (links hx-multianim)
└── vite.config.ts         # Vite config with custom Haxe hot-reload plugin
```

## Communication Flow

React → PlaygroundBridge → Haxe Main.reload(screenName)

PlaygroundBridge defines screen categories/metadata. Haxe Main.hx mirrors these as registered screens. URL hash routing: `#screen=screenName`.

## Build & Run

```bash
# Development (Haxe build + watch + Vite dev server on port 3000)
npm install
npm run dev

# Haxe only
haxe playground.hxml

# Production build
npm run full:build    # Haxe + React + copy assets → dist/
```

## Key Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Full dev: Haxe build + watch + Vite server (port 3000, auto-opens) |
| `npm run build` | Compile Haxe to JS only |
| `npm run watch` | Watch Haxe source for changes |
| `npm run react:dev` | Vite dev server only |
| `npm run react:build` | TypeScript check + Vite production build |
| `npm run full:build` | Complete production build |
| `npm run clean` | Remove dist/ |

## Tech Stack

React 18, TypeScript, Vite, Tailwind CSS, Prism.js (syntax highlighting), Haxe → JS, Heaps (WebGL).

## Adding a New Demo Screen

1. Create `src/screens/<category>/MyDemoScreen.hx` extending `DemoScreenBase`
2. Register in `Main.hx` screen list
3. Add category/metadata in `PlaygroundBridge.ts`
4. Add `.manim` files to `public/assets/manim/<category>/`
