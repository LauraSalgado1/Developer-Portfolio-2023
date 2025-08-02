<template>
  <div class="portfolio-card">
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
            width="757"
            height="426"
            sizes="100vw lg:757px"
          />
        </div>
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
a {
  display: block;
  background: $c-white;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  &:hover,
  &:focus {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    h3 {
      text-decoration: underline;
    }
    .card-image :after {
      opacity: 1;
    }
  }
}

h3 {
  margin: 8px 0;
  @media (min-width: 750px) {
    margin: 0 0 8px;
  }
}

.bottom {
  padding: 8px;
  @media (min-width: 750px) {
    padding: 16px;
  }
}

picture,
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

.tags.no-format {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 750px) {
    flex-direction: column;
    margin-bottom: 16px;
    list-style: disc;
    padding-left: 20px;
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
