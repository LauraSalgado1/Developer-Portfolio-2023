<template>
  <a class="media-card" :href="mediaItem.link" target="_blank">
    <div class="image">
      <nuxt-img v-if="mediaItem.image" :src="mediaItem.image" />
      <svg
        v-else
        width="256"
        viewBox="0 0 138 26"
        fill="none"
        stroke="#fff"
        stroke-width="2.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        title="CodePen"
      >
        <path
          d="M15 8a7 7 0 1 0 0 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0 11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 0 1 0 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 0 0 0-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"
        ></path>
      </svg>
    </div>
    <div class="media-bottom">
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
    </div>
  </a>
</template>

<script setup>
const { mediaItem } = defineProps(["mediaItem"]);
</script>

<style scoped lang="scss">
.media-card {
  background: $c-white;
  border-radius: 16px;
  text-decoration: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  &:hover {
    h3,
    .more {
      text-decoration: underline;
      top: 0;
    }
    .image:after {
      opacity: 1;
    }
  }
  h3 {
    margin: 5px 0;
  }
  .author {
    color: $c-black-light;
    margin-top: 0;
  }
  .more {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 0;
    position: relative;
    transition: top 0.1s ease;
    top: 8px;
  }
}

.media-bottom {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
}

.image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 16/9;
  background-color: $c-black;
  background-image: radial-gradient(circle, #4d4d4d, #404040, #333333, #272727);
  img {
    display: block;
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
  }
  svg {
    max-width: 80%;
  }
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity 0.1s ease;
  }
}
</style>
