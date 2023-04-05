<template>
  <div>
    <!-- <nuxt-img/> -->
    <h3>{{ portfolioItem.title }}</h3>

    <ul class="tags">
      <li v-for="(tag, index) in portfolioItem.tags" :key="index">{{ tag }}</li>
    </ul>

    <nuxt-link :to="`/portfolio/${portfolioItem.slug}`" class="button"
      >Project Details</nuxt-link
    >
  </div>
</template>

<script setup>
const { portfolioItem } = defineProps(["portfolioItem"]);
</script>

<style scoped lang="scss"></style>
