import { defineConfig } from "tsdown";

export default defineConfig({
  entry: [
    "./src/core.ts",
    "./src/react/index.ts",
    "./src/vue/index.ts",
    "./src/svelte/index.svelte.ts",
  ],
  platform: "browser",
});
