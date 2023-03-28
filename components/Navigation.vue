<template>
  <header id="siteHeader" class="site-header">
    <nav>
      <div>
        <NuxtLink class="home" to="/"> home </NuxtLink>
      </div>

      <button class="hamburger" :class="{ open: opened }" @click="toggleMenu()">
        hamburger
      </button>

      <div class="mobile" :class="{ open: opened }">
        <div class="main">
          <div class="menuouter" :class="{ open: opened }">
            <div class="menu" :class="{ open: opened }">
              <NuxtLink @click.native="closeMenu()">page name</NuxtLink>
            </div>
          </div>
        </div>
      </div>
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
  background: purple;
}
</style>
