<template>
  <div>
    <StartScreen pageHeading="CERTIFIED PROFESSOR" caption="PROFESSOR" />
    <v-container>
      <v-row class="mx-auto mt-10">
        <v-col v-for="index2 in courses.length" :key="index2" cols="12" md="3">
          <Teacher :teacher="courses[index2 - 1]" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import Teacher from '@/components/Teacher.vue'
export default {
  components: {
    StartScreen,
    Teacher
  },
  data() {
    return {
      courses: [
        {
          image: require('../assets/teacher-1.jpg'),
          title: 'English Professor',
          name: 'Bianca Wilson'
        },
        {
          image: require('../assets/teacher-2.jpg'),
          title: 'Art Professor',
          name: 'Mitch Parker'
        },
        {
          image: require('../assets/teacher-3.jpg'),
          title: 'Science Professor',
          name: 'Stella Smith'
        },
        {
          image: require('../assets/teacher-4.jpg'),
          title: 'Maths Professor',
          name: 'Monshe Henderson'
        },
        {
          image: require('../assets/teacher-5.jpg'),
          title: 'Electrical Professor',
          name: 'Will Smith'
        },
        {
          image: require('../assets/teacher-6.jpg'),
          title: 'Electrical Professor',
          name: 'Mitch Parker'
        },
        {
          image: require('../assets/teacher-7.jpg'),
          title: 'Electrical Professor',
          name: 'Stella Smith'
        },
        {
          image: require('../assets/teacher-8.jpg'),
          title: 'Electrical Professor',
          name: 'Monshe Henderson'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/course-4.jpg');
}
</style>
