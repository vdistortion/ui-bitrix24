export type ClassListType = string[] | Record<string, boolean>;

export function getClassName(initClassList: string, classList: ClassListType) {
  if (Array.isArray(classList)) return [initClassList, ...classList].join(' ');

  return Object.entries(classList)
    .reduce(
      (acc: string[], [name, isName]) => {
        if (isName) acc.push(name);
        return acc;
      },
      [initClassList],
    )
    .join(' ');
}
