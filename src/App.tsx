import React, { useState, useEffect, useRef } from 'react';
import { PlaygroundLoader } from './PlaygroundLoader';
import { Screen, ManimFile } from './types';

function App() {
  const [selectedScreen, setSelectedScreen] = useState<string>('particles');
  const [selectedManimFile, setSelectedManimFile] = useState<string>('');
  const [manimContent, setManimContent] = useState<string>('');
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [loader] = useState(() => new PlaygroundLoader());
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Initialize the loader and make it available globally
    window.playgroundLoader = loader;
    
    // Set up event listeners for the loader
    loader.onContentChanged = (content: string) => {
      setManimContent(content);
      loader.onContentChanged(content);
    };

    return () => {
      loader.dispose();
    };
  }, [loader]);

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
        loader.reloadPlayground();
      }
    } else {
      setManimContent('');
      setShowDescription(false);
      loader.currentFile = null;
      loader.currentExample = null;
    }
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = event.target.value;
    setManimContent(content);
    loader.onContentChanged(content);
  };

  return (
    <div className="container">
      <div className="left-panel">
        <div className="screen-selector-container">
          <label className="combo-label" htmlFor="screen-selector">
            Select Screen:
          </label>
          <select
            id="screen-selector"
            className="screen-selector"
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
        
        <div className="combo-container">
          <label className="combo-label" htmlFor="example-combo">
            Select Manim File:
          </label>
          <select
            id="example-combo"
            className="example-combo"
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
          <div className="description-container" id="file-description">
            <p className="description-text">{description}</p>
          </div>
        )}
        
        <div className="text-area-container">
          <label className="text-area-label" htmlFor="manim-textarea">
            Manim File Content:
          </label>
          <textarea
            id="manim-textarea"
            ref={textareaRef}
            className="manim-textarea"
            value={manimContent}
            onChange={handleTextareaChange}
            placeholder="Select a manim file to load its content here..."
            disabled={!selectedManimFile}
          />
        </div>
      </div>
      
      <div className="right-panel">
        <canvas id="webgl"></canvas>
      </div>
    </div>
  );
}

export default App; 