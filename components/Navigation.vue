<template>
  <header
    id="siteHeader"
    class="site-header"
    :class="{ scrolled: scrolled, up: direction == 'SCROLL_UP' }"
  >
    <nav aria-label="main site navigation">
      <ul class="no-format f-ui">
        <li>
          <NuxtLink class="home" to="/">
            <nuxt-img
              src="/Laura-Salgado-Developer-Since-2016.svg"
              alt="Home page of Laura Salgado Developer Since 2016"
              width="256"
              height="85"
            />
          </NuxtLink>
        </li>
        <li>
          <a href="mailto:culham.laura@gmail.com">
            <Icon name="mdi-email" width="30" height="20" /><span
              class="address"
              >culham.laura@gmail.com</span
            >
            <span class="email">Email</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
const direction = ref("SCROLL_UP");

const scrolled = ref(false);

const setScrollDirection = function (sd) {
  direction.value = sd;
};

onMounted(() => {
  if (process.client && window && document) {
    var lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    window.addEventListener(
      "scroll",
      () => {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
          setScrollDirection("SCROLL_DOWN");
        } else {
          setScrollDirection("SCROLL_UP");
        }

        lastScrollTop = st <= 0 ? 0 : st;
        if (st > 160) {
          scrolled.value = true;
        } else {
          scrolled.value = false;
        }
      },
      false
    );
  }
});
</script>

<style lang="scss" scoped>
.site-header {
  margin-top: 20px;
  padding: 0px 64px;
  position: sticky;
  z-index: 5;
  top: 0;
  background: $c-white;
  opacity: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &.scrolled {
    opacity: 0;
    transform: translateY(-100%);
    &.up {
      opacity: 1;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.05);
      transform: translateY(0%);
    }
  }
  @media (max-width: 1400px) {
    padding: 0px;
  }
  // @media (max-width: 750px) {
  //   padding: 16px 32px 0;
  // }
  // @media (max-width: 370px) {
  //   padding: 16px 16px 0;
  // }
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.home {
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1400px) {
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 64px;
  }
  @media (max-width: 750px) {
    padding: 0 32px;
  }
  @media (max-width: 370px) {
    padding: 0 16px;
  }

  li:first-child {
    position: relative;
    left: -12px;
    width: 256px;
    @media (max-width: 750px) {
      width: 180px;
      left: -8px;
    }
  }

  li:last-child {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.email {
  display: none;
  @media (max-width: 750px) {
    display: inline-block;
  }
}
.address {
  @media (max-width: 750px) {
    display: none;
  }
}
</style>
