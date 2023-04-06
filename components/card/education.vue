<template>
  <div class="education">
    <div class="course">
      <h4 v-html="courseItem.courseName"></h4>
      <p class="frequency" v-html="courseItem.frequency"></p>
      <p class="school" v-html="courseItem.school"></p>
      <p class="instructors">
        Instructed by:
        <span v-for="instructor in courseItem.instructors" :key="instructor">
          <span class="and" v-if="courseItem.instructors.length > 1">
            and
          </span>
          <span v-html="instructor"></span>
          <span class="comma">, </span>
        </span>
      </p>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup>
const { courseItem } = defineProps(["courseItem"]);
</script>

<style scoped lang="scss">
.instructors {
  margin-bottom: 0;
  > span:first-child,
  > span:not(:last-child) {
    .and {
      display: none;
    }
  }
  > span:last-child {
    .comma {
      display: none;
    }
  }
  > span:nth-last-child(2) {
    .comma {
      display: none;
    }
  }
}

.line {
  width: 4px;
  height: 32px;
  background: $c-yellow-light-extra;
  margin: 0 auto;
}

.course {
  width: 360px;
  padding: 32px;
  margin: 0 auto;
  text-align: center;
  background: $c-white;
  border-radius: 32px;

  h4 {
    margin: 0 0 10px;
  }
  .frequency {
    background: $c-grey-mid;
    padding: 8px 16px;
    border-radius: 16px;
    display: inline-block;
    text-transform: uppercase;
    margin: 0px 0 24px;
    line-height: 1;
    font-size: 1.4rem;
  }
  .school {
    margin: 0;
    font-weight: bold;
  }
  .instructors {
    margin: 0;
  }
}
</style>
