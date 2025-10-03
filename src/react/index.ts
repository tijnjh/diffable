import { diff } from "../diff";
import { useState } from "react";

export function diffable<T extends object>(original: T) {
  const [draft, setDraft] = useState<T>(structuredClone(original));

  const modified: Partial<T> = diff(original, draft as T);

  return { draft, setDraft, modified };
}
