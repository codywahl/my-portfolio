# Skeleton v4 Migration Plan

Branch: `migration/skeleton-v4`

**Prerequisites already satisfied:**
- ✅ Svelte 5 (5.55.2)
- ✅ SvelteKit 2 (2.57.0)

---

## Wave 1 — Tailwind v3 → v4

Skeleton v4 requires Tailwind v4. Do this wave first, verify it works independently.

### Package changes
```bash
pnpm remove postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
pnpm add -D @tailwindcss/vite
```

### Delete entirely
- `postcss.config.js` — Tailwind v4 no longer uses PostCSS
- `tailwind.config.ts` — v4 is CSS-first; no JS config file

### Update `vite.config.ts`
```ts
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()]  // tailwindcss must come first
});
```

### Update `src/app.css`
Replace the old `@tailwind` directives with `@import 'tailwindcss'`. Also migrate the
Inter font and `darkMode: 'class'` setting out of the deleted `tailwind.config.ts` into CSS.

```css
@import 'tailwindcss';

/* Migrate darkMode: 'class' from tailwind.config.ts */
@custom-variant dark (&:where(.dark, .dark *));

/* Migrate Inter font family from tailwind.config.ts */
@theme {
  --font-family-base: 'Inter', sans-serif;
  --font-family-heading: 'Inter', sans-serif;
}

/* Skeleton imports go here in Wave 2 */

/* Background gradient — CSS vars will be updated in Wave 2 */
body {
  background-image: radial-gradient(
      at 0% 0%,
      rgba(var(--color-secondary-500) / 0.33) 0px,
      transparent 50%
    ),
    radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
```

> **Verify:** `pnpm dev` — site should render. Skeleton styles will be broken (expected), but
> Tailwind utility classes should work.

---

## Wave 2 — Skeleton package migration

### Package changes
```bash
pnpm remove @skeletonlabs/skeleton @skeletonlabs/tw-plugin
pnpm add -D @skeletonlabs/skeleton @skeletonlabs/skeleton-svelte
```

### Run CLI migrations (commit after each)
```bash
npx skeleton@latest migrate skeleton-3
# commit
npx skeleton@latest migrate skeleton-4
# commit
```

The CLI handles automatically:
- `package.json` dependency updates
- Skeleton imports in `app.css`
- `variant-*` → `preset-*` utility class renames
- Component import path updates
- Unsupported import removal

The CLI does NOT handle (manual — done in Wave 3):
- Component structure/props changes
- `Modal` → `Dialog` rewrite
- `LightSwitch` → custom toggle
- Background gradient CSS vars

### Update `src/app.css`
After CLI runs, ensure the import block looks like this (order matters):

```css
@import 'tailwindcss';
@import '@skeletonlabs/skeleton';
@import '@skeletonlabs/skeleton-svelte';
@import '@skeletonlabs/skeleton/themes/fennec';
@plugin '@tailwindcss/forms';
```

### Update `src/app.html`
Move `data-theme` from `<body>` to `<html>`, and set fennec:

```html
<html lang="en" class="dark" data-theme="fennec">
```

Remove `data-theme` from `<body>` entirely.

### Update background gradient CSS vars
The v2 vars (`--color-secondary-500`, `--color-error-500`) are gone in v4. Update to
the fennec theme's color palette. The v4 var format uses `--color-{family}-{shade}` and
the values are OKLCH — use them directly rather than wrapping in `rgba()`:

```css
body {
  background-image: radial-gradient(
      at 0% 0%,
      color-mix(in oklch, var(--color-secondary-500) 33%, transparent) 0px,
      transparent 50%
    ),
    radial-gradient(
      at 98% 1%,
      color-mix(in oklch, var(--color-error-500) 33%, transparent) 0px,
      transparent 50%
    );
  background-attachment: fixed;
}
```

> **Verify:** `pnpm dev` — Skeleton theme (fennec) should be visible and base styling restored.
> Components that use removed/renamed APIs will error — expected, fixed in Wave 3.

---

## Wave 3 — Manual component migrations

### 1. Remove `initializeStores()` — `src/routes/+layout.svelte`

Delete the import and the call. No replacement needed.

```diff
- import { initializeStores, Modal } from '@skeletonlabs/skeleton';
- initializeStores();
```

### 2. Replace `<LightSwitch>` — `src/routes/+layout.svelte`

