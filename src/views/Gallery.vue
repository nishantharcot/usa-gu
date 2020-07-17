<template>
  <div>
    <StartScreen pageHeading="GALLERY" caption="GALLERY" />
    <v-container>
      <v-row>
        <v-col class="order-2" cols="12" md="6">
          <h1 class="display-1">
            <strong>Photo Gallery</strong>
          </h1>
          <p class="mt-5">
            Even though all of the programs provided by USAG University are 100
            % online and the students don't have to visit the campus of the
            university in Hawaii, our campus in Prague, Czech Republic often
            organizes events such as the annual USAG AWARDS. We would like to
            share a few photos from these wonderful events with you.
          </p>
          <v-btn
            to="/photogallery"
            x-large
            color="primary"
            class="align-self-center"
          >
            View All
          </v-btn>
        </v-col>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="6"
        >
          <v-img eager src="../assets/gallery-new-1.jpg"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="6"
        >
          <!-- <LazyYoutubeVideo src="https://www.youtube.com/embed/xmCWXOO1XNA" /> -->
          <v-img eager src="../assets/event-image.jpg"></v-img>
        </v-col>
        <v-col class="order-2" cols="12" md="6">
          <h1 class="display-1">
            <strong>Events Gallery</strong>
          </h1>
          <p class="mt-5">
            This section contains various events that help introduce USAG
            University. We hope you enjoy!
          </p>
          <v-btn
            to="/eventgallery"
            x-large
            color="primary"
            class="align-self-center jus"
          >
            View All
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
// import LazyYoutubeVideo from 'vue-lazy-youtube-video'

export default {
  components: {
    StartScreen
    // LazyYoutubeVideo
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/gallery.jpg');
}
</style>
