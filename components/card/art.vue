<template>
  <a class="art-card" target="_blank">
    <nuxt-img :src="artItem.image" />
    <div class="overlay">
      <ul class="tags">
        <li v-for="tag in artItem.tags" :key="tag">
          <span v-html="tag"></span>
        </li>
      </ul>
      <span class="codepen desktop">
        CodePen
        <Icon
          class="light"
          name="ri:codepen-line"
          width="20"
          height="20"
          color="#fff"
        />
        <Icon
          class="dark"
          name="ri:codepen-line"
          width="20"
          height="20"
          color="#272727"
        />
      </span>
    </div>
  </a>
</template>

<script setup>
const { artItem } = defineProps(["artItem"]);
</script>

<style scoped lang="scss">
img {
  display: block;
  width: 100%;
  border-radius: 16px;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}

.dark {
  display: none;
  @media (max-width: 992px) {
    display: inline-block;
  }
}

.light {
  @media (max-width: 992px) {
    display: none;
  }
}

//used on desktop hover
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  color: $c-white;
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.1s ease;
  overflow: scroll;
  @media (max-width: 1120px) {
    padding: 16px;
  }
  @media (max-width: 992px) {
    position: static;
    opacity: 1;
    background: transparent;
    color: $c-black;
    padding: 16px 0;
  }
}

a {
  text-decoration: none;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    .overlay {
      opacity: 1;
    }
    .codepen {
      top: 0px;
    }
  }
  //used on 992px and down hover
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    aspect-ratio: 1/1;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.1s ease;
  }
  @media (max-width: 992px) {
    &:hover,
    &:focus {
      &:after {
        opacity: 1;
      }
    }
  }
}

ul {
  padding-left: 20px;
  margin-top: 0;
}

li:not(:last-child) {
  margin-bottom: 10px;
  @media (max-width: 992px) {
    margin-bottom: 4px;
  }
}

.codepen {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  position: relative;
  transition: top 0.1s ease;
  top: 8px;
  &.desktop {
    text-decoration: underline;
  }
}
</style>
