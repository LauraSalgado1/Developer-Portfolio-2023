<template>
  <a class="art-card" target="_blank">
    <h3 v-html="artItem.title"></h3>
    <ul class="tags no-format">
      <li v-for="tag in artItem.tags" :key="tag">
        <span v-html="tag"></span>
      </li>
    </ul>
  </a>
</template>

<script setup>
const { artItem } = defineProps(["artItem"]);
</script>

<style scoped lang="scss"></style>
