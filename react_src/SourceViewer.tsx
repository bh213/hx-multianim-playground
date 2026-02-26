import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';

// Register a basic manim language definition
if (!(Prism.languages as any).manim) {
  Prism.languages['manim'] = {
    comment: /\/\/.*/,
    string: /"[^"]*"/,
    keyword: /\b(version|programmable|bitmap|text|ninepatch|placeholder|staticRef|dynamicRef|slot|spacer|interactive|layers|mask|flow|repeatable|tilegroup|stateanim|point|apply|graphics|pixels|particles|import|filter|settings|curves|paths|atlas2|animatedPath|data)\b/,
    'attr-name': /\b(sheet|generated|color|file|center|left|right|grid|hex|layout|construct|emit|tiles|loop|count|maxLife|speed|speedRandom|speedRand|gravity|gravityAngle|size|sizeRandom|sizeRand|fadeIn|fadeOut|blendMode|rotationSpeed|rotSpeed|rotateAuto|autoRotate|forwardAngle|emitSync|emitDelay|delay|lifeRandom|lifeRand|bounds|boundsMode|colorStops|sizeCurve|velocityCurve|forceFields|relative|attachTo|spawnCurve|subEmitters|cone|box|circle|path|kill|bounce|wrap|none|dist|distRand|angle|angleSpread|deg|rad|turn|up|down|easeInQuad|easeOutQuad|easeInOutQuad|easeInCubic|easeOutCubic|easeInOutCubic|linear|attractor|repulsor|vortex|wind|turbulence|pathguide|styles|images|condenseWhite|dropShadowXY|dropShadowColor|dropShadowAlpha)\b/,
    boolean: /\b(true|false)\b/,
    number: /\b0x[0-9a-fA-F]+\b|\b\d+\.?\d*\b/,
    operator: /=>|@\(|@if|@else|@default|@ifstrict|@\)|!=|>=|<=|>|</,
    punctuation: /[{}():,;]/,
    variable: /\$\w+/,
    'class-name': /#\w+/,
    tag: /@\w+/,
  };
}

interface SourceViewerProps {
  source: string | null;
  visible: boolean;
}

export default function SourceViewer({ source, visible }: SourceViewerProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current && source) {
      codeRef.current.textContent = source;
      Prism.highlightElement(codeRef.current);
    }
  }, [source]);

  if (!visible || !source) return null;

  return (
    <div className="border-t border-gray-700 flex-1 min-h-0 flex flex-col">
      <div className="px-3 py-1.5 border-b border-gray-700 text-xs font-medium text-gray-300 flex-shrink-0">
        .manim Source
      </div>
      <div className="flex-1 overflow-auto p-3 bg-gray-900">
        <pre className="text-xs leading-relaxed" style={{ margin: 0 }}>
          <code ref={codeRef} className="language-manim">
            {source}
          </code>
        </pre>
      </div>
    </div>
  );
}
