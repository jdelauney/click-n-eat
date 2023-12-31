export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array)) as T[]
}

export const isEmpty = (array: unknown[]): boolean => {
  return array.length === 0
}