import loadjs from 'loadjs';

class HaxeLoader {
  private maxRetries: number;
  private retryDelay: number;
  private timeout: number;
  private retryCount: number = 0;
  private isLoaded: boolean = false;

  constructor(config: { maxRetries?: number; retryDelay?: number; timeout?: number } = {}) {
    this.maxRetries = config.maxRetries || 5;
    this.retryDelay = config.retryDelay || 2000;
    this.timeout = config.timeout || 10000;
  }

  private waitForReactApp(): void {
    if (document.getElementById('root') && (window as any).playgroundLoader) {
      console.log('React app ready, loading Haxe application...');
      this.loadHaxeApp();
    } else {
      setTimeout(() => this.waitForReactApp(), 300);
    }
  }

  private loadHaxeApp(): void {
    console.log(`Attempting to load playground.js (attempt ${this.retryCount + 1}/${this.maxRetries + 1})`);

    const timeoutId = setTimeout(() => {
      console.error('Timeout loading playground.js');
      this.handleLoadError();
    }, this.timeout);

    loadjs('playground.js', {
      success: () => {
        clearTimeout(timeoutId);
        console.log('playground.js loaded successfully');
        this.isLoaded = true;
        this.waitForPlaygroundMain();
      },
      error: (pathsNotFound: string[]) => {
        clearTimeout(timeoutId);
        console.error('Failed to load playground.js:', pathsNotFound);
        this.handleLoadError();
      }
    });
  }

  private handleLoadError(): void {
    this.retryCount++;
    if (this.retryCount <= this.maxRetries) {
      console.log(`Retrying in ${this.retryDelay}ms... (${this.retryCount}/${this.maxRetries})`);
      setTimeout(() => this.loadHaxeApp(), this.retryDelay);
    } else {
      console.error(`Failed to load playground.js after ${this.maxRetries} retries`);
    }
  }

  private waitForPlaygroundMain(): void {
    if (typeof (window as any).PlaygroundMain !== 'undefined' && (window as any).PlaygroundMain.instance) {
      console.log('Haxe application initialized successfully');
      if ((window as any).playgroundLoader) {
        (window as any).playgroundLoader.mainApp = (window as any).PlaygroundMain.instance;
      }
    } else {
      setTimeout(() => this.waitForPlaygroundMain(), 100);
    }
  }

  public start(): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.waitForReactApp());
    } else {
      this.waitForReactApp();
    }
  }
}

const haxeLoader = new HaxeLoader({ maxRetries: 5, retryDelay: 2000, timeout: 10000 });
haxeLoader.start();
(window as any).haxeLoader = haxeLoader;
