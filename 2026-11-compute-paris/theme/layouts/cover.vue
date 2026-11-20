<script setup lang="ts">
import { computed } from 'vue'
import Eyebrow from '../components/Eyebrow.vue'
import { assetUrl } from '../utils/asset'

const props = defineProps<{
  eyebrow?: string
  image?: string
  imageAlt?: string
  qr?: string
  qrHref?: string
  qrLabel?: string
  speaker?: string
}>()

const imageSrc = computed(() => props.image && assetUrl(props.image))
</script>

<template>
  <div class="slidev-layout cover keynote-cover">
    <div class="cover-content">
      <Eyebrow v-if="eyebrow">{{ eyebrow }}</Eyebrow>
      <slot />
      <p v-if="speaker" class="cover-speaker">{{ speaker }}</p>
    </div>
    <img v-if="imageSrc" class="cover-image" :src="imageSrc" :alt="imageAlt ?? ''" />
    <SlidesQr
      v-if="qr"
      class="cover-slides-qr"
      :class="{ 'cover-slides-qr-below-image': imageSrc }"
      :src="qr"
      :href="qrHref"
      :label="qrLabel"
    />
  </div>
</template>

<style>
/* A band of yellow down the right edge holds the image and the QR code */
.slidev-layout.keynote-cover {
  position: relative;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  padding: 6rem 4rem 3.5rem;
  background:
    linear-gradient(90deg, transparent 0 74%, var(--prefix-yellow-wash) 74% 100%),
    var(--prefix-paper);
  text-align: left;

  .cover-content {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    max-width: 48rem;
    margin: 0;
    font-size: 4rem;
    line-height: 1.125;
  }

  /* First line of the title, set lighter than the line it introduces */
  .cover-title-lead {
    display: block;
    font-weight: 300;
  }

  .cover-speaker {
    margin: 1.25rem 0 0;
    font-size: var(--prefix-text-md);
  }

  /* Takes the QR code's place at the top of the band, fitted to its width */
  .cover-image {
    position: absolute;
    top: 2.75rem;
    left: 87%;
    width: 13rem;
    max-height: 15rem;
    object-fit: contain;
    transform: translateX(-50%);
  }

  .cover-slides-qr {
    position: absolute;
    top: 2.75rem;
    left: 87%;
    width: max-content;
    transform: translateX(-50%);
  }

  /* With an image at the top of the band, the code drops to the bottom of it */
  .cover-slides-qr-below-image {
    top: auto;
    bottom: 2.75rem;
  }
}
</style>
