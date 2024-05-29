export function formatSizeUnits(countBytes: number): string {
  const dictionary: { [key: string]: number } = {
    GB: 1073741824,
    MB: 1048576,
    KB: 1024,
  };

  const formatBytes = (key: string) => {
    const count: string = (countBytes / dictionary[key]).toFixed(2);
    return [count, key].join(' ');
  };

  let bytes: string;

  if (countBytes >= dictionary.GB) bytes = formatBytes('GB');
  else if (countBytes >= dictionary.MB) bytes = formatBytes('MB');
  else if (countBytes >= dictionary.KB) bytes = formatBytes('KB');
  else bytes = [countBytes, 'B'].join(' ');

  return bytes;
}
