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

        <img
          width="757"
          height="426"
          v-if="portfolioItem.image"
          :src="portfolioItem.image"
        />
      </div>
    </section>
    <section class="lower">
      <div class="inner">
        <div class="single-content p1" v-html="portfolioItem.content"></div>
        <a
          href="https://www.markknopfler.com/legendsseries/"
          target="_blank"
          class="button"
          >Legends Series
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
  title: "Mark Knopfler",
  image: "/mark-knopfler-home.jpg",
  tags: [
    "Agency project",
    "Custom WordPress theme",
    "PHP",
    "Full website design (previous 2018 version)",
  ],
  slug: "mark-knopfler",
  content:
    "At officialCOMMUNITY, I designed all aspects of this website to complement the Dire Straits frontperson's 2018 album, ‘Down The Road Wherever’.</p><p>I built the custom WordPress theme to showcase his various content types, including a library of all past concerts with a linked retail offering of each date's authorized audio recording.</p><p>I also applied functionality customizations in PHP to his WooCommerce Store.</p><p>Check out the featured product page I developed to promote his scale replica 1958 Gibson Les Paul.</p>",
};

useSeoMeta({
  title: "Mark Knopfler - Portfolio",
  description: "Read about how I built the website for Mark Knopfler.",
  ogImage: () => portfolioItem.image,
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
