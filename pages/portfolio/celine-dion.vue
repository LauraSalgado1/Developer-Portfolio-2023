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
        <a href="https://www.celinedion.com/" target="_blank" class="button"
          >CelineDion.com
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
  title: "Céline Dion",
  image: "/celine-dion-home.webp",
  imageFallback: "/celine-dion-home.jpg",
  imageAlt:
    "Screenshot of Celine Dion's website. Photo of Celine Dion wearing a sparkling red ballgown and standing in front of a tall flame. Text reads Celine Dion Courage.",
  tags: ["Agency project", "Custom WordPress theme", "PHP", "CSS Animation"],
  slug: "celine-dion",
  content:
    "<p>At officialCOMMUNITY, we had the privilege of working with Sony Music Canada to bring their opulent designs to life for Céline Dion.</p><p>To fulfill their specific design vision, I coded parallax images that animate from blur to sharp focus, parallax scollling text areas, and navigation menu transitions.</p><p>Check out the <a href='https://codepen.io/Laura_Salgado/pen/wOYWEV/5584324389d4380d4e4ef3a0274eed85' target='_blank'>CodePen</a> I used to workshop my scrolling animations.</p><p>I coded most of the custom WordPress theme, which also includes some contributions from officialCOMMUNITY's other (awesome!) front-end team members.</p>",
};

useSeoMeta({
  title: "Celine Dion - Portfolio",
  description: "Read about how I built the website for Céline Dion.",
  ogImage: "/celine-dion-home.jpg",
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
