<template>
  <div>
    <StartScreen pageHeading="EVENTS GALLERY" caption="EVENT GALLERY" />
    <v-container>
      <v-row class="mt-15">
        <v-col cols="12">
          <h1 class="display-1">
            <strong>
              Events Gallery
            </strong>
          </h1>
          <p class="mt-5">
            Even though all of the programs provided by USAG University are 100
            % online and the students don't have to visit the campus of the
            university in Hawaii, our campus in Prague, Czech Republic often
            organizes events such as the annual USAG AWARDS. We would like to
            share a few photos from these wonderful events with you.
          </p>
        </v-col>
        <v-col
          v-for="photoCard in photoGallery"
          :key="photoCard.name"
          cols="12"
          md="4"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="photoCard.image"
            >
            </v-img>
            <v-card-title>
              {{ photoCard.name }}
            </v-card-title>
            <v-card-text class="text--primary">
              Have a look at the most captivating moments from our Graduation
              Ceremony, where we handed out diplomas to our successful
              graduates.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'

export default {
  components: {
    StartScreen
  },
  data() {
    return {
      photoGallery: [
        {
          image: require('../assets/hawaii.jpg'),
          name: 'Hawaii: Oahu',
          description: ''
        },
        {
          image: require('../assets/new-gallery-4.jpg'),
          name: 'USAG Awards 2020',
          description: ''
        },
        {
          image: require('../assets/new-gallery-8.jpg'),
          name: 'USAG Awards 2020',
          description: ''
        },
        {
          image: require('../assets/photo-gallery-7.jpg'),
          name: 'Hawaii Fair 2020',
          description: ''
        },
        {
          image: require('../assets/new-gallery-10.jpg'),
          name: 'USAG Awards 2020',
          description: ''
        },
        {
          image: require('../assets/new-gallery-9.jpg'),
          name: 'USAG Awards 2020',
          description: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/gallery.jpg');
}
</style>
