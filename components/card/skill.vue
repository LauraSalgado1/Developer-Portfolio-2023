<template>
  <div class="skill">
    <div class="header">
      <Icon
        v-if="skillItem.icon"
        :name="skillItem.icon"
        :width="skillItem.width"
        :height="skillItem.height"
        color="#272727"
        class="icon"
      />

      <h3 v-html="skillItem.heading"></h3>
    </div>

    <ul>
      <li v-for="(listItem, index) in skillItem.list" :key="index">
        {{ listItem }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const { skillItem } = defineProps(["skillItem"]);
</script>

<style scoped lang="scss">
.skill {
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
  margin: 0;
}

ul {
  list-style: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

.header {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 8px;
  margin-bottom: 32px;
  align-items: center;
}
</style>
