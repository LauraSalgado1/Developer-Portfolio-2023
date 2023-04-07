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
    </nav>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.site-header {
  padding: 20px 64px;
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
  align-items: flex-start;
  width: 100%;
  li:last-child {
    margin-top: 16px;
  }
}
</style>
