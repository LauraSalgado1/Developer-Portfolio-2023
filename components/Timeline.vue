<template>
  <div class="group">
    <h3 class="year" v-html="group.year"></h3>

    <div class="line"></div>

    <CardEducation
      v-for="course in group.courses"
      :key="course.courseName"
      :courseItem="course"
    />
  </div>
</template>

<script setup>
const { group } = defineProps(["group"]);
</script>

<style scoped lang="scss">
.year {
  text-align: center;
  background: $c-yellow-light-extra;
  display: inline-block;
  margin: 0 auto;
  padding: 16px;
  border-radius: 16px;
}

.line {
  width: 4px;
  height: 32px;
  background: $c-yellow-light-extra;
  margin: 0 auto;
}

.group {
  text-align: center;
}

.group:last-child :deep(.education .line) {
  display: none;
}
</style>
