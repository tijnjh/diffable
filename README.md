# ↔️ diffable

reactive object diffing

currently supports: react, svelte & vue

```js
import { diffable } from "diffable";

const { draft, modified } = diffable({
  name: "John",
  age: 30,
});

draft.age = 31;

console.log(modified); // { age: 31 }
```

(the example is simplified, see below for framework specific usage)

## 📦 installation

```sh

npm i diffable

```

## 🚀 usage

### svelte

```svelte
<script lang="ts">
  import { diffable } from "diffable/svelte";

  const form = diffable({
    name: "John",
    age: 30,
  });
</script>

<input bind:value={form.draft.name} />
<input bind:value={form.draft.age} type="number" />
```

### vue

```vue
<script setup>
import { diffable } from "diffable/vue";

const { draft, modified } = diffable({
  name: "John",
  age: 30,
});
</script>

<template>
  <div>
    <input v-model="draft.name" />
    <input v-model="draft.age" type="number" />
  </div>
</template>
```

### react

i know this isnt ideal, i am working on a better api for react

```tsx
import { diffable } from "diffable/react";

function App() {
  const { draft, setDraft, modified } = diffable({
    name: "John",
    age: 30,
  });

  return (
    <div>
      <input
        value={draft.name}
        onChange={(e) => setDraft({ ...draft, name: e.target.value })}
      />
      <input
        value={draft.age}
        type="number"
        onChange={(e) => setDraft({ ...draft, age: e.target.value })}
      />
    </div>
  );
}
```
