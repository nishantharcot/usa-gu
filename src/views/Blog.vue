<template>
  <div>
    <StartScreen pageHeading="Blog" caption="BLOG" />
    <v-container>
      <v-row id="screen2" class="mx-auto mt-10 mb-10">
        <v-col v-for="index2 in blogs.length" :key="index2" cols="12" md="4">
          <BlogPost :blogInfo="blogs[index2 - 1]" />
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
  },
  computed: {
    courseLength() {
      return Math.ceil(this.data.blogs.length / 3)
    }
  }
}
</script>

<style lang="scss" scoped>
#screen1 {
  background-image: url('../assets/blog.jpeg');
}

#screen2 {
  min-height: 120vh;
}
</style>
