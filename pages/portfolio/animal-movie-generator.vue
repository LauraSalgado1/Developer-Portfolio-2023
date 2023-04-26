<template>
  <main>
    <section class="header">
      <div class="inner">
        <nuxt-link class="back" to="/">
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
          href="https://animal-movie-generator.netlify.app/"
          target="_blank"
          class="button"
          >Use the live app
          <Icon
            name="uil:external-link-alt"
            width="20"
            height="20"
            color="#fff"
          />
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
const portfolioItem = {
  title: "Animal Movie Generator",
  image: "/animal-movie-generator.webp",
  imageFallback: "/animal-movie-generator.jpg",
  imageAlt:
    "Screenshot of the Animal Movie Generator app. Photos of three movie posters: The Hobbit, Arachnophobia, and Charlotte's Web.",
  tags: ["Personal project", "React", "API", "Axios", "JavaScript App"],
  slug: "animal-movie-generator",
  content:
    "<p>I built this React app to offer a new way of finding your next must-watch.</p><p>It uses Axios to retrieve the data from the TMDB API.</p><p>I enjoyed the dynamic film perforations using SVG&nbsp;shapes.</p>",
};

useSeoMeta({
  title: "Animal Movie Generator - Portfolio",
  description: "Read about how I built the Animal Movie Generator App.",
});

definePageMeta({
  image: "/animal-movie-generator.jpg",
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
