<template>
  <div class="group">
    <h3 class="year" v-html="group.year"></h3>

    <!-- <div class="line"></div> -->

    <div class="course-wrapper">
      <CardEducation
        v-for="course in group.courses"
        :key="course.courseName"
        :courseItem="course"
      />
    </div>
  </div>
</template>

<script setup>
const { group } = defineProps(["group"]);
</script>

<style scoped lang="scss">
.year {
  text-align: left;
  background: $c-yellow-light-extra;
  display: inline-block;
  margin: 0 auto;
  padding: 16px 16px 16px 32px;
  border-radius: 16px 0px 0px 16px;
  position: sticky;
  top: 0px;
  transform: translateX(-100%);
  z-index: 0;
  width: 150px;
}

.line {
  width: 4px;
  height: 32px;
  background: $c-yellow-light-extra;
  margin: 0 auto;
}

.course-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 418px);
  gap: 32px;
  padding: 0 32px 0;
  transform: translate(-64px, -60px);
  margin-bottom: -64px;
}

.group {
  padding-bottom: 32px;
}
</style>
