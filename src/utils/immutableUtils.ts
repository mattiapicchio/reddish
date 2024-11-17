export function imPush<T>(arr: T[] | null | undefined, newEntry: T): T[] {
  const safeSpread = arr || []

  return [...safeSpread, newEntry]
}

export function imArrayMerge<T, U>(first: T[], second: U[]): (T | U)[] {
  const safeSpreadFirst = first || []
  const safeSpreadSecond = second || []

  return [...safeSpreadFirst, ...safeSpreadSecond]
}

export function imSetToObj(obj = {}, key: string, value: string) {
  return {
    ...obj,
    [key]: value,
  }
}

export function imMergeObj(first = {}, second = {}) {
  return {
    ...first,
    ...second,
  }
}
