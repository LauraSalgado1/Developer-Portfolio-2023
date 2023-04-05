<template>
  <header id="siteHeader" class="site-header">
    <nav aria-label="main site navigation">
      <ul class="no-format f-ui">
        <li>
          <NuxtLink class="home" to="/">
            <nuxt-img
              src="/Laura-Salgado-Developer-Since-2016.svg"
              alt="Home page of Laura Salgado Developer Since 2016"
              width="300"
            />
          </NuxtLink>
        </li>
        <li>
          <a href="mailto:culham.laura@gmail.com">
            <Icon
              name="mdi-email"
              width="30"
              height="20"
            />culham.laura@gmail.com
          </a>
        </li>
      </ul>

      <!-- <button
          class="hamburger"
          :class="{ open: opened }"
          @click="toggleMenu()"
        >
          hamburger
        </button> -->

      <!-- <div class="mobile" :class="{ open: opened }">
          <div class="main">
            <div class="menuouter" :class="{ open: opened }">
              <div class="menu" :class="{ open: opened }">
                <NuxtLink @click.native="closeMenu()">page name</NuxtLink>
              </div>
            </div>
          </div>
        </div> -->
    </nav>
  </header>
</template>

<script setup>
const opened = ref(false);

const toggleMenu = function () {
  opened.value = !opened.value;
};

const closeMenu = function () {
  opened.value = false;
};
</script>

<style lang="scss" scoped>
.site-header {
  padding: 20px 32px;
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
}
</style>
