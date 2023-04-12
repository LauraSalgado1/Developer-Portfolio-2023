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
            <img
              src="/Laura-Salgado-Developer-Since-2016.svg"
              alt="Home page of Laura Salgado Developer Since 2016"
              width="300"
              height="100"
            />
          </NuxtLink>
        </li>
        <li>
          <a href="mailto:culham.laura@gmail.com" title="email me">
            <Icon name="mdi-email" width="32" height="32" />
            <span class="address">culham.laura@gmail.com </span>
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
  padding: 0px 64px;
  position: sticky;
  z-index: 5;
  top: 0;
  background: $c-white;
  opacity: 1;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &.scrolled {
    opacity: 0;
    &.up {
      opacity: 1;
      box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.05);
    }
  }
  @media (max-width: 1400px) {
    padding: 0;
  }
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
  margin-top: 8px;
}

nav ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
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

  li:first-child a {
    position: relative;
    left: -12px;
    width: 300px;
    @media (max-width: 750px) {
      width: 256px;
      left: -8px;
    }
  }

  li:last-child {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      @media (max-width: 750px) {
        svg {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
}

.address {
  @media (max-width: 750px) {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
  }
}
</style>
