import React, { useState, useEffect } from 'react';
import { PlaygroundBridge } from './PlaygroundBridge';
import Sidebar from './Sidebar';
import SourceViewer from './SourceViewer';
import './index.css';

export const DEFAULT_SCREEN = 'nav';

function App() {
  const [currentScreen, setCurrentScreen] = useState<string>(DEFAULT_SCREEN);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [showSource, setShowSource] = useState<boolean>(false);
  const [sourceContent, setSourceContent] = useState<string | null>(null);
  const [bridge] = useState(() => new PlaygroundBridge());

  useEffect(() => {
    window.playgroundLoader = bridge;
    // Parse initial screen from URL hash so Haxe can load it directly in init()
    const hash = window.location.hash;
    const match = hash.match(/screen=(\w+)/);
    (window as any).defaultScreen = match ? match[1] : DEFAULT_SCREEN;
    return () => { bridge.dispose(); };
  }, [bridge]);

  // Handle URL hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/screen=(\w+)/);
      if (match) {
        const screen = match[1];
        setCurrentScreen(screen);
        bridge.switchScreen(screen);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [bridge]);

  const handleScreenSelect = (screenName: string) => {
    setCurrentScreen(screenName);
    window.location.hash = `screen=${screenName}`;
    bridge.switchScreen(screenName);

    // Update source viewer
    const source = bridge.getSourceForScreen(screenName);
    setSourceContent(source);
  };

  const toggleSource = () => {
    if (!showSource) {
      const source = bridge.getSourceForScreen(currentScreen);
      setSourceContent(source);
    }
    setShowSource(!showSource);
  };

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white">
      <Sidebar
        currentScreen={currentScreen}
        onScreenSelect={handleScreenSelect}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex-1 flex flex-col h-full min-h-0">
        {/* Header */}
        <div className="border-b border-gray-700 flex-shrink-0 flex items-center justify-between px-6 py-3">
          <button
            onClick={() => handleScreenSelect(DEFAULT_SCREEN)}
            className="text-sm font-semibold text-gray-200 hover:text-white transition-colors tracking-wide"
          >
            hx-multianim Showcase
          </button>
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleSource}
              className={`text-xs px-2 py-0.5 rounded transition-colors ${
                showSource ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {showSource ? 'Hide Source' : 'View .manim'}
            </button>
          </div>
        </div>

        {/* Canvas + optional source viewer */}
        <div className="flex-1 flex min-h-0">
          <div className={`${showSource ? 'w-2/3' : 'w-full'} min-h-0`}>
            <canvas id="webgl" className="w-full h-full block"></canvas>
          </div>

          {showSource && (
            <div className="w-1/3 border-l border-gray-700 flex flex-col min-h-0">
              <SourceViewer source={sourceContent} visible={showSource} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
