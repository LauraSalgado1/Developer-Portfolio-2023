<template>
  <div>
    <Navigation></Navigation>
    <NuxtPage keep-alive id="main" class="site-main" />
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.site-main {
  min-height: 100vh;
}
</style>
