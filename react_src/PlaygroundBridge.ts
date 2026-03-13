import { ScreenInfo, CategoryInfo } from './types';
import { getFileContent, fileExists } from './fileLoader';

export const CATEGORIES: CategoryInfo[] = [
    {
        name: 'Advanced Features',
        screens: [
            { name: 'featureShowcase', displayName: 'Feature Showcase', category: 'Advanced Features', manimFile: 'demos/advanced/feature-showcase.manim' },
            { name: 'incremental', displayName: 'Incremental', category: 'Advanced Features', manimFile: 'demos/advanced/incremental.manim' },
            { name: 'interactives', displayName: 'Interactives', category: 'Advanced Features', manimFile: 'demos/advanced/interactives.manim' },
            { name: 'conditionals', displayName: 'Conditionals', category: 'Advanced Features', manimFile: 'demos/advanced/conditionals.manim' },
            { name: 'expressions', displayName: 'Expressions', category: 'Advanced Features', manimFile: 'demos/advanced/expressions.manim' },
            { name: 'settings', displayName: 'Settings', category: 'Advanced Features', manimFile: 'demos/advanced/settings.manim' },
            { name: 'macroPerformance', displayName: 'Macro Performance', category: 'Advanced Features', manimFile: 'demos/advanced/macro-performance.manim' },
        ]
    },
    {
        name: 'UI Components',
        screens: [
            { name: 'buttons', displayName: 'Buttons', category: 'UI Components', manimFile: 'demos/ui/buttons-demo.manim' },
            { name: 'checkboxes', displayName: 'Checkboxes', category: 'UI Components', manimFile: 'demos/ui/checkboxes-demo.manim' },
            { name: 'sliders', displayName: 'Sliders', category: 'UI Components', manimFile: 'demos/ui/sliders.manim' },
            { name: 'dropdowns', displayName: 'Dropdowns', category: 'UI Components', manimFile: 'demos/ui/dropdowns.manim' },
            { name: 'scrollableList', displayName: 'Scrollable List', category: 'UI Components', manimFile: 'demos/ui/scrollable-list.manim' },
            { name: 'radio', displayName: 'Radio Buttons', category: 'UI Components', manimFile: 'demos/ui/radio.manim' },
            { name: 'progressBar', displayName: 'Progress Bars', category: 'UI Components', manimFile: 'demos/ui/progress-bar.manim' },
            { name: 'draggable', displayName: 'Draggable', category: 'UI Components', manimFile: 'demos/ui/draggable.manim' },
            { name: 'dialogs', displayName: 'Dialogs', category: 'UI Components', manimFile: 'demos/ui/dialogs.manim' },
            { name: 'tabs', displayName: 'Tabs', category: 'UI Components', manimFile: 'demos/ui/tabs-demo.manim' },
            { name: 'textInput', displayName: 'Text Input', category: 'UI Components', manimFile: 'demos/ui/textinput-demo.manim' },
            { name: 'tooltipsPanels', displayName: 'Tooltips & Panels', category: 'UI Components', manimFile: 'demos/ui/tooltips-panels.manim' },
        ]
    },
    {
        name: 'Layout & Composition',
        screens: [
            { name: 'staticRefs', displayName: 'Static Refs', category: 'Layout & Composition', manimFile: 'demos/layout/static-refs.manim' },
            { name: 'dynamicRefs', displayName: 'Dynamic Refs', category: 'Layout & Composition', manimFile: 'demos/layout/dynamic-refs.manim' },
            { name: 'flowLayout', displayName: 'Flow Layout', category: 'Layout & Composition', manimFile: 'demos/layout/flow-layout.manim' },
            { name: 'repeatable', displayName: 'Repeatable', category: 'Layout & Composition', manimFile: 'demos/layout/repeatable.manim' },
            { name: 'slots', displayName: 'Slots', category: 'Layout & Composition', manimFile: 'demos/layout/slots.manim' },
            { name: 'comboStates', displayName: 'Combo States', category: 'Layout & Composition', manimFile: 'demos/layout/combo-states.manim' },
        ]
    },
    {
        name: 'Graphics & Rendering',
        screens: [
            { name: 'bitmapsAtlas', displayName: 'Bitmaps & Atlas', category: 'Graphics & Rendering', manimFile: 'demos/graphics/bitmaps-atlas.manim' },
            { name: 'ninepatch', displayName: 'Ninepatch', category: 'Graphics & Rendering', manimFile: 'demos/graphics/ninepatch.manim' },
            { name: 'textFonts', displayName: 'Text & Fonts', category: 'Graphics & Rendering', manimFile: 'demos/graphics/text-fonts.manim' },
            { name: 'richText', displayName: 'Rich Text', category: 'Graphics & Rendering', manimFile: 'demos/graphics/rich-text.manim' },
            { name: 'richTextAutofit', displayName: 'Rich Text AutoFit', category: 'Graphics & Rendering', manimFile: 'demos/graphics/rich-text-autofit.manim' },
            { name: 'pixelsGraphics', displayName: 'Pixels & Graphics', category: 'Graphics & Rendering', manimFile: 'demos/graphics/pixels-graphics.manim' },
        ]
    },
    {
        name: 'Animation & Effects',
        screens: [
            { name: 'stateAnim', displayName: 'State Animations', category: 'Animation & Effects', manimFile: 'demos/animation/state-anim.manim' },
            { name: 'particles', displayName: 'Particles', category: 'Animation & Effects', manimFile: 'demos/animation/particles-basics.manim' },
            { name: 'paths', displayName: 'Paths', category: 'Animation & Effects', manimFile: 'demos/animation/paths.manim' },
            { name: 'curves', displayName: 'Curves', category: 'Animation & Effects', manimFile: 'demos/animation/curves.manim' },
            { name: 'animPath', displayName: 'Anim Paths', category: 'Animation & Effects', manimFile: 'demos/animation/anim-path.manim' },
            { name: 'filters', displayName: 'Filters', category: 'Animation & Effects', manimFile: 'demos/animation/filters.manim' },
            { name: 'floatingText', displayName: 'Floating Text', category: 'Animation & Effects', manimFile: 'demos/animation/floating-text.manim' },
            { name: 'transitions', displayName: 'Transitions', category: 'Animation & Effects', manimFile: 'demos/animation/transitions.manim' },
        ]
    },
    {
        name: 'Game-Like Demos',
        screens: [
            { name: 'inventory', displayName: 'Inventory Grid', category: 'Game-Like Demos', manimFile: 'demos/gamelike/inventory.manim' },
            { name: 'characterSheet', displayName: 'Character Sheet', category: 'Game-Like Demos', manimFile: 'demos/gamelike/character-sheet.manim' },
            { name: 'blob47', displayName: 'Blob47 Autotile', category: 'Game-Like Demos', manimFile: 'demos/gamelike/blob47.manim' },
            { name: 'battleHud', displayName: 'Battle HUD', category: 'Game-Like Demos', manimFile: 'demos/gamelike/battle-hud.manim' },
            { name: 'skillTree', displayName: 'Skill Tree', category: 'Game-Like Demos', manimFile: 'demos/gamelike/skill-tree.manim' },
            { name: 'dialogue', displayName: 'Dialogue Box', category: 'Game-Like Demos', manimFile: 'demos/gamelike/dialogue.manim' },
            { name: 'statusEffects', displayName: 'Status Effects', category: 'Game-Like Demos', manimFile: 'demos/gamelike/status-effects.manim' },
            { name: 'cards', displayName: 'Cards', category: 'Game-Like Demos', manimFile: 'demos/gamelike/cards-demo.manim' },
            { name: 'gridComponent', displayName: 'Grid Component', category: 'Game-Like Demos', manimFile: 'demos/gamelike/grid-demo.manim' },
        ]
    }
];

