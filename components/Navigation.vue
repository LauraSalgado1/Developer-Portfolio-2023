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

<script setup></script>

<style lang="scss" scoped>
.site-header {
  padding: 32px 64px 0;
  @media (max-width: 750px) {
    padding: 16px 32px 0;
  }
}

a {
  text-decoration: none;
  @media (max-width: 750px) {
    // font-size: 1rem;
  }
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
  li:first-child {
    position: relative;
    left: -15px;
    @media (max-width: 750px) {
      width: 180px;
      left: -8px;
    }
  }

  li:last-child {
    margin-top: 16px;
    @media (max-width: 750px) {
      margin-top: 4px;
    }
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
