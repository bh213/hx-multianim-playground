// Haxe Application Loader
// This script loads the Haxe application after the React app is ready

(function() {
    'use strict';
    
    // Wait for the React app to be ready
    function waitForReactApp(): void {
        if (document.getElementById('root') && (window as any).playgroundLoader) {
            console.log('React app ready, loading Haxe application...');
            loadHaxeApp();
        } else {
            setTimeout(waitForReactApp, 100);
        }
    }
    
    function loadHaxeApp(): void {
        // Load the Haxe application script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/build/playground.js';
        script.onload = function() {
            console.log('Haxe application loaded successfully');
        };
        script.onerror = function() {
            console.error('Failed to load Haxe application');
        };
        document.head.appendChild(script);
    }
    
    // Start waiting for React app
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForReactApp);
    } else {
        waitForReactApp();
    }
})(); 