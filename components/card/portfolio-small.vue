<template>
  <div class="portfolio-card small">
    <nuxt-link
      :portfolioData="portfolioItem"
      :to="`/portfolio/${portfolioItem.slug}`"
    >
      <div class="card-image-wrapper">
        <div class="card-image">
          <NuxtPicture
            format="webp"
            :src="portfolioItem.imageFallback"
            :alt="portfolioItem.imageAlt"
            width="260"
            height="146"
            sizes="50vw sm:260px"
          />
        </div>
      </div>

      <div class="bottom h3">
        {{ portfolioItem.title }}
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const { portfolioItem } = defineProps(["portfolioItem"]);
</script>

<style scoped lang="scss">
a {
  display: block;
  background: $c-white;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  width: 260px;
  max-width: calc(50vw - 24px);
  @media (min-width: 370px) {
    max-width: calc(50vw - 42px);
  }
  @media (min-width: 750px) {
    max-width: calc(50vw - 74px);
  }
  &:hover,
  &:focus {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    text-decoration: underline;
    .card-image :after {
      opacity: 1;
    }
  }
}

.bottom {
  padding: 8px;
  @media (min-width: 750px) {
    padding: 16px;
  }
}

img {
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: top center;
  width: 100%;
}

.card-image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-image :after {
  display: block;
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.1);
  aspect-ratio: 16/9;
  opacity: 0;
  transition: opacity 0.1s ease;
  z-index: 2;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}
</style>
