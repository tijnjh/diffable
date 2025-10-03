import { diff } from "../diff";

export function diffable<T extends object>(original: T) {
  // @ts-expect-error
  const draft: T = $state<T>(structuredClone(original));

  // @ts-expect-error
  const modified: Partial<T> = $derived(diff(original, draft as T));

  return { draft, modified };
}
