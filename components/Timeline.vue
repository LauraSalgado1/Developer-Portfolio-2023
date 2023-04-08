<template>
  <div class="group">
    <h3 class="year" v-html="group.year"></h3>

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
  z-index: -1;
  width: 150px;
  @media (max-width: 1100px) {
    width: 78px;
    padding: 16px 0px 16px 39px;
    transform: rotate(180deg) translateX(100%);
    transform-origin: center;
    border-radius: 0px 16px 16px 0px;
    writing-mode: vertical-lr;
  }
  @media (max-width: 750px) {
    width: 39px;
    transform: rotate(180deg) translateX(71px);
    padding: 16px 0px 16px 8px;
  }
  @media (max-width: 370px) {
    transform: rotate(180deg) translateX(55px);
    padding: 16px 0px 16px 6px;
  }
}

.course-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 0;
  transform: translate(-32px, -60px);
  margin-bottom: -64px;
  max-width: calc(100% + 64px);
  @media (max-width: 1100px) {
    transform: translate(-32px, -93px);
    margin-bottom: -92px;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    transform: translate(0, -80px);
    margin-bottom: -80px;
  }
}

.group {
  padding-bottom: 32px;
  width: calc(100% + 64px);
  @media (max-width: 370px) {
    width: calc(100% + 32px);
  }
}
</style>
