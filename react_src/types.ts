export interface ScreenInfo {
    name: string;
    displayName: string;
    category: string;
    manimFile: string;
}

export interface CategoryInfo {
    name: string;
    screens: ScreenInfo[];
}

export interface FileLoader {
    baseUrl: string;
    resolveUrl: (url: string) => string;
    load: (url: string) => ArrayBuffer;
    stringToArrayBuffer: (str: string) => ArrayBuffer;
}

declare global {
    interface Window {
        FileLoader: FileLoader;
        playgroundLoader: any;
        PlaygroundMain: {
            instance: any;
            defaultScreen: string;
        };
    }
}
