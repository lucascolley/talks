<script setup lang="ts">
const props = defineProps<{
  split?: string
}>()
</script>

<template>
  <div class="slidev-layout code-left-layout">
    <slot name="title" />
    <div class="code-left-grid" :style="props.split ? { gridTemplateColumns: props.split } : undefined">
      <div class="code-left-code"><slot name="left" /></div>
      <div class="code-left-copy">
        <slot />
        <slot name="right" />
      </div>
    </div>
    <slot name="after" />
  </div>
</template>

<style>
.slidev-layout.code-left-layout {
  display: flex;
  flex-direction: column;

  > h1 {
    margin-bottom: 1rem;
  }

  .code-left-grid {
    display: grid;
    grid-template-columns: 1.18fr 0.82fr;
    flex: 1;
    gap: 2rem;
    align-items: stretch;
    min-height: 0;

    /* A grid followed by more content keeps its own height */
    &:not(:last-child) {
      flex: none;
    }

    .code-left-copy {
      padding-top: 0.25rem;

      /* A title placed in the right column instead of above the grid */
      h1 {
        margin-bottom: 1rem;
        font-size: 2.25rem;
      }
    }
  }
}
</style>
