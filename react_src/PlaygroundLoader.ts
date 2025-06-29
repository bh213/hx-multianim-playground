import { Screen, ManimFile } from './types';
import { getFileContent, updateFileContent, fileExists } from './fileLoader';

/**
 * PlaygroundLoader - Combined file and manim loader for the hx-multianim playground
 * Handles loading manim files, editing them, and reloading the playground application
 */
export class PlaygroundLoader {
    public screens: Screen[] = [
        { 
            name: 'slider', 
            displayName: 'Slider Test',
            description: 'Slider component test screen with interactive slider controls and screen selection functionality.',
            manimFile: 'slider.manim'
        },
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
            filename: 'slider.manim', 
            displayName: 'Slider Test',
            description: 'Slider component test screen with interactive slider controls and screen selection functionality.',
            content: null
        },
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
        },
        { 
            filename: 'std.manim', 
            displayName: 'Standard Library',
            description: 'Standard library components and utilities for hx-multianim including common animations, effects, and helper functions.',
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
        this.loadFilesFromMap();
        this.waitForMainApp();
    }
    
    loadFilesFromMap(): void {
        // Load content from fileMap into manimFiles array
        this.manimFiles.forEach(file => {
            const content = getFileContent(file.filename);
            if (content) {
                file.content = content;
            }
        });
    }
    
    // Wait for the main app to be available
    waitForMainApp(): void {
        if (typeof window.PlaygroundMain !== 'undefined' && window.PlaygroundMain.instance) {
            this.mainApp = window.PlaygroundMain.instance;
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
        const filename = this.extractFilenameFromUrl(url);
        
        if (filename && fileExists(filename)) { 
            const content = getFileContent(filename);
            if (content) {
                return this.stringToArrayBuffer(content);
            }
        }
        
        // Try Haxe loader as fallback
        if (typeof window.hxd !== 'undefined' && window.hxd.res && window.hxd.res.load) {
            try {
                const resource = window.hxd.res.load(url);
                if (resource && resource.entry && resource.entry.getBytes) {
                    const bytes = resource.entry.getBytes();
                    return this.stringToArrayBuffer(bytes.toString());
                }
            } catch (e) {
                // Haxe loader failed, continue to HTTP fallback
            }
        }

        // Fall back to HTTP loading
        const resolvedUrl = this.resolveUrl(url);
        const xhr = new XMLHttpRequest();
        xhr.open('GET', resolvedUrl, false);
        xhr.send();
        if (xhr.status === 200) {
            return this.stringToArrayBuffer(xhr.response);
        } else {
            return new ArrayBuffer(0);
        }
    }
    
    private extractFilenameFromUrl(url: string): string | null {
        // Handle various URL formats:
        // - "assets/filename.manim"
        // - "/assets/filename.manim"
        // - "filename.manim"
        // - "http://.../filename.manim"
        
        // Remove query parameters and hash
        const cleanUrl = url.split('?')[0].split('#')[0];
        
        // Extract filename from path
        const pathParts = cleanUrl.split('/');
        const filename = pathParts[pathParts.length - 1];
        
        // Validate it's a supported file type
        if (filename && (filename.endsWith('.manim') || filename.endsWith('.anim') || 
                        filename.endsWith('.png') || filename.endsWith('.atlas2') || 
                        filename.endsWith('.fnt') || filename.endsWith('.tps'))) {
            return filename;
        }
        
        return null;
    }
    
    onContentChanged(content: string): void {
        // Update the content in manimFiles array
        if (this.currentFile) {
            const manimFile = this.manimFiles.find(file => file.filename === this.currentFile);
            if (manimFile) {
                manimFile.content = content;
                // Also update the file map
                updateFileContent(this.currentFile, content);
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
    
    reloadPlayground(screenName?: string): any {
        // Get the screen name - use parameter if provided, otherwise get from dropdown
        let selectedScreen = screenName;
        if (!selectedScreen) {
            const screenCombo = document.getElementById('screen-selector') as HTMLSelectElement;
            selectedScreen = screenCombo ? screenCombo.value : 'particles';
        }
        
        // Call reload with the selected screen
        if (window.PlaygroundMain?.instance) {
            try {
                const res = window.PlaygroundMain.instance.reload(selectedScreen, true);
                console.log('PlaygroundLoader reload result:', res);
                console.log('Result type:', typeof res);
                console.log('Result keys:', res ? Object.keys(res) : 'null');
                if (res && res.__nativeException) {
                    console.log('Error in reload result:', res.__nativeException);
                }
                return res;
            } catch (error) {
                console.log('Exception during reload:', error);
                return { __nativeException: error };
            }
        }
        return null;
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
    
    // Public method to update content without triggering reload (for Save button)
    updateContent(filename: string, content: string): void {
        const manimFile = this.manimFiles.find(file => file.filename === filename);
        if (manimFile) {
            manimFile.content = content;
            // Also update the file map
            updateFileContent(filename, content);
        }
    }
    
    // Public method to dispose the playground
    dispose(): void {
        if (this.mainApp && typeof this.mainApp.dispose === 'function') {
            this.mainApp.dispose();
        }
    }
} 