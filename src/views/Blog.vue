<template>
  <div>
    <StartScreen pageHeading="Blog" caption="BLOG" />
    <v-container>
      <v-row id="screen2" class="mx-auto mt-10 mb-10">
        <v-col v-for="index in blogs.length" :key="index" cols="12" md="4">
          <BlogPost :blogInfo="blogs[index - 1]" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import BlogPost from '@/components/BlogPost.vue'
export default {
  components: {
    StartScreen,
    BlogPost
  },
  data() {
    return {
      blogs: [
        {
          image: require('../assets/image_1.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_2.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_3.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_4.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_5.jpg'),
          title: 'Electrical Engineering'
        },
        {
          image: require('../assets/image_6.jpg'),
          title: 'Electrical Engineering'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/course-5.jpg');
}
</style>
