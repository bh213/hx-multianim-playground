import React, { useState, useEffect } from 'react';
import { PlaygroundLoader } from './PlaygroundLoader';
import { Screen, ManimFile } from './types';
import CodeEditor from './CodeEditor';
import { updateFileContent } from './fileLoader';
import './index.css'

function App() {
  const [selectedScreen, setSelectedScreen] = useState<string>('particles');
  const [selectedManimFile, setSelectedManimFile] = useState<string>('');
  const [manimContent, setManimContent] = useState<string>('');
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState<boolean>(false);
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
    loader.reloadPlayground(screenName);
  };

  const handleManimFileChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filename = event.target.value;
    setSelectedManimFile(filename);
    
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
  };

  const handleApplyChanges = () => {
    const fileToSave = ensureFileSelected();
    
    if (fileToSave) {
      // Update both the loader and the file map
      loader.updateContent(fileToSave, manimContent);
      updateFileContent(fileToSave, manimContent);
      setHasUnsavedChanges(false);
      
      if (selectedScreen) {
        loader.reloadPlayground(selectedScreen);
      }
    }
  };

  // Create a stable reference to the save handler
  const saveHandler = React.useCallback(() => {
    handleApplyChanges();
  }, [selectedManimFile, manimContent, selectedScreen, loader]);

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
          {hasUnsavedChanges && (
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