export class PlaygroundBridge {
    public mainApp: any = null;
    public currentScreen: string | null = null;

    constructor() {
        this.setupFileLoader();
        this.waitForMainApp();
    }

    private setupFileLoader(): void {
        const baseUrl = window.location?.href || '';
        window.FileLoader = {
            baseUrl,
            resolveUrl: (url: string) => {
                if (url.startsWith('http') || url.startsWith('//') || url.startsWith('file://')) return url;
                try { return new URL(url, baseUrl).href; } catch { return baseUrl + url; }
            },
            load: (url: string) => this.loadFile(url),
            stringToArrayBuffer: this.stringToArrayBuffer
        };
    }

    private waitForMainApp(): void {
        const instance = window.PlaygroundMain?.instance;
        // Check screenManager to ensure init() has completed
        if (instance && instance.screenManager) {
            this.mainApp = instance;
            // Apply pending screen from URL hash that arrived before Haxe was ready
            if (this.currentScreen && this.currentScreen !== 'nav') {
                this.switchScreen(this.currentScreen);
            }
        } else {
            setTimeout(() => this.waitForMainApp(), 100);
        }
    }

    private stringToArrayBuffer(str: string): ArrayBuffer {
        return new TextEncoder().encode(str).buffer;
    }

    private loadFile(url: string): ArrayBuffer {
        const content = this.findFileContent(url);
        if (content) return this.stringToArrayBuffer(content);
        // Fallback: synchronous HTTP
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        if (xhr.status === 200) return this.stringToArrayBuffer(xhr.response);
        return new ArrayBuffer(0);
    }

    private findFileContent(url: string): string | null {
        const clean = url.split('?')[0].split('#')[0];
        // Try exact match (e.g., "demos/ui/buttons.manim")
        let content = getFileContent(clean);
        if (content) return content;
        // Try path after '/assets/' (e.g., "http://localhost:3000/assets/demos/ui/buttons.manim")
        const assetsIdx = clean.indexOf('/assets/');
        if (assetsIdx >= 0) {
            content = getFileContent(clean.substring(assetsIdx + '/assets/'.length));
            if (content) return content;
        }
        // Try just the basename (e.g., "std.manim")
        const parts = clean.split('/');
        const basename = parts[parts.length - 1];
        if (basename) {
            content = getFileContent(basename);
            if (content) return content;
        }
        return null;
    }

    public switchScreen(screenName: string): any {
        this.currentScreen = screenName;
        if (window.PlaygroundMain?.instance) {
            try {
                // Use lightweight navigateTo for slide transitions;
                // reload() is only needed when .manim files change.
                window.PlaygroundMain.instance.navigateTo(screenName);
                return { success: true, error: null, file: null, line: null, col: null };
            } catch (error) {
                console.error('Failed to switch screen:', error);
                return null;
            }
        }
        return null;
    }

    public getSourceForScreen(screenName: string): string | null {
        for (const cat of CATEGORIES) {
            const screen = cat.screens.find(s => s.name === screenName);
            if (screen) {
                return getFileContent(screen.manimFile);
            }
        }
        return null;
    }

    public dispose(): void {
        if (this.mainApp && typeof this.mainApp.dispose === 'function') {
            this.mainApp.dispose();
        }
    }
}
