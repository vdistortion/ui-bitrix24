export type ClassListType = string[] | Record<string, boolean>;

export function getClassName(classList: ClassListType) {
  if (Array.isArray(classList)) return classList.join(' ');

  return Object.entries(classList)
    .reduce((acc: string[], [name, isName]) => {
      if (isName) acc.push(name);
      return acc;
    }, [])
    .join(' ');
}
