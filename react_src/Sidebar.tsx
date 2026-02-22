import React, { useState } from 'react';
import { CATEGORIES } from './PlaygroundBridge';

interface SidebarProps {
  currentScreen: string;
  onScreenSelect: (screenName: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export default function Sidebar({ currentScreen, onScreenSelect, collapsed, onToggleCollapse }: SidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(CATEGORIES.map(c => c.name))
  );

  const toggleCategory = (name: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  if (collapsed) {
    return (
      <div className="w-10 bg-gray-800 border-r border-gray-700 flex flex-col items-center pt-3">
        <button
          onClick={onToggleCollapse}
          className="text-gray-400 hover:text-white text-xs p-1"
          title="Expand sidebar"
        >
          &raquo;
        </button>
      </div>
    );
  }

  return (
    <div className="w-[250px] bg-gray-800 border-r border-gray-700 flex flex-col h-full">
      <div className="px-4 py-3 border-b border-gray-700 flex items-center justify-between">
        <button
          onClick={() => onScreenSelect('nav')}
          className="text-base font-bold text-gray-100 hover:text-blue-300 transition-colors"
        >Demos</button>
        <button
          onClick={onToggleCollapse}
          className="text-gray-400 hover:text-white text-sm px-2 py-1"
          title="Collapse sidebar"
        >
          &laquo;
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollable p-2">
        {CATEGORIES.map(cat => (
          <div key={cat.name} className="mb-1">
            <button
              onClick={() => toggleCategory(cat.name)}
              className="w-full text-left px-2 py-1.5 text-sm font-medium text-gray-400 hover:text-gray-200 flex items-center"
            >
              <span className="mr-1.5 text-[10px]">
                {expandedCategories.has(cat.name) ? '\u25BE' : '\u25B8'}
              </span>
              {cat.name}
            </button>

            {expandedCategories.has(cat.name) && (
              <div className="ml-6">
                {cat.screens.map(screen => (
                  <button
                    key={screen.name}
                    onClick={() => onScreenSelect(screen.name)}
                    className={`w-full text-left px-3 py-1 text-xs rounded transition-colors ${
                      currentScreen === screen.name
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {screen.displayName}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
