<template>
  <div>
    <StartScreen pageHeading="Courses" caption="COURSES" />
    <v-container>
      <v-row id="screen2" class="mx-auto mt-10">
        <v-col
          v-for="index2 in courses.length"
          :key="index2"
          cols="12"
          md="3"
          max-height="500"
        >
          <CourseCard :courseInfo="courses[index2 - 1]" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import CourseCard from '@/components/CourseCard.vue'
export default {
  components: {
    StartScreen,
    CourseCard
  },
  data() {
    return {
      courses: [
        {
          image: require('../assets/course-1.jpg'),
          title: 'Computer Engineering'
        },
        {
          image: require('../assets/course-2.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/course-3.jpg'),
          title: 'Civil Engineering'
        },
        {
          image: require('../assets/course-4.jpg'),
          title: 'Mechanical Engineering'
        },
        {
          image: require('../assets/course-5.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/course-6.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/course-7.jpg'),
          title: 'Design Engineering'
        },
        {
          image: require('../assets/course-8.jpg'),
          title: 'Electrical Engineering'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/course-7.jpg');
}
</style>
