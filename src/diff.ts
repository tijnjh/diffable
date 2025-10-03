export function diff<T extends Record<string, any>>(a: T, b: T): Partial<T> {
  const result: Partial<T> = {}
  for (const key in b) {
    if (!(key in a)) {
      result[key] = b[key]
    } else if (
      typeof a[key] === 'object'
      && typeof b[key] === 'object'
      && a[key] !== null
      && b[key] !== null
    ) {
      const nested = diff(a[key], b[key])
      if (Object.keys(nested).length > 0) {
        result[key] = nested as any
      }
    } else if (a[key] !== b[key]) {
      result[key] = b[key]
    }
  }
  return result
}
