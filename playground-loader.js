/**
 * PlaygroundLoader - Combined file and manim loader for the hx-multianim playground
 * Handles loading manim files, editing them, and reloading the playground application
 */

class PlaygroundLoader {
    constructor() {
        // Screen names from Main.hx
        this.screens = [
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
        
        this.manimFiles = [
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
        
        this.currentFile = null;
        this.currentExample = null;
        this.reloadTimeout = null;
        this.reloadDelay = 1000; // 1 second debounce
        this.mainApp = null;
        this.init();
    }
    
    init() {
        this.populateDropdown();
        this.setupEventListeners();
        this.setupFileLoader();
        this.loadAllManimFiles();
        this.waitForMainApp();
    }
    
    // Wait for the main app to be available
    waitForMainApp() {
        if (typeof PlaygroundMain !== 'undefined' && PlaygroundMain.instance) {
            this.mainApp = PlaygroundMain.instance;
            console.log("Main app loaded successfully:", this.mainApp);
        } else {
            // Retry after a short delay
            setTimeout(() => this.waitForMainApp(), 100);
        }
    }
    
    // FileLoader functionality
    setupFileLoader() {
        // Base URL that will be prepended to all URLs
        this.baseUrl = (() => {
            if (typeof window !== 'undefined' && window.location) {
                return window.location.href;
            } else if (typeof global !== 'undefined' && global.location) {
                return global.location.href;
            }
            return '';
        })();
        
        // Make FileLoader methods available globally
        window.FileLoader = {
            baseUrl: this.baseUrl,
            setBaseUrl: (url) => { this.baseUrl = url; },
            getBaseUrl: () => this.baseUrl,
            resolveUrl: (url) => this.resolveUrl(url),
            load: (url) => this.loadFile(url),
            stringToArrayBuffer: this.stringToArrayBuffer
        };
    }
    
    resolveUrl(url) {
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
    
    stringToArrayBuffer(str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
    
        for (var i=0, strLen=str.length; i<strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
    
        return buf;
    }
    
    loadFile(url) {
        // Check if this is a manim file request
        console.log("Loading file: ", url);
        const manimFile = this.manimFiles.find(file => url.includes(file.filename));
        if (manimFile && manimFile.content !== null) {
            console.log(`Loading edited content for ${manimFile.filename}`);
            return this.stringToArrayBuffer(manimFile.content);
        }
        
        // Fall back to HTTP loading for non-manim files or unloaded manim files
        const resolvedUrl = this.resolveUrl(url);
        
        const xhr = new XMLHttpRequest();
        xhr.open('GET', resolvedUrl, false);
        xhr.send();
        
        if (xhr.status === 200) {
            return this.stringToArrayBuffer(xhr.response);
        } else {
            // console.log("HTTP error! status: ", xhr.status, " for URL: ", resolvedUrl);
            return null;
            
        }
    }
    
    // Load all manim files initially
    async loadAllManimFiles() {
        for (const file of this.manimFiles) {
            try {
                const response = await fetch(`res/${file.filename}`);
                if (response.ok) {
                    file.content = await response.text();
                    console.log(`Preloaded ${file.filename}`);
                } else {
                    console.error(`Failed to load ${file.filename}: ${response.status}`);
                }
            } catch (error) {
                console.error(`Error loading ${file.filename}:`, error);
            }
        }
    }
    
    // Populate dropdown with manim files
    populateDropdown() {
        const combo = document.getElementById('example-combo');
        if (!combo) return;
        
        combo.innerHTML = '<option value="">Choose a manim file...</option>';
        
        this.manimFiles.forEach(file => {
            const option = document.createElement('option');
            option.value = file.filename;
            option.textContent = file.displayName;
            combo.appendChild(option);
        });
    }
    
    setupEventListeners() {
        const screenCombo = document.getElementById('screen-selector');
        const manimCombo = document.getElementById('example-combo');
        const textarea = document.getElementById('manim-textarea');
        
        if (screenCombo) {
            screenCombo.addEventListener('change', (e) => {
                const selectedScreen = e.target.value;
                if (selectedScreen) {
                    // Screen changed - call reload with screen name
                    this.reloadPlayground(selectedScreen);
                }
            });
        }
        
        if (manimCombo) {
            manimCombo.addEventListener('change', (e) => {
                const selectedFile = e.target.value;
                if (selectedFile) {
                    this.currentExample = selectedFile;
                    this.loadManimFile(selectedFile);
                    // Manim file changed - call reload() without screen name
                    this.reloadPlayground();
                } else {
                    this.currentExample = null;
                    this.clearTextarea();
                }
            });
        }
        
        if (textarea) {
            textarea.addEventListener('input', (e) => {
                this.onContentChanged(e.target.value);
            });
        }
    }
    
    loadManimFile(filename) {
        const textarea = document.getElementById('manim-textarea');
        const descriptionDiv = document.getElementById('file-description');
        if (!textarea) return;
        
        const manimFile = this.manimFiles.find(file => file.filename === filename);
        if (!manimFile) return;
        
        // Update textarea with content
        textarea.value = manimFile.content || 'Loading...';
        textarea.disabled = false;
        
        // Update description
        if (descriptionDiv) {
            descriptionDiv.textContent = manimFile.description;
            descriptionDiv.style.display = 'block';
        }
        
        this.currentFile = filename;
        
        console.log(`Loaded ${filename} successfully`);
    }
    
    clearTextarea() {
        const textarea = document.getElementById('manim-textarea');
        const descriptionDiv = document.getElementById('file-description');
        if (textarea) {
            textarea.value = '';
            textarea.disabled = false;
        }
        if (descriptionDiv) {
            descriptionDiv.style.display = 'none';
        }
        this.currentFile = null;
    }
    
    onContentChanged(content) {
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
    
    reloadPlayground(screenName = null) {
        console.log('Reloading playground...');
        
        // Get the screen name - use parameter if provided, otherwise get from dropdown
        let selectedScreen = screenName;
        if (!selectedScreen) {
            const screenCombo = document.getElementById('screen-selector');
            selectedScreen = screenCombo ? screenCombo.value : 'particles';
        }
        
        // Call reload with the selected screen
        console.log("Reloading with screen: ", selectedScreen);
        PlaygroundMain.instance.reload(selectedScreen);
        
        
        // Log the current example being used
        if (this.currentExample) {
            console.log(`Reloading with screen: ${selectedScreen}, current example: ${this.currentExample}`);
        }
    }
    
    getCurrentContent() {
        const textarea = document.getElementById('manim-textarea');
        return textarea ? textarea.value : '';
    }
    
    getCurrentFile() {
        return this.currentFile;
    }
    
    // Method to get edited content for the FileLoader
    getEditedContent(filename) {
        const manimFile = this.manimFiles.find(file => file.filename === filename);
        return manimFile ? manimFile.content : null;
    }
    
    // Public method to dispose the playground
    dispose() {
        if (this.mainApp && typeof this.mainApp.dispose === 'function') {
            this.mainApp.dispose();
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.playgroundLoader = new PlaygroundLoader();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PlaygroundLoader;
} 