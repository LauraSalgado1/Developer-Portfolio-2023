<template>
  <a class="media-card" :href="mediaItem.link" target="_blank">
    <div>
      <p class="eyebrow" v-html="mediaItem.source"></p>
      <h3 v-html="mediaItem.title"></h3>
      <p class="author" v-html="mediaItem.author"></p>
      <p class="excerpt" v-html="mediaItem.paragraph"></p>
    </div>
    <p class="more">
      <span v-html="mediaItem.moreText"></span>
      <Icon
        :name="mediaItem.icon"
        width="20"
        height="20"
        color="#272727"
        class="icon"
      />
    </p>
  </a>
</template>

<script setup>
const { mediaItem } = defineProps(["mediaItem"]);
</script>

<style scoped lang="scss">
.media-card {
  background: $c-white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  padding: 32px;
  text-decoration: none;
  &:hover {
    h3,
    .more {
      text-decoration: underline;
    }
  }
  h3 {
    margin: 5px 0;
  }
  .author {
    color: $c-black-light;
  }
  .more {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 0;
  }
}
</style>
