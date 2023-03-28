<template>
  <div>
    <Navigation></Navigation>
    <transition name="fade">
      <NuxtPage keep-alive id="main" class="site-main" />
    </transition>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.site-main {
  min-height: 100vh;
}
</style>
