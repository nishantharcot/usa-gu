<template>
  <div>
    <StartScreen pageHeading="Gallery" caption="GALLERY" />
    <v-container>
      <v-row>
        <v-col class="order-2" cols="12" md="6">
          <h1 class="display-1">
            <strong>Photo gallery</strong>
          </h1>
          <p class="mt-5">
            Even though all of the programs provided by LIGS University are 100
            % online and the students don't have to visit the campus of the
            university in Hawaii, our campus in Prague, Czech Republic often
            organizes events such as the annual LIGS AWARDS. We would like to
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
          <v-img src="../assets/gallery-screen1.jpg"></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="order-2" cols="12" md="6">
          <h1 class="display-1">
            <strong>Video gallery</strong>
          </h1>
          <p class="mt-5">
            This section contains various videos that help introduce LIGS
            University. We hope you enjoy watching!
          </p>
          <v-btn x-large color="primary" class="align-self-center jus">
            View All
          </v-btn>
        </v-col>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          md="6"
        >
          <LazyYoutubeVideo src="https://www.youtube.com/embed/xmCWXOO1XNA" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'

export default {
  components: {
    StartScreen,
    LazyYoutubeVideo
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/gallery.jpg');
}
</style>
