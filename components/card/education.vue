<template>
  <div class="course">
    <div>
      <h4 v-html="courseItem.courseName"></h4>
      <p class="frequency" v-html="courseItem.frequency"></p>
    </div>
    <div>
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

.course {
  padding: 32px;
  margin: 0 auto;
  text-align: center;
  background: $c-white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0 0 10px;
  }
  .frequency {
    background: $c-grey-light;
    padding: 8px 16px 6px;
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
