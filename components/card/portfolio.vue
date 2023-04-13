<template>
  <div class="portfolio-card">
    <nuxt-link :to="`/portfolio/${portfolioItem.slug}`">
      <div class="image-link">
        <img
          :src="portfolioItem.image"
          :alt="portfolioItem.imageAlt"
          width="757"
          height="426"
        />
      </div>

      <div class="bottom">
        <h3>{{ portfolioItem.title }}</h3>

        <ul class="tags no-format">
          <li v-for="(tag, index) in portfolioItem.tags" :key="index">
            {{ tag }}<span>&#8226;</span>
          </li>
        </ul>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const { portfolioItem } = defineProps(["portfolioItem"]);
</script>

<style scoped lang="scss">
.portfolio-card {
  aspect-ratio: 1 / 0.8;
}

a {
  text-decoration: none;
  display: block;
  &:hover,
  &:focus {
    .image-link {
      box-shadow: none;
    }
    .image-link:after {
      opacity: 1;
    }
    h3 {
      text-decoration: underline;
    }
  }
}

.image-link {
  text-decoration: none;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  overflow: hidden;
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    aspect-ratio: 16/9;
    opacity: 0;
    transition: opacity 0.1s ease;
    z-index: 2;
    border-radius: 8px;
  }
  :deep(img) {
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: top center;
    width: 100%;
  }
}

h3 {
  margin: 32px 0 8px;
  @media (max-width: 750px) {
    margin: 16px 0 8px;
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
    margin: 0 16px 4px 0;
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
