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
      </div>
    </section>
  </main>
</template>

<script setup>
const portfolioItem = {
  title: "Mark Knopfler",
  image: "/mark-knopfler-home.webp",
  imageFallback: "/mark-knopfler-home.jpg",
  imageAlt:
    "Screenshot of Mark Knopfler's 2019 website with a light blue colour theme. Photo of an empty road leading to the far-off horizon. Text reads Down the Road Wherever the new album from Mark Knopfler out now.",
  tags: [
    "Agency project",
    "Custom WordPress theme",
    "PHP",
    "Full website design (previous 2018 version)",
  ],
  slug: "mark-knopfler",
  content:
    "At officialCOMMUNITY, I designed all aspects of this website to complement the Dire Straits frontperson's 2018 album, ‘Down The Road Wherever’.</p><p>I built the custom WordPress theme to showcase his various content types, including a library of all past concerts with a linked retail offering of each date's authorized audio recording.</p><p>I also applied functionality customizations in PHP to his WooCommerce Store.</p>",
};

useSeoMeta({
  title: "Mark Knopfler - Portfolio",
  description: "Read about how I built the website for Mark Knopfler.",
});

definePageMeta({
  image: "/mark-knopfler-home.jpg",
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
</style>
