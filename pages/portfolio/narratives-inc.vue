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
        <a href="https://narrativesinc.com/" target="_blank" class="button"
          >NarrativesInc.com
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
  title: "Narratives Inc.",
  image: "/Narratives.webp",
  imageFallback: "/Narratives.png",
  imageAlt:
    "Screenshot of Narratives Inc Website. Interactive map showing serveral clustered locations and pins showing individual locations.",
  tags: [
    "Agency project",
    "Prismic CMS",
    "Headless",
    "Vue / Nuxt",
    "Interactive Map",
    "MapBox API",
  ],
  slug: "narratives-inc",
  content:
    '<p>At The Hatchery Labs, I built the Prismic CMS website in Nuxt for Narratives Inc, an organization engaged on the path to reconcialiation "from the place where the Red meets the Assiniboine, within the traditional territories of the Anishinaabe, the Cree, the Anisininew, the Dakota, and the Dene peoples, in Treaty 1 territory, and the homeland of the Métis".</p><p>With the exception of the GSAP scrolling text animations found on the home, about, and career pages, I coded all aspects of this website. Some interesting challenges included filtering by communities of practice on the <a href="https://narrativesinc.com/team" target="_blank">Team Page</a>, filtering by multiple topics on the <a href="https://narrativesinc.com/journal" target="_blank">Journal</a>, and creating a sticky and style-transforming category navigation on the <a href="https://narrativesinc.com/services/planning" target="_blank">Services Section</a>.<p><p>Using the MapBox API, I built a custom, filterable map to visually demonstrate the scope of their <a href="https://narrativesinc.com/projects">Projects</a>. </p><p>I\'m proud of the work I\'ve done on this project, and the fact that my tech know-how can be used for important social justice movements.</p>',
};

definePageMeta({
  image: "/Narratives.png",
});

useSeoMeta({
  title: "Narratives Inc - Portfolio",
  description: "Read about how I built the website for Narratives Inc.",
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
