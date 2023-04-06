<template>
  <div>
    <!-- <nuxt-img/> -->
    <h3>{{ portfolioItem.title }}</h3>

    <ul class="tags no-format">
      <li v-for="(tag, index) in portfolioItem.tags" :key="index">
        {{ tag }}<span>&#8226;</span>
      </li>
    </ul>

    <nuxt-link :to="`/portfolio/${portfolioItem.slug}`" class="button"
      >Project Details</nuxt-link
    >
  </div>
</template>

<script setup>
const { portfolioItem } = defineProps(["portfolioItem"]);
</script>

<style scoped lang="scss">
.tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 32px;
  li {
    margin-right: 16px;
    span {
      display: inline-block;
      padding-left: 16px;
    }
    &:last-child span {
      display: none;
    }
  }
}
</style>
