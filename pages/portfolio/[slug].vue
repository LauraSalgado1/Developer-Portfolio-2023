<template>
  <main>
    <section class="header">
      <div class="inner">
        <nuxt-link class="back" to="/">
          <Icon name="ooui:arrow-previous-ltr" width="16" height="16" />
          Home
        </nuxt-link>

        <picture>
          <source :srcset="portfolioItem.image" type="image/webp" />
          <source :srcset="portfolioItem.imageFallback" type="image/jpeg" />
          <img
            :src="portfolioItem.imageFallback"
            :alt="portfolioItem.imageAlt"
          />
        </picture>

        <h1 v-html="portfolioItem.title"></h1>
        <ul class="tags no-format">
          <li v-for="(tag, index) in portfolioItem.tags" :key="index">
            {{ tag }}
            <span>&#8226;</span>
          </li>
        </ul>
        <div class="button-wrapper">
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
      </div>
    </section>

    <section class="lower">
      <div class="inner">
        <div class="single-content p1" v-html="portfolioItem.content"></div>

        <div class="navigation">
          <div class="portfolio-nav-wrapper">
            <div class="prev" v-if="prevItem">
              <span class="eyebrow">
                <Icon name="ooui:arrow-previous-ltr" width="16" height="16" />
                Prev
              </span>
              <CardPortfolioSmall :portfolioItem="prevItem" />
            </div>

            <div v-else></div>

            <div class="next" v-if="nextItem">
              <span class="eyebrow">
                Next
                <Icon name="ooui:arrow-next-ltr" width="16" height="16" />
              </span>

              <CardPortfolioSmall :portfolioItem="nextItem" />
            </div>

            <div v-else></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const route = useRoute();
import { portfolio } from "~/portfolioData.js";

const [portfolioItem] = portfolio.filter(
  (item) => item.slug == route.params.slug
);

const currentIndex = portfolio.indexOf(portfolioItem);

const nextIndex = computed(() => {
  return currentIndex + 1;
});

const nextItem = computed(() => {
  return portfolio[nextIndex.value];
});

const prevIndex = computed(() => {
  return currentIndex - 1;
});

const prevItem = computed(() => {
  return portfolio[prevIndex.value];
});

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
  img {
    display: block;
    border-radius: 8px;
    width: 100%;
    aspect-ratio: 2.5/1;
    object-fit: cover;
    object-position: top center;
  }
  h1 {
    margin: 32px 0 8px;
    text-align: center;
    @media (max-width: 750px) {
      margin: 16px 0;
    }
  }
}

.button-wrapper {
  text-align: center;
}
.single-content {
  width: 640px;
  max-width: 100%;
  margin: 0 auto 32px;
}

section {
  background: $c-grey-background;
  padding: 64px 0;
  @media (max-width: 750px) {
    padding: 32px 0;
  }
  &.lower {
    padding: 0 0 64px;
    @media (max-width: 750px) {
      padding: 32px 0 64px;
    }
  }
}

.tags {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 32px;
  font-weight: 400;
  gap: 16px;
  @media (max-width: 750px) {
    display: block;
    text-align: center;
  }
  li {
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
  font-size: 1.4rem;
  opacity: 0.7;
  text-decoration: none;
  padding: 8px 8px 8px 0;
  @media (min-width: 750px) {
    font-size: 1.6rem;
  }
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}

.portfolio-nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .eyebrow {
    display: block;
    margin-bottom: 8px;
  }
  .next .eyebrow {
    text-align: right;
  }
}
</style>
