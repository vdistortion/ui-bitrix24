type ClassListType = Record<string, boolean>;

export function getClassName(classList: ClassListType) {
  return Object.entries(classList)
    .reduce((acc: string[], [name, isName]) => {
      if (isName) acc.push(name);
      return acc;
    }, [])
    .join(' ');
}
