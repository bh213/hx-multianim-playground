import { Screen, ManimFile } from './types';

// Preload all .manim and .anim files as text using Vite's import.meta.glob
const manimFileModules = import.meta.glob('./assets/*.manim', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;
const animFileModules = import.meta.glob('./assets/*.anim', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

function filenameFromPath(path: string): string {
  // Vite returns './assets/filename.manim' or './assets/filename.anim'
  return path.split('/').pop()!;
}

/**
 * PlaygroundLoader - Combined file and manim loader for the hx-multianim playground
 * Handles loading manim files, editing them, and reloading the playground application
 */
export class PlaygroundLoader {
    public screens: Screen[] = [
        { 
            name: 'particles', 
            displayName: 'Particles',
            description: 'Particle system examples with various particle effects, explosions, trails, and dynamic particle animations.',
            manimFile: 'particles.manim'
        },
        { 
            name: 'components', 
            displayName: 'Components',
            description: 'Interactive UI components showcase featuring buttons, checkboxes, sliders, and other form elements with hover and press animations.',
            manimFile: 'components.manim'
        },
        { 
            name: 'examples1', 
            displayName: 'Examples 1',
            description: 'Basic animation examples demonstrating fundamental hx-multianim features including sprite animations, transitions, and simple UI elements.',
            manimFile: 'examples1.manim'
        },
        { 
            name: 'paths', 
            displayName: 'Paths',
            description: 'Path-based animations showing objects following complex paths, motion trails, and smooth movement animations.',
            manimFile: 'paths.manim'
        },
        { 
            name: 'fonts', 
            displayName: 'Fonts',
            description: 'Font rendering demonstrations with various font types, sizes, and text effects including SDF (Signed Distance Field) fonts.',
            manimFile: 'fonts.manim'
        },
        { 
            name: 'room1', 
            displayName: 'Room 1',
            description: '3D room environment with spatial animations, depth effects, and immersive 3D scene demonstrations.',
            manimFile: 'room1.manim'
        },
        { 
            name: 'stateAnim', 
            displayName: 'State Animation',
            description: 'Complex state-based animations demonstrating transitions between different UI states and conditional animations.',
            manimFile: 'stateanim.manim'
        },
        { 
            name: 'dialogStart', 
            displayName: 'Dialog Start',
            description: 'Dialog startup animations and initial dialog states with smooth entrance effects and loading sequences.',
            manimFile: 'dialog-start.manim'
        },
        { 
            name: 'settings', 
            displayName: 'Settings',
            description: 'Settings interface with configuration options, preference panels, and settings-specific UI animations.',
            manimFile: 'settings.manim'
        }
    ];
    
    public manimFiles: ManimFile[] = [
        { 
            filename: 'examples1.manim', 
            displayName: 'Examples 1',
            description: 'Basic animation examples demonstrating fundamental hx-multianim features including sprite animations, transitions, and simple UI elements.',
            content: null
        },
        { 
            filename: 'components.manim', 
            displayName: 'Components',
            description: 'Interactive UI components showcase featuring buttons, checkboxes, sliders, and other form elements with hover and press animations.',
            content: null
        },
        { 
            filename: 'dialog-base.manim', 
            displayName: 'Dialog Base',
            description: 'Dialog system foundation with base dialog layouts, text rendering, and dialog-specific animations and transitions.',
            content: null
        },
        { 
            filename: 'dialog-start.manim', 
            displayName: 'Dialog Start',
            description: 'Dialog startup animations and initial dialog states with smooth entrance effects and loading sequences.',
            content: null
        },
        { 
            filename: 'fonts.manim', 
            displayName: 'Fonts',
            description: 'Font rendering demonstrations with various font types, sizes, and text effects including SDF (Signed Distance Field) fonts.',
            content: null
        },
        { 
            filename: 'particles.manim', 
            displayName: 'Particles',
            description: 'Particle system examples with various particle effects, explosions, trails, and dynamic particle animations.',
            content: null
        },
        { 
            filename: 'paths.manim', 
            displayName: 'Paths',
            description: 'Path-based animations showing objects following complex paths, motion trails, and smooth movement animations.',
            content: null
        },
        { 
            filename: 'room1.manim', 
            displayName: 'Room 1',
            description: '3D room environment with spatial animations, depth effects, and immersive 3D scene demonstrations.',
            content: null
        },
        { 
            filename: 'settings.manim', 
            displayName: 'Settings',
            description: 'Settings interface with configuration options, preference panels, and settings-specific UI animations.',
            content: null
        },
        { 
            filename: 'stateanim.manim', 
            displayName: 'State Animation',
            description: 'Complex state-based animations demonstrating transitions between different UI states and conditional animations.',
            content: null
        }
    ];
    
    public currentFile: string | null = null;
    public currentExample: string | null = null;
    public reloadTimeout: number | null = null;
    public reloadDelay: number = 1000; // 1 second debounce
    public mainApp: any = null;
    public baseUrl: string = '';

    constructor() {
        this.init();
    }
    
    init(): void {
        this.setupFileLoader();
        this.preloadFiles();
        this.waitForMainApp();
    }
    
    preloadFiles(): void {
        // Preload manim files
        for (const [path, content] of Object.entries(manimFileModules)) {
            const filename = filenameFromPath(path);
            const manimFile = this.manimFiles.find(f => f.filename === filename);
            if (manimFile) {
                manimFile.content = content;
                console.log(`Preloaded manim file: ${filename}`);
            }
        }
        
        // Preload anim files (for reference, these are available in animFileModules)
        for (const [path] of Object.entries(animFileModules)) {
            const filename = filenameFromPath(path);
            console.log(`Preloaded anim file: ${filename}`);
        }
    }
    
    // Wait for the main app to be available
    waitForMainApp(): void {
        if (typeof window.PlaygroundMain !== 'undefined' && window.PlaygroundMain.instance) {
            this.mainApp = window.PlaygroundMain.instance;
            console.log("Main app loaded successfully:", this.mainApp);
        } else {
            setTimeout(() => this.waitForMainApp(), 100);
        }
    }
    
    // FileLoader functionality
    setupFileLoader(): void {
        // Base URL that will be prepended to all URLs
        this.baseUrl = (() => {
            if (typeof window !== 'undefined' && window.location) {
                return window.location.href;
            }
            return '';
        })();
        
        // Make FileLoader methods available globally
        window.FileLoader = {
            baseUrl: this.baseUrl,
            setBaseUrl: (url: string) => { this.baseUrl = url; },
            getBaseUrl: () => this.baseUrl,
            resolveUrl: (url: string) => this.resolveUrl(url),
            load: (url: string) => this.loadFile(url),
            stringToArrayBuffer: this.stringToArrayBuffer
        };
    }
    
    resolveUrl(url: string): string {
        if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//') || url.startsWith('file://')) {
            return url;
        }
        
        if (!this.baseUrl) {
            return url;
        }
        
        try {
            return new URL(url, this.baseUrl).href;
        } catch (e) {
            const base = this.baseUrl.endsWith('/') ? this.baseUrl : this.baseUrl + '/';
            const path = url.startsWith('/') ? url.substring(1) : url;
            return base + path;
        }
    }
    
    stringToArrayBuffer(str: string): ArrayBuffer {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
    
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
    
        return buf;
    }
    
    loadFile(url: string): ArrayBuffer {
        console.log("Loading file: ", url);
        
        // First, try to use hxd.res.load if available
        if (typeof window.hxd !== 'undefined' && window.hxd.res && window.hxd.res.load) {
            try {
                const resource = window.hxd.res.load(url);
                if (resource && resource.entry && resource.entry.getBytes) {
                    const bytes = resource.entry.getBytes();
                    console.log(`Loaded via hxd.res.load: ${url}`);
                    return this.stringToArrayBuffer(bytes.toString());
                }
            } catch (e) {
                console.log(`hxd.res.load failed for ${url}, falling back to loader`);
            }
        }
        
        // Check if this is a preloaded manim file
        const manimFile = this.manimFiles.find(file => url.includes(file.filename));
        if (manimFile && manimFile.content !== null) {
            console.log(`Loading preloaded manim content for ${manimFile.filename}`);
            return this.stringToArrayBuffer(manimFile.content);
        }
        
        // Check if this is a preloaded anim file
        const animFilename = url.split('/').pop();
        if (animFilename && animFileModules[`./assets/${animFilename}`]) {
            const content = animFileModules[`./assets/${animFilename}`];
            console.log(`Loading preloaded anim content for ${animFilename}`);
            return this.stringToArrayBuffer(content);
        }
        
        // Fall back to HTTP loading for other files
        const resolvedUrl = this.resolveUrl(url);
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', resolvedUrl, false);
        xhr.send();
        
        if (xhr.status === 200) {
            console.log(`Loaded via HTTP: ${url}`);
            return this.stringToArrayBuffer(xhr.response);
        } else {
            console.log(`HTTP loading failed for ${url}`);
            return new ArrayBuffer(0);
        }
    }
    
    onContentChanged(content: string): void {
        console.log('Content changed:', this.currentFile);
        
        // Update the content in manimFiles array
        if (this.currentFile) {
            const manimFile = this.manimFiles.find(file => file.filename === this.currentFile);
            if (manimFile) {
                manimFile.content = content;
            }
        }
        
        // Clear existing timeout
        if (this.reloadTimeout) {
            clearTimeout(this.reloadTimeout);
        }
        
        // Set new timeout for debounced reload
        this.reloadTimeout = setTimeout(() => {
            this.reloadPlayground();
        }, this.reloadDelay);
    }
    
    reloadPlayground(screenName?: string): void {
        console.log('Reloading playground...');
        
        // Get the screen name - use parameter if provided, otherwise get from dropdown
        let selectedScreen = screenName;
        if (!selectedScreen) {
            const screenCombo = document.getElementById('screen-selector') as HTMLSelectElement;
            selectedScreen = screenCombo ? screenCombo.value : 'particles';
        }
        
        // Call reload with the selected screen
        console.log("Reloading with screen: ", selectedScreen);
        if (window.PlaygroundMain?.instance) {
            window.PlaygroundMain.instance.reload(selectedScreen);
        }
        
        // Log the current example being used
        if (this.currentExample) {
            console.log(`Reloading with screen: ${selectedScreen}, current example: ${this.currentExample}`);
        }
    }
    
    getCurrentContent(): string {
        const textarea = document.getElementById('manim-textarea') as HTMLTextAreaElement;
        return textarea ? textarea.value : '';
    }
    
    getCurrentFile(): string | null {
        return this.currentFile;
    }
    
    // Method to get edited content for the FileLoader
    getEditedContent(filename: string): string | null {
        const manimFile = this.manimFiles.find(file => file.filename === filename);
        return manimFile ? manimFile.content : null;
    }
    
    // Public method to dispose the playground
    dispose(): void {
        if (this.mainApp && typeof this.mainApp.dispose === 'function') {
            this.mainApp.dispose();
        }
    }
} 