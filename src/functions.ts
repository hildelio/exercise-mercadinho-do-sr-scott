export function first<T>(param: T[]): T {
  return param[0];
}

export function updateItem<T>(array: T[], index: number, newValue: T): T[] {
  if (index < 0 || index >= array.length) {
    return array;
  }
  return [
    ...array.slice(0, index),
    newValue,
    ...array.slice(index + 1),
  ];
}