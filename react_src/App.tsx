import React, { useState, useEffect } from 'react';
import { PlaygroundLoader } from './PlaygroundLoader';
import { Screen, ManimFile } from './types';
import CodeEditor from './CodeEditor';
import { updateFileContent } from './fileLoader';
import './index.css'

interface ReloadError {
  message: string;
  pos?: {
    psource: string;
    pmin: number;
    pmax: number;
  };
  token?: any;
}

function App() {
  const [selectedScreen, setSelectedScreen] = useState<string>('particles');
  const [selectedManimFile, setSelectedManimFile] = useState<string>('');
  const [manimContent, setManimContent] = useState<string>('');
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
  const [reloadError, setReloadError] = useState<ReloadError | null>(null);
  const [loader] = useState(() => new PlaygroundLoader());

  useEffect(() => {
    // Initialize the loader and make it available globally
    window.playgroundLoader = loader;
    
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
          // Don't clear errors here - let them persist
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
        // Don't clear errors here - let them persist
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
    // Don't clear errors when changing screen - let them persist
    loader.reloadPlayground(screenName);
  };

  const handleManimFileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filename = event.target.value;
    setSelectedManimFile(filename);
    // Don't clear errors when changing file - let them persist
    
    if (filename) {
      const manimFile = loader.manimFiles.find(file => file.filename === filename);
      if (manimFile) {
        setManimContent(manimFile.content || '');
        setDescription(manimFile.description);
        setShowDescription(true);
        loader.currentFile = filename;
        loader.currentExample = filename;
        setHasUnsavedChanges(false);
        loader.reloadPlayground();
      }
    } else {
      setManimContent('');
      setShowDescription(false);
      loader.currentFile = null;
      loader.currentExample = null;
      setHasUnsavedChanges(false);
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

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col w-2/5 bg-zinc-800 border-r border-zinc-700 p-2">
        <div className="mb-2">
          <label className="block mb-1 text-sm font-bold text-zinc-300" htmlFor="screen-selector">
            Select Screen:
          </label>
          <select
            id="screen-selector"
            className="w-full p-2 bg-zinc-700 border border-zinc-600 text-white text-sm rounded focus:outline-none focus:border-blue-500"
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
        
        <div className="mb-2">
          <label className="block mb-1 text-sm font-bold text-zinc-300" htmlFor="example-combo">
            Select Manim File:
          </label>
          <select
            id="example-combo"
            className="w-full p-2 bg-zinc-700 border border-zinc-600 text-white text-sm rounded focus:outline-none focus:border-blue-500"
            value={selectedManimFile}
            onChange={handleManimFileChange}
          >
            <option value="">Choose a manim file...</option>
            {loader.manimFiles.map((file: ManimFile) => (
              <option key={file.filename} value={file.filename}>
                {file.displayName}
              </option>
            ))}
          </select>
        </div>
        
        {showDescription && (
          <div className="mb-3 p-2 bg-zinc-900 border border-zinc-700 rounded">
            <p className="text-xs leading-snug text-zinc-300 m-0">{description}</p>
          </div>
        )}
        
        <div className="mb-2">
          <div className="flex items-center justify-between">
            <label className="mb-1 text-sm font-bold text-zinc-300" htmlFor="manim-editor">
              Manim File Editor:
            </label>
            {hasUnsavedChanges && (
              <button 
                className="ml-2 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition"
                onClick={saveHandler}
                title="Save changes and reload playground (Ctrl+S)"
              >
                💾 Apply Changes
              </button>
            )}
          </div>
          <div className="text-xs text-zinc-400 mb-1">💡 Tip: Use Ctrl+S to apply changes, Tab for indentation</div>
          
          {/* Test error button */}
          <button 
            className="text-xs text-yellow-400 mb-1"
            onClick={() => setReloadError({
              message: 'Test error message',
              pos: { psource: 'test.manim', pmin: 67, pmax: 71 }
            })}
          >
            Test Error Display
          </button>
          
          {/* Error display */}
          {reloadError && (
            <div className="text-xs text-red-400 mb-1 p-2 bg-red-900/20 border border-red-700 rounded">
              <div className="flex justify-between items-start">
                <div className="font-bold">❌ Parse Error:</div>
                <button 
                  className="text-red-300 hover:text-red-100 ml-2"
                  onClick={() => setReloadError(null)}
                  title="Clear error"
                >
                  ✕
                </button>
              </div>
              <div>{reloadError.message}</div>
              {errorLineInfo && (
                <div className="mt-1 text-red-300">
                  Line {errorLineInfo.line}, Column {errorLineInfo.column}
                </div>
              )}
            </div>
          )}
          
          {hasUnsavedChanges && !reloadError && (
            <div className="text-xs text-orange-400">⚠️ Unsaved changes - Click "Apply Changes" to save and reload</div>
          )}
        </div>
        <div className="flex-1 flex flex-col">
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
      </div>
      <div className="w-3/5 bg-black relative">
        <canvas id="webgl" className="w-full h-full block"></canvas>
      </div>
    </div>
  );
}

export default App; 