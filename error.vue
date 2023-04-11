<template>
  <div>
    <SeoKit />

    <Navigation></Navigation>
    <transition name="fade">
      <main id="main" class="site-main">
        <section class="header">
          <div class="inner">
            <nuxt-link to="/" class="back">
              <Icon
                name="ooui:arrow-previous-ltr"
                width="16"
                height="16"
                color="#fff"
              />
              Home</nuxt-link
            >

            <h1>Whoops</h1>

            <ul class="tags no-format h4">
              <li>
                What
                <span>&#8226;</span>
              </li>
              <li>
                Oh no
                <span>&#8226;</span>
              </li>
              <li>
                Where am I
                <span>&#8226;</span>
              </li>
              <li>Not again</li>
            </ul>

            <nuxt-img
              src="/404.jpg"
              alt="Fluffy white cat laying on the floor."
            ></nuxt-img>
          </div>
        </section>
        <section class="lower">
          <div class="inner">
            <p class="p1">Nothing here!</p>
          </div>
        </section>
      </main>
    </transition>

    <Footer></Footer>
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: "icon",
      href: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐈‍⬛</text></svg>",
    },
  ],
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
  font-size: 1.4rem;
  opacity: 0.7;
  text-decoration: none;
  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
}
</style>
