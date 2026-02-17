const manimFiles = import.meta.glob('../public/assets/**/*.manim', { query: '?raw', import: 'default', eager: true });
const animFiles = import.meta.glob('../public/assets/**/*.anim', { query: '?raw', import: 'default', eager: true });

const fileMap: Record<string, string> = Object.fromEntries([
  ...Object.entries(manimFiles).map(([path, content]) => {
    const filename = path.replace('../public/assets/', '');
    return [filename, content as string];
  }),
  ...Object.entries(animFiles).map(([path, content]) => {
    const filename = path.replace('../public/assets/', '');
    return [filename, content as string];
  })
]);

export default fileMap;

export const getFileContent = (filename: string): string | null => {
  return fileMap[filename] || null;
};

export const updateFileContent = (filename: string, content: string): void => {
  fileMap[filename] = content;
};

export const getAvailableFiles = (): string[] => {
  return Object.keys(fileMap);
};

export const fileExists = (filename: string): boolean => {
  return filename in fileMap;
};
