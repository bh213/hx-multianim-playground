// Manim file loader for the playground
class ManimLoader {
    constructor() {
        this.manimFiles = [
            { filename: 'examples1.manim', displayName: 'Examples 1' },
            { filename: 'components.manim', displayName: 'Components' },
            { filename: 'dialog-base.manim', displayName: 'Dialog Base' },
            { filename: 'dialog-start.manim', displayName: 'Dialog Start' },
            { filename: 'fonts.manim', displayName: 'Fonts' },
            { filename: 'particles.manim', displayName: 'Particles' },
            { filename: 'paths.manim', displayName: 'Paths' },
            { filename: 'room1.manim', displayName: 'Room 1' },
            { filename: 'settings.manim', displayName: 'Settings' },
            { filename: 'stateanim.manim', displayName: 'State Animation' }
        ];
        
        this.currentFile = null;
        this.init();
    }
    
    init() {
        this.populateDropdown();
        this.setupEventListeners();
    }
    
    populateDropdown() {
        const combo = document.getElementById('example-combo');
        if (!combo) return;
        
        // Clear existing options except the first placeholder
        combo.innerHTML = '<option value="">Choose an example...</option>';
        
        // Add manim files
        this.manimFiles.forEach(file => {
            const option = document.createElement('option');
            option.value = file.filename;
            option.textContent = file.displayName;
            combo.appendChild(option);
        });
    }
    
    setupEventListeners() {
        const combo = document.getElementById('example-combo');
        const textarea = document.getElementById('manim-textarea');
        
        if (combo) {
            combo.addEventListener('change', (e) => {
                const selectedFile = e.target.value;
                if (selectedFile) {
                    this.loadManimFile(selectedFile);
                } else {
                    this.clearTextarea();
                }
            });
        }
        
        if (textarea) {
            // Add auto-save functionality or real-time preview
            textarea.addEventListener('input', (e) => {
                this.onContentChanged(e.target.value);
            });
        }
    }
    
    async loadManimFile(filename) {
        const textarea = document.getElementById('manim-textarea');
        if (!textarea) return;
        
        try {
            // Show loading state
            textarea.value = 'Loading...';
            textarea.disabled = true;
            
            // Load the file from the res directory
            const response = await fetch(`res/${filename}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filename}: ${response.status} ${response.statusText}`);
            }
            
            const content = await response.text();
            
            // Update textarea
            textarea.value = content;
            textarea.disabled = false;
            
            // Store current file
            this.currentFile = filename;
            
            // Trigger content change event
            this.onContentChanged(content);
            
            console.log(`Loaded ${filename} successfully`);
            
        } catch (error) {
            console.error('Error loading manim file:', error);
            textarea.value = `Error loading ${filename}:\n${error.message}`;
            textarea.disabled = false;
        }
    }
    
    clearTextarea() {
        const textarea = document.getElementById('manim-textarea');
        if (textarea) {
            textarea.value = '';
            textarea.disabled = false;
        }
        this.currentFile = null;
    }
    
    onContentChanged(content) {
        // This method can be extended to:
        // 1. Auto-save changes
        // 2. Send content to the Haxe application for real-time preview
        // 3. Validate manim syntax
        // 4. Show syntax highlighting
        
        console.log('Content changed:', this.currentFile);
        
        // For now, just log the change
        // In the future, this could trigger a preview update
        if (window.manimContentChanged) {
            window.manimContentChanged(content, this.currentFile);
        }
    }
    
    getCurrentContent() {
        const textarea = document.getElementById('manim-textarea');
        return textarea ? textarea.value : '';
    }
    
    getCurrentFile() {
        return this.currentFile;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.manimLoader = new ManimLoader();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ManimLoader;
} 