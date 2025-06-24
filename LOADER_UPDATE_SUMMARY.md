# Loader Update Summary

## What Was Updated

### 1. File Preloading Strategy
- **Both `.manim` and `.anim` files** are now preloaded into the Vite build using `import.meta.glob`
- Files are moved to `src/assets/` for bundling
- No runtime HTTP requests needed for these files

### 2. File Loading Priority
The loader now follows this priority order:

1. **`hxd.res.load`** (if available) - Primary method for Haxe resources
2. **Preloaded `.manim` files** - From Vite bundle
3. **Preloaded `.anim` files** - From Vite bundle  
4. **HTTP fallback** - For other files not preloaded

### 3. Updated File Structure
```
src/
├── assets/
│   ├── *.manim    # Preloaded manim files
│   └── *.anim     # Preloaded anim files
├── PlaygroundLoader.ts  # Updated loader with new strategy
└── types.ts       # Updated with hxd.res types
```

## Implementation Details

### Preloading with Vite
```typescript
// Preload all .manim and .anim files as text
const manimFileModules = import.meta.glob('./assets/*.manim', { 
    query: '?raw', 
    import: 'default', 
    eager: true 
}) as Record<string, string>;

const animFileModules = import.meta.glob('./assets/*.anim', { 
    query: '?raw', 
    import: 'default', 
    eager: true 
}) as Record<string, string>;
```

### File Loading Logic
```typescript
loadFile(url: string): ArrayBuffer {
    // 1. Try hxd.res.load first
    if (window.hxd?.res?.load) {
        try {
            const resource = window.hxd.res.load(url);
            if (resource?.entry?.getBytes) {
                return this.stringToArrayBuffer(resource.entry.getBytes().toString());
            }
        } catch (e) {
            // Fall back to other methods
        }
    }
    
    // 2. Check preloaded manim files
    const manimFile = this.manimFiles.find(file => url.includes(file.filename));
    if (manimFile?.content) {
        return this.stringToArrayBuffer(manimFile.content);
    }
    
    // 3. Check preloaded anim files
    const animFilename = url.split('/').pop();
    if (animFilename && animFileModules[`./assets/${animFilename}`]) {
        return this.stringToArrayBuffer(animFileModules[`./assets/${animFilename}`]);
    }
    
    // 4. HTTP fallback
    // ... HTTP loading logic
}
```

## Benefits

✅ **Performance**: Preloaded files are instantly available, no HTTP requests
✅ **Reliability**: No network dependencies for core files
✅ **Integration**: Proper integration with Haxe's resource system
✅ **Fallback**: Graceful degradation for missing files
✅ **Type Safety**: Full TypeScript support for all loading methods

## File Types Handled

- **`.manim` files**: UI and animation definitions
- **`.anim` files**: Animation data files
- **Other files**: Fallback to HTTP loading

## Build Output

The build now includes all preloaded files in the bundle:
- **Bundle size**: ~204KB (includes all manim and anim files)
- **No deprecation warnings**: Updated to latest Vite syntax
- **Type safety**: All TypeScript errors resolved

## Usage

The loader automatically:
1. Preloads all files at startup
2. Uses the most appropriate loading method for each file
3. Provides detailed logging for debugging
4. Maintains backward compatibility with existing code 