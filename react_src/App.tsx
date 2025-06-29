import React, { useState, useEffect, useRef } from 'react';
import { PlaygroundLoader } from './PlaygroundLoader';
import { Screen, ManimFile, AnimFile } from './types';
import CodeEditor from './CodeEditor';
import { updateFileContent } from './fileLoader';
import './index.css'

// Default configuration - single source of truth from Haxe backend
const DEFAULT_SCREEN = 'button'; // fallback default

interface ReloadError {
  message: string;
  pos?: {
    psource: string;
    pmin: number;
    pmax: number;
  };
  token?: any;
}

interface ConsoleEntry {
  type: 'log' | 'error' | 'warn' | 'info';
  message: string;
  timestamp: Date;
}

type TabType = 'playground' | 'console';

function App() {
  const [selectedScreen, setSelectedScreen] = useState<string>(DEFAULT_SCREEN);
  const [selectedManimFile, setSelectedManimFile] = useState<string>('');
  const [manimContent, setManimContent] = useState<string>('');
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [reloadError, setReloadError] = useState<ReloadError | null>(null);
  const [syncOffer, setSyncOffer] = useState<{file: string, screen: string} | null>(null);
  const [loader] = useState(() => new PlaygroundLoader());
  
  // Panel widths for resizable layout
  const [filePanelWidth, setFilePanelWidth] = useState<number>(250);
  const [editorPanelWidth, setEditorPanelWidth] = useState<number>(400);
  const [playgroundWidth, setPlaygroundWidth] = useState<number>(600);
  const [activeTab, setActiveTab] = useState<TabType>('playground');
  
  // Console capture
  const [consoleEntries, setConsoleEntries] = useState<ConsoleEntry[]>([]);
  const consoleRef = useRef<HTMLDivElement>(null);
  
  // Refs for resizing
  const filePanelRef = useRef<HTMLDivElement>(null);
  const editorPanelRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef<boolean>(false);
  const currentResizer = useRef<string>('');

  // Auto-switch to console tab when there's an error
  useEffect(() => {
    if (reloadError) {
      setActiveTab('console');
    }
  }, [reloadError]);

  // Console capture setup
  useEffect(() => {
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;
    const originalInfo = console.info;

    const addConsoleEntry = (type: 'log' | 'error' | 'warn' | 'info', ...args: any[]) => {
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
      ).join(' ');
      
      setConsoleEntries(prev => [...prev, {
        type,
        message,
        timestamp: new Date()
      }]);
    };

    console.log = (...args) => {
      originalLog(...args);
      addConsoleEntry('log', ...args);
    };

    console.error = (...args) => {
      originalError(...args);
      addConsoleEntry('error', ...args);
    };

    console.warn = (...args) => {
      originalWarn(...args);
      addConsoleEntry('warn', ...args);
    };

    console.info = (...args) => {
      originalInfo(...args);
      addConsoleEntry('info', ...args);
    };

    return () => {
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
      console.info = originalInfo;
    };
  }, []);

  // Auto-scroll console to bottom
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [consoleEntries]);

  const clearConsole = () => {
    setConsoleEntries([]);
  };


  const checkScreenSync = (filename: string) => {
    // Only check for manim files, not anim files
    if (!filename.endsWith('.manim')) {
      setSyncOffer(null);
      return;
    }
    
    // Find the screen that corresponds to this file using loader data
    const matchingScreen = loader.screens.find(screen => screen.manimFile === filename);
    
    if (matchingScreen && matchingScreen.name !== selectedScreen) {
      setSyncOffer({ file: filename, screen: matchingScreen.name });
    } else {
      setSyncOffer(null);
    }
  };

  const acceptSyncOffer = () => {
    if (syncOffer) {
      setSelectedScreen(syncOffer.screen);
      setSyncOffer(null);
      loader.reloadPlayground(syncOffer.screen);
    }
  };

  const dismissSyncOffer = () => {
    setSyncOffer(null);
  };

  const getConsoleIcon = (type: 'log' | 'error' | 'warn' | 'info') => {
    switch (type) {
      case 'error': return '❌';
      case 'warn': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📋';
    }
  };

  const getConsoleColor = (type: 'log' | 'error' | 'warn' | 'info') => {
    switch (type) {
      case 'error': return 'text-red-400';
      case 'warn': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-300';
    }
  };

  // Get default screen from Haxe backend when available
  useEffect(() => {
    const getDefaultScreen = () => {
      if ((window as any).PlaygroundMain?.defaultScreen) {
        setSelectedScreen((window as any).PlaygroundMain.defaultScreen);
      }
    };
    
    // Try immediately
    getDefaultScreen();
    
    // Also try after a short delay in case Haxe backend loads later
    const timer = setTimeout(getDefaultScreen, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize the loader and make it available globally
    window.playgroundLoader = loader;
    
    // Make default screen available globally for Haxe backend
    (window as any).defaultScreen = DEFAULT_SCREEN;
    
    // Set up event listeners for the loader
    loader.onContentChanged = (content: string) => {
      setManimContent(content);
    };

    return () => {
      loader.dispose();
    };
  }, [loader]);

  // Initialize with correct file when loader is ready
  useEffect(() => {
    if (loader.manimFiles.length > 0 && selectedScreen) {
      const screen = loader.screens.find(s => s.name === selectedScreen);
      if (screen && screen.manimFile) {
        const matchingManimFile = loader.manimFiles.find(file => file.filename === screen.manimFile);
        if (matchingManimFile) {
          setSelectedManimFile(screen.manimFile);
          setManimContent(matchingManimFile.content || '');
          setDescription(matchingManimFile.description);
          setShowDescription(true);
          loader.currentFile = screen.manimFile;
          loader.currentExample = screen.manimFile;
          setHasUnsavedChanges(false);
        }
      }
    }
  }, [loader.manimFiles, selectedScreen]);

  // Auto-select matching manim file when screen changes
  useEffect(() => {
    const screen = loader.screens.find(s => s.name === selectedScreen);
    
    if (screen && screen.manimFile) {
      const matchingManimFile = loader.manimFiles.find(file => file.filename === screen.manimFile);
      
      if (matchingManimFile) {
        setSelectedManimFile(screen.manimFile);
        setManimContent(matchingManimFile.content || '');
        setDescription(matchingManimFile.description);
        setShowDescription(true);
        loader.currentFile = screen.manimFile;
        loader.currentExample = screen.manimFile;
        setHasUnsavedChanges(false);
      }
    }
  }, [selectedScreen, loader]);

  // Ensure a file is selected when save is triggered
  const ensureFileSelected = () => {
    // If we already have a selected file, return it
    if (selectedManimFile && loader.manimFiles.find(f => f.filename === selectedManimFile)) {
      return selectedManimFile;
    }
    
    // Try to select the file that matches the current screen
    if (selectedScreen && loader.manimFiles.length > 0) {
      const screen = loader.screens.find(s => s.name === selectedScreen);
      if (screen && screen.manimFile) {
        const matchingManimFile = loader.manimFiles.find(file => file.filename === screen.manimFile);
        if (matchingManimFile) {
          setSelectedManimFile(screen.manimFile);
          if (!manimContent || manimContent.trim() === '') {
            setManimContent(matchingManimFile.content || '');
          }
          setDescription(matchingManimFile.description);
          setShowDescription(true);
          loader.currentFile = screen.manimFile;
          loader.currentExample = screen.manimFile;
          return screen.manimFile;
        }
      }
      
      // Fall back to first available file
      const firstFile = loader.manimFiles[0];
      setSelectedManimFile(firstFile.filename);
      if (!manimContent || manimContent.trim() === '') {
        setManimContent(firstFile.content || '');
      }
      setDescription(firstFile.description);
      setShowDescription(true);
      loader.currentFile = firstFile.filename;
      loader.currentExample = firstFile.filename;
      return firstFile.filename;
    }
    
    // If no screen is selected, use first available file
    if (loader.manimFiles.length > 0) {
      const firstFile = loader.manimFiles[0];
      setSelectedManimFile(firstFile.filename);
      loader.currentFile = firstFile.filename;
      loader.currentExample = firstFile.filename;
      return firstFile.filename;
    }
    
    return null;
  };

  const handleScreenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const screenName = event.target.value;
    setSelectedScreen(screenName);
    setSyncOffer(null); // Clear any pending sync offer
    loader.reloadPlayground(screenName);
  };

  const handleManimFileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filename = event.target.value;
    setSelectedManimFile(filename);
    
    if (filename) {
      // Check if it's a manim file or anim file
      if (filename.endsWith('.manim')) {
        const manimFile = loader.manimFiles.find(file => file.filename === filename);
        if (manimFile) {
          setManimContent(manimFile.content || '');
          setDescription(manimFile.description);
          setShowDescription(true);
          loader.currentFile = filename;
          loader.currentExample = filename;
          setHasUnsavedChanges(false);
          
          // Check if we should offer to sync the screen
          checkScreenSync(filename);
        }
      } else if (filename.endsWith('.anim')) {
        // For anim files, load the content and make it available to the playground
        const animFile = loader.animFiles.find(file => file.filename === filename);
        if (animFile) {
          setManimContent(animFile.content || '');
          setDescription('Animation file - content loaded and available to playground');
          setShowDescription(true);
          loader.currentFile = filename;
          loader.currentExample = filename;
          setHasUnsavedChanges(false);
          setSyncOffer(null); // No screen sync for anim files
        }
      }
    } else {
      setManimContent('');
      setShowDescription(false);
      loader.currentFile = null;
      loader.currentExample = null;
      setHasUnsavedChanges(false);
      setSyncOffer(null);
    }
  };

  const handleEditorChange = (content: string) => {
    setManimContent(content);
    setHasUnsavedChanges(true);
    // Clear errors when editing - user might be fixing the error
    if (reloadError) {
      setReloadError(null);
    }
  };

  const handleApplyChanges = () => {
    const fileToSave = ensureFileSelected();
    
    if (fileToSave) {
      // Update both the loader and the file map
      loader.updateContent(fileToSave, manimContent);
      updateFileContent(fileToSave, manimContent);
      setHasUnsavedChanges(false);
      
      if (selectedScreen) {
        const result = loader.reloadPlayground(selectedScreen);
        console.log('Reload result:', result);
        console.log('Result type:', typeof result);
        console.log('Result keys:', result ? Object.keys(result) : 'null');
        
        // Check for errors in the result
        if (result && result.__nativeException) {
          console.log('Found __nativeException:', result.__nativeException);
          const error = result.__nativeException;
          const errorInfo: ReloadError = {
            message: error.message || 'Unknown error occurred',
            pos: error.value?.pos,
            token: error.value?.token
          };
          console.log('Setting error info:', errorInfo);
          setReloadError(errorInfo);
        } else if (result && result.value && result.value.__nativeException) {
          console.log('Found nested __nativeException:', result.value.__nativeException);
          const error = result.value.__nativeException;
          const errorInfo: ReloadError = {
            message: error.message || 'Unknown error occurred',
            pos: error.value?.pos,
            token: error.value?.token
          };
          console.log('Setting error info:', errorInfo);
          setReloadError(errorInfo);
        } else {
          console.log('No error found, clearing error state');
          setReloadError(null);
        }
      }
    }
  };

  // Create a stable reference to the save handler
  const saveHandler = React.useCallback(() => {
    handleApplyChanges();
  }, [selectedManimFile, manimContent, selectedScreen, loader]);

  // Calculate error line and column from position
  const getErrorLineInfo = () => {
    if (!reloadError?.pos) return null;
    
    const { pmin, pmax } = reloadError.pos;
    const content = manimContent;
    
    // Find the line number by counting newlines before the error position
    let line = 1;
    let column = 1;
    
    for (let i = 0; i < pmin && i < content.length; i++) {
      if (content[i] === '\n') {
        line++;
        column = 1;
      } else {
        column++;
      }
    }
    
    return { line, column, start: pmin, end: pmax };
  };

  const errorLineInfo = getErrorLineInfo();

  // Resize handlers
  const handleMouseDown = (resizer: string) => (e: React.MouseEvent) => {
    isResizing.current = true;
    currentResizer.current = resizer;
    e.preventDefault();
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing.current) return;

      if (currentResizer.current === 'file') {
        const newWidth = e.clientX;
        if (newWidth > 150 && newWidth < window.innerWidth - 300) {
          setFilePanelWidth(newWidth);
        }
      } else if (currentResizer.current === 'editor') {
        const newWidth = e.clientX - filePanelWidth;
        if (newWidth > 200 && newWidth < window.innerWidth - filePanelWidth - 200) {
          setEditorPanelWidth(newWidth);
        }
      } else if (currentResizer.current === 'playground') {
        const totalWidth = window.innerWidth - filePanelWidth - editorPanelWidth - 2; // Account for resizers
        const playgroundStartX = filePanelWidth + editorPanelWidth + 2;
        const newPlaygroundWidth = e.clientX - playgroundStartX;
        const minPlaygroundWidth = 200;
        const maxPlaygroundWidth = totalWidth - 200; // Leave space for console
        
        if (newPlaygroundWidth > minPlaygroundWidth && newPlaygroundWidth < maxPlaygroundWidth) {
          setPlaygroundWidth(newPlaygroundWidth);
        }
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      currentResizer.current = '';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [filePanelWidth, editorPanelWidth]);

  return (
    <div className="flex h-screen w-screen bg-gray-900 text-white">
      {/* File Browser Panel */}
      <div 
        ref={filePanelRef}
        className="bg-gray-800 border-r border-gray-700 flex flex-col"
        style={{ width: filePanelWidth }}
      >
        <div className="p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold text-gray-200 mb-3">Files</h2>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-300">
              Screen:
            </label>
            <select
              className="w-full p-2 bg-gray-700 border border-gray-600 text-white text-sm rounded focus:outline-none focus:border-blue-500"
              value={selectedScreen}
              onChange={handleScreenChange}
            >
              {loader.screens.map((screen: Screen) => (
                <option key={screen.name} value={screen.name}>
                  {screen.displayName}
                </option>
              ))}
            </select>
          </div>
          
          {showDescription && (
            <div className="p-3 bg-gray-700 border border-gray-600 rounded">
              <p className="text-sm text-gray-300">{description}</p>
            </div>
          )}
        </div>
        
        <div className="flex-1 p-4">
          <div className="text-sm text-gray-400">
            <div className="mb-2">
              <span className="font-medium">📁 Files:</span>
            </div>
            <div className="space-y-1 scrollable" style={{ maxHeight: 'calc(100vh - 300px)' }}>
              {loader.manimFiles.map((file: ManimFile) => (
                <div 
                  key={file.filename}
                  className={`p-2 rounded cursor-pointer text-sm ${
                    selectedManimFile === file.filename 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => handleManimFileChange({ target: { value: file.filename } } as any)}
                >
                  📄 {file.filename}
                </div>
              ))}
              {loader.animFiles.map((file: AnimFile) => (
                <div 
                  key={file.filename}
                  className={`p-2 rounded cursor-pointer text-sm ${
                    selectedManimFile === file.filename 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => handleManimFileChange({ target: { value: file.filename } } as any)}
                >
                  🎬 {file.filename}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* File Panel Resizer */}
      <div 
        className="w-1 bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors"
        onMouseDown={handleMouseDown('file')}
      />

      {/* Editor Panel */}
      <div 
        ref={editorPanelRef}
        className="bg-gray-900 flex flex-col"
        style={{ width: editorPanelWidth }}
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-gray-200">Editor</h2>
            {hasUnsavedChanges && (
              <button 
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
                onClick={saveHandler}
                title="Save changes and reload playground (Ctrl+S)"
              >
                💾 Apply Changes
              </button>
            )}
          </div>
          
          {hasUnsavedChanges && !reloadError && (
            <div className="text-sm text-orange-400 mb-2">
              ⚠️ Unsaved changes - Click "Apply Changes" to save and reload
            </div>
          )}
        </div>
        
        <div className="flex-1 scrollable">
          <CodeEditor
            value={manimContent}
            onChange={handleEditorChange}
            language="haxe-manim"
            disabled={!selectedManimFile}
            placeholder="Select a manim file to load its content here..."
            onSave={saveHandler}
            errorLine={errorLineInfo?.line}
            errorColumn={errorLineInfo?.column}
            errorStart={errorLineInfo?.start}
            errorEnd={errorLineInfo?.end}
          />
        </div>
        
        {syncOffer && (
          <div className="p-3 bg-blue-900/20 border-t border-blue-700">
            <div className="flex justify-between items-start mb-2">
              <div className="font-bold text-blue-400">🔄 Screen Sync:</div>
              <button 
                className="text-blue-300 hover:text-blue-100"
                onClick={dismissSyncOffer}
                title="Dismiss"
              >
                ✕
              </button>
            </div>
            <div className="text-blue-300 mb-3">
              Switch to <strong>{loader.screens.find(s => s.name === syncOffer.screen)?.displayName || syncOffer.screen}</strong> screen to match <strong>{syncOffer.file}</strong>?
            </div>
            <div className="flex space-x-2">
              <button
                onClick={acceptSyncOffer}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
              >
                ✅ Switch Screen
              </button>
              <button
                onClick={dismissSyncOffer}
                className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded transition-colors"
              >
                ❌ Keep Current
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Editor Panel Resizer */}
      <div 
        className="w-1 bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors"
        onMouseDown={handleMouseDown('editor')}
      />

      {/* Playground/Console Panel */}
      <div className="flex-1 bg-gray-900 flex flex-col h-full min-h-0">
        <div className="border-b border-gray-700 flex-shrink-0">
          <div className="flex">
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'playground'
                  ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab('playground')}
            >
              🎮 Playground
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'console'
                  ? 'bg-gray-800 text-white border-b-2 border-blue-500'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
              onClick={() => setActiveTab('console')}
            >
              {reloadError ? '❌ Console' : '📋 Console'}
            </button>
          </div>
        </div>
        
        <div className="flex-1 flex min-h-0">
          {/* Playground Panel */}
          <div 
            className={`${activeTab === 'playground' ? 'flex-1' : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col h-full`}
            style={{ width: activeTab === 'playground' ? playgroundWidth : 0 }}
          >
            <div className="w-full h-full flex-1 min-h-0">
              <canvas id="webgl" className="w-full h-full block"></canvas>
            </div>
          </div>

          {/* Playground/Console Resizer */}
          <div 
            className="w-1 bg-gray-700 cursor-col-resize hover:bg-blue-500 transition-colors"
            onMouseDown={handleMouseDown('playground')}
          />
          
          {/* Console Panel */}
          <div className={`${activeTab === 'console' ? 'flex-1' : 'w-0'} transition-all duration-300 overflow-hidden flex flex-col h-full`}>
            <div className="p-3 border-b border-gray-700 flex justify-between items-center flex-shrink-0">
              <h3 className="text-sm font-medium text-gray-200">Console Output</h3>
              <button
                onClick={clearConsole}
                className="px-2 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors"
                title="Clear console"
              >
                🗑️ Clear
              </button>
            </div>
            
            <div 
              ref={consoleRef}
              className="flex-1 p-3 bg-gray-800 text-sm font-mono overflow-y-auto overflow-x-hidden min-h-0"
            >
              {consoleEntries.length === 0 ? (
                <div className="text-gray-400 text-center py-8">
                  <div className="text-2xl mb-2">📋</div>
                  <div>Console output will appear here.</div>
                </div>
              ) : (
                <div className="space-y-1">
                  {consoleEntries.map((entry, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-gray-500 text-xs mt-1">
                        {entry.timestamp.toLocaleTimeString()}
                      </span>
                      <span className="text-gray-500">{getConsoleIcon(entry.type)}</span>
                      <span className={`${getConsoleColor(entry.type)} break-all`}>
                        {entry.message}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              
              {reloadError && (
                <div className="mt-4 p-3 bg-red-900/20 border border-red-700 rounded">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-red-400">❌ Parse Error:</div>
                    <button 
                      className="text-red-300 hover:text-red-100"
                      onClick={() => setReloadError(null)}
                      title="Clear error"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="text-red-300 mb-2">{reloadError.message}</div>
                  {errorLineInfo && (
                    <div className="text-red-400 text-sm">
                      Line {errorLineInfo.line}, Column {errorLineInfo.column}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 