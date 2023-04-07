<template>
  <div class="skill">
    <!-- <nuxt-img/> -->

    <div class="header">
      <Icon
        v-if="skillItem.icon"
        :name="skillItem.icon"
        width="48"
        height="48"
        color="#272727"
        class="icon"
      />

      <h3 v-html="skillItem.heading"></h3>
    </div>
    <!-- <p class="p1" v-if="skillItem.paragraph" v-html="skillItem.paragraph"></p>
    <p class="p1" v-if="skillItem.paragraph2" v-html="skillItem.paragraph2"></p> -->

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
  //   border: 2px solid $c-grey-mid;
  margin-bottom: 32px;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid;
  break-inside: avoid;
}
h3 {
  margin: 0;
  //   text-align: right;
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
