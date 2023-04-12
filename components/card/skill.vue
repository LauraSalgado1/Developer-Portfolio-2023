<template>
  <div class="skill">
    <Icon
      v-if="skillItem.icon"
      :name="skillItem.icon"
      width="64"
      height="64"
      color="#272727"
      class="icon"
    />

    <div>
      <h3 v-html="skillItem.heading"></h3>

      <ul>
        <li v-for="(listItem, index) in skillItem.list" :key="index">
          {{ listItem }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { skillItem } = defineProps(["skillItem"]);
</script>

<style scoped lang="scss">
.skill {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 32px;
  background: $c-white;
  padding: 32px;
  border-radius: 32px;
  margin-bottom: 32px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  @media (max-width: 750px) {
    border-radius: 16px;
  }
}
h3 {
  margin: 0 0 24px;
}

ul {
  list-style: disc;
  padding-left: 20px;
}

li:not(last-child) {
  margin-bottom: 16px;
}
</style>
