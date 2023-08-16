export const deepClone = <T>(array: T[]): T[] => {
  return JSON.parse(JSON.stringify(array)) as T[]
}