<template>
  <footer v-if="$nav.currentLayout !== 'cover'" class="keynote-footer">
    <img src="/prefix-logo.svg" alt="Prefix.dev" />
    <div class="keynote-footer-meta">
      <Ref v-if="$nav.currentFrontmatter.link" :to="$nav.currentFrontmatter.link" />
      <span class="keynote-page">{{ $nav.currentPage }}</span>
    </div>
  </footer>
  <!-- Stays in place across every slide with `tryIt: true`, rather than redrawing per slide -->
  <Terminal v-if="$nav.currentFrontmatter.tryIt" class="try-it-terminal" title="try it out on your machine!">
    <TermLine>curl -fsSL https://pixi.sh/install.sh | sh</TermLine>
    <TermLine>pixi exec -c conda-forge -c robostack-jazzy -s ros2-rviz2 rviz2</TermLine>
    <!-- <TermLine>pixi run --experimental --script tinyurl.com/pixi-turtlesim</TermLine>  -->
  </Terminal>
</template>

<style>
.try-it-terminal {
  position: absolute;
  z-index: 10;
  bottom: var(--prefix-slide-padding-bottom);
  left: var(--prefix-slide-padding-inline);
  width: 33rem;
}

.keynote-footer {
  position: absolute;
  z-index: 10;
  right: 2.25rem;
  bottom: 1.25rem;
  left: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--prefix-ink);

  /* Paper behind the logo, so it stays readable over a diagram */
  > img {
    width: 7.5rem;
    height: auto;
    padding: 0.375rem 0.5rem;
    margin-left: -0.5rem;
    background: var(--prefix-paper);
    border-radius: var(--prefix-radius-sm);
  }

  .keynote-footer-meta {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    font-size: var(--prefix-text-2xs);
    letter-spacing: var(--prefix-tracking-slight);
  }

  .keynote-page {
    display: grid;
    place-items: center;
    min-width: 1.75rem;
    height: 1.75rem;
    padding: 0 0.375rem;
    background: var(--prefix-white);
    border: 1px solid var(--prefix-border);
    border-radius: 50%;
    font-variant-numeric: tabular-nums;
  }
}
</style>