`LightSwitch` is removed. The current app uses `class="dark"` on `<html>` (selector
strategy). A simple toggle just adds/removes that class. The Skeleton cookbook provides
a reference implementation, but a minimal version:

```svelte
<script>
  import { Sun, Moon } from 'some-icon-lib'; // or use inline SVGs / emoji
  
  function toggleMode() {
    document.documentElement.classList.toggle('dark');
  }
</script>

<button onclick={toggleMode} aria-label="Toggle dark mode">
  <!-- icon -->
</button>
```

> **Decision point:** Pick an icon approach — inline SVG, an icon library already used,
> or a simple text/emoji fallback. The actual implementation is straightforward once decided.

### 3. Replace `<Modal>` with `<Dialog>` — `src/routes/+layout.svelte` + `src/routes/projects/+page.svelte`

This is the most involved change. The store-based singleton pattern is gone.

**Old pattern** (v2):
- `<Modal />` in layout
- `getModalStore()` + `modalStore.trigger()` in page

**New pattern** (v4):
- `<Dialog>` + `<Portal>` live alongside the trigger in the same component
- State is local (no global store)

`projects/+page.svelte` becomes:

```svelte
<script lang="ts">
  import { Dialog, Portal } from '@skeletonlabs/skeleton-svelte';
  import type { Project } from '$lib/types/project';
  
  let selectedProject: Project | null = $state(null);
  const isOpen = $derived(selectedProject !== null);
</script>

<!-- Pass onProjectClick={p => selectedProject = p} to ProjectGrid -->

{#if selectedProject}
  <Portal>
    <Dialog.Backdrop />
    <Dialog.Positioner>
      <Dialog.Content>
        <ProjectModal project={selectedProject} />
        <Dialog.CloseTrigger onclick={() => selectedProject = null} />
      </Dialog.Content>
    </Dialog.Positioner>
  </Portal>
{/if}
```

Remove `<Modal />` from `+layout.svelte` entirely.

> Note: This also removes the `w-modal-wide` class — check the Dialog docs for how to
> control width via props or CSS.

### 4. Replace `<Ratings>` with `<RatingGroup>` — `src/routes/components/SkillCategory.svelte`

The v4 component is compound and uses Svelte 5 snippets instead of slot fragments.
`CircleEmpty`, `CircleHalf`, `CircleFull` should still work as custom icons.

**Old pattern** (v2):
```svelte
<Ratings value={skill.rating} max={5}>
  <svelte:fragment slot="empty"><CircleEmpty /></svelte:fragment>
  <svelte:fragment slot="half"><CircleHalf /></svelte:fragment>
  <svelte:fragment slot="full"><CircleFull /></svelte:fragment>
</Ratings>
```

**New pattern** (v4) — exact API to confirm against live docs at
`https://www.skeleton.dev/docs/svelte/components/ratings`:
```svelte
<RatingGroup count={5} value={skill.rating} readOnly>
  {#each ratingGroup().items as index (index)}
    <RatingGroup.Item {index} />
  {/each}
</RatingGroup>
```

Custom icons go inside `RatingGroup.Item` — check the live docs for the snippet API.
The `CircleEmpty/Half/Full` components can likely be kept, just rewired.

> **Verify after each component:** use `pnpm check` frequently to catch type errors early.

---

## Wave 4 — Polish & smoke test

- [ ] Audit all remaining `variant-*` classes the CLI may have missed
- [ ] Verify background gradient renders correctly with fennec colors
- [ ] Verify dark mode toggle works (class on `<html>`)
- [ ] Verify `dark:` classes still apply across all pages
- [ ] Test project modal opens and closes correctly
- [ ] Test recommendation carousel and photo carousel
- [ ] Test on mobile viewport
- [ ] Run `pnpm pre-build` — all checks must pass
- [ ] Merge to `main`

---

## Reference

- [Skeleton v4 Migrate from v2](https://www.skeleton.dev/docs/svelte/get-started/migrate-from-v2)
- [Skeleton SvelteKit Installation](https://www.skeleton.dev/docs/svelte/get-started/installation/sveltekit)
- [Dark Mode Guide](https://www.skeleton.dev/docs/svelte/guides/mode)
- [RatingGroup Component](https://www.skeleton.dev/docs/svelte/components/ratings)
- [Dialog Component](https://www.skeleton.dev/docs/svelte/components/dialog)
- [Available Themes](https://www.skeleton.dev/docs/svelte/design/themes)
- [Tailwind v4 Migration](https://tailwindcss.com/docs/upgrade-guide)
