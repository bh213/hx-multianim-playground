# hx-multianim Playground - React TypeScript Version

This is a React TypeScript conversion of the original Haxe-based hx-multianim playground.

## Features

- **React Components**: Modern React functional components with hooks
- **TypeScript**: Full type safety and better development experience
- **Vite**: Fast development server and build tool
- **Same Functionality**: Maintains all the original features:
  - Screen selection (Particles, Components, Examples, etc.)
  - Manim file editing with live reload
  - WebGL canvas integration
  - File loading and caching

## Project Structure

```
src/
├── main.tsx              # React entry point
├── App.tsx               # Main application component
├── PlaygroundLoader.ts   # TypeScript version of the loader
├── types.ts              # TypeScript type definitions
└── index.css             # Styles (moved from HTML)

public/
├── res/                  # Resource files (manim, fonts, etc.)
├── sheets/               # UI sheet files
└── files/                # Animation files

vite.config.ts            # Vite configuration
tsconfig.json             # TypeScript configuration
package.json              # Dependencies and scripts
```

## Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run react:dev
```

This will start the Vite development server at `http://localhost:3000`

### Build for Production

```bash
npm run react:build
```

This creates a production build in the `dist/` directory.

### Preview Production Build

```bash
npm run react:preview
```

## Key Changes from Original

1. **React Components**: Replaced vanilla HTML/JS with React components
2. **TypeScript**: Added type safety throughout the application
3. **Modern Build System**: Using Vite instead of Haxe compilation
4. **State Management**: React hooks for state management
5. **Event Handling**: React event handlers instead of DOM event listeners

## Integration with Haxe Backend

The React frontend still integrates with the Haxe backend through:

- `window.PlaygroundMain.instance` - The main Haxe application instance
- `window.FileLoader` - File loading functionality
- `window.playgroundLoader` - The playground loader instance

## Scripts

- `npm run react:dev` - Start development server
- `npm run react:build` - Build for production
- `npm run react:preview` - Preview production build
- `npm run build` - Original Haxe build (still available)
- `npm run dev` - Original development setup (still available)

## Notes

- The original Haxe application still needs to be built and loaded for the WebGL functionality
- The React app provides the UI layer while the Haxe app handles the graphics rendering
- All manim files are loaded from the `public/res/` directory
- The canvas element with id "webgl" is still used by the Haxe application 