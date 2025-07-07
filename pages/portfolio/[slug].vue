<template>
  <main>
    <section class="header">
      <div class="inner">
        <nuxt-link class="back" to="/#portfolio">
          <Icon
            name="ooui:arrow-previous-ltr"
            width="16"
            height="16"
            color="#fff"
          />
          Portfolio
        </nuxt-link>

        <h1 v-html="portfolioItem.title"></h1>
        <ul class="tags no-format h4">
          <li v-for="(tag, index) in portfolioItem.tags" :key="index">
            {{ tag }}
            <span>&#8226;</span>
          </li>
        </ul>

        <picture>
          <source :srcset="portfolioItem.image" type="image/webp" />
          <source :srcset="portfolioItem.imageFallback" type="image/jpeg" />
          <img
            :src="portfolioItem.imageFallback"
            :alt="portfolioItem.imageAlt"
            width="512"
            height="288"
          />
        </picture>
      </div>
    </section>

    <section class="lower">
      <div class="inner">
        <div class="single-content p1" v-html="portfolioItem.content"></div>
        <a
          v-if="portfolioItem.link"
          :href="portfolioItem.link"
          target="_blank"
          class="button"
          >{{ portfolioItem.buttonText }}
          <Icon
            name="uil:external-link-alt"
            width="20"
            height="20"
            color="#fff"
          />
        </a>
      </div>
    </section>

    <!-- <section class="navigation">
      <div class="inner">
        <div class="portfolio-nav-wrapper">
          <nuxt-link class="prev" to="">
            <Icon name="ooui:arrow-previous-ltr" width="16" height="16" />
            Previous:
          </nuxt-link>

          <nuxt-link class="prev" to="">
            Next:
            <Icon name="ooui:arrow-next-ltr" width="16" height="16" />
          </nuxt-link>
        </div>
      </div>
    </section> -->
  </main>
</template>

<script setup>
const route = useRoute();
import { portfolio } from "~/portfolioData.js";

const [portfolioItem] = portfolio.filter(
  (item) => item.slug == route.params.slug
);

const title = computed(() => {
  return portfolioItem ? portfolioItem.title + " - Portfolio" : "";
});

const desc = computed(() => {
  return portfolioItem
    ? "Learn the details of Laura's Salgado's coding work on " +
        portfolioItem.buttonText
    : "";
});

definePageMeta({
  image: "/Narratives.png",
});

useSeoMeta({
  title: () => title.value,
  description: () => desc.value,
});
</script>

<style scoped lang="scss">
section.header {
  background: $c-black;
  color: $c-white;
  img {
    display: block;
    border-radius: 8px;
    width: 512px;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: top center;
  }
  h1 {
    margin: 32px 0 8px;
    @media (max-width: 750px) {
      margin: 16px 0;
    }
  }
  a {
    color: $c-white;
  }
}
.single-content {
  width: 640px;
  max-width: 100%;
  margin: 0 auto 32px 0;
}

section {
  padding: 64px 0;
  @media (max-width: 750px) {
    padding: 32px 0;
  }
  &.lower {
    padding: 64px 0 72px;
    @media (max-width: 750px) {
      padding: 32px 0 64px;
    }
  }
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 32px;
  font-weight: 400;
  @media (max-width: 750px) {
    display: block;
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

.single-content:deep(p:first-child) {
  margin-top: 0;
}

.single-content:deep(p:last-child) {
  margin-bottom: 0;
}

.button,
.back {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.back {
  font-size: 1.6rem;
  opacity: 0.7;
  text-decoration: none;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}

.portfolio-nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  a {
    cursor: pointer;
  }
}
</style>
