import { diff } from "../diff";
import { reactive, computed, type Reactive } from "vue";

export function diffable<T extends object>(original: T) {
  const draft: Reactive<T> = reactive(structuredClone(original));

  const modified = computed(() => diff(original, draft as T));

  return { draft, modified };
}
