<template>
  <div class="portfolio-card">
    <nuxt-link class="image-link" :to="`/portfolio/${portfolioItem.slug}`">
      <nuxt-img
        width="757"
        height="426"
        v-if="portfolioItem.image"
        :src="portfolioItem.image"
      />
    </nuxt-link>

    <h3>{{ portfolioItem.title }}</h3>

    <ul class="tags no-format">
      <li v-for="(tag, index) in portfolioItem.tags" :key="index">
        {{ tag }}<span>&#8226;</span>
      </li>
    </ul>

    <nuxt-link :to="`/portfolio/${portfolioItem.slug}`" class="button"
      >Project Details

      <span class="screen-reader-text"
        >for {{ portfolioItem.title }}</span
      ></nuxt-link
    >
  </div>
</template>

<script setup>
const { portfolioItem } = defineProps(["portfolioItem"]);
</script>

<style scoped lang="scss">
.image-link {
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    aspect-ratio: 16/9;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.1s ease;
    z-index: 2;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
  }
}

img {
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: top center;
  border-radius: 8px;
  width: 100%;
  :hover {
  }
}

h3 {
  margin: 32px 0 8px;
  @media (max-width: 750px) {
    margin: 24px 0 8px;
  }
}
.tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 32px;
  @media (max-width: 750px) {
    display: block;
    margin-bottom: 16px;
  }
  li {
    margin: 0 16px 8px 0;
    @media (max-width: 750px) {
      margin: 0 0 2px 0;
    }

    span {
      display: inline-block;
      padding-left: 16px;
      @media (max-width: 750px) {
        display: none;
      }
    }
    &:last-child span {
      display: none;
    }
  }
}
</style>
