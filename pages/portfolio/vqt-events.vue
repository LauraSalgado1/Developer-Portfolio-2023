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
        <a href="https://vqtevents.com/" target="_blank" class="button"
          >VQTEvents.com
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
  title: "VQT Events",
  image: "/vqt-portfolio-small.webp",
  imageFallback: "/vqt-portfolio-small.jpg",
  imageAlt: "",
  tags: ["Personal project", "Custom WordPress theme", "PHP", "CSS Animation"],
  slug: "vqt-events",
  content:
    "<p>When the owner of Very Queer Toronto Events told me about the features she imagined for her WordPress website, I knew I would have some fun challenges to figure out.</p><p>To showcase her various service offerings, she envisioned a three column landing page with a <em><b>continuous vertical scrolling</b></em> ticker in the center to advertise queer community events.</p><p><b>Problem #1: How to build a section with vertical movement?</b></p><p>I thought about the CSS animations that might be involved in acheiving that motion, and what I could do to make it accessible to all users.</p><p>(Turns out <a href='https://splidejs.com/' target='_blank'>Splide.js</a> has options for that!)</p><p><b>Problem #2: How to programmatically create a new post in the WordPress admin from a form submission?</b></p><p>I thought I'd have to use an additional contact form plugin, figure out its hooks, and write something custom using the WordPress hooks to create a post using the form data.</p><p>(Turns out <a href='https://www.acf-extended.com/guides/using-actions-output-data' target='_blank'>ACF Extended</a> has customizable actions for posts, emails, and redirects!)</p><p><b>Problem #3: How to include a fun, interactive chatbot-like feature to highlight the value of her custom matchmaking services?</b></p><p>An animated multi-stage ACF form with cute <a href='https://codepen.io/argyleink/pen/zxYWPxr' target='_blank'>rainbow highlights</a>, of course!</p><p>I included entrance animations on each question for a smooth and predictable user experience.</p><p>Visit the site to check out my work, or maybe meet some new friends!</p>",
};

definePageMeta({
  image: "/vqt-portfolio-small.jpg",
});

useSeoMeta({
  title: "VQT Events - Portfolio",
  description: "Read about how I built the website for VQT Events.",
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
