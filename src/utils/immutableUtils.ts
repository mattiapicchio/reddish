export function imPush<T>(arr: T[] | null | undefined, newEntry: T): T[] {
  const safeSpread = arr || []

  return [...safeSpread, newEntry]
}

export function imArrayMerge<T, U>(first: T[], second: U[]): (T | U)[] {
  const safeSpreadFirst = first || []
  const safeSpreadSecond = second || []

  return [...safeSpreadFirst, ...safeSpreadSecond]
}

export function imDeleteFromArray(array = [], index: number) {
  const firstPart = array.slice(0, index)
  const secondPart = array.slice(index + 1)

  return imArrayMerge(firstPart, secondPart)
}

export function imDeleteFromArrayById(array = [], idFieldName: string, idValue: number) {
  const indexToDelete = array.findIndex((arrayItem) => {
    return arrayItem[idFieldName] === idValue
  })

  return imDeleteFromArray(array, indexToDelete)
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
