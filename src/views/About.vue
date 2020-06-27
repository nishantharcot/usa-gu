<template>
  <div>
    <StartScreen pageHeading="About Us" caption="ABOUT US" />
    <v-container>
      <v-row id="screen2">
        <v-col
          class="de-flex flex-column justify-center align-center"
          cols="12"
          sm="12"
          md="6"
        >
          <h2 class="mb-5">
            USA GU Stablished Since 1960
          </h2>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the
            word.
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their
          </p>
        </v-col>
        <v-col
          class="pt-0 pb-0"
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="12"
          sm="12"
          md="6"
        >
          <div>
            <v-img src="../assets/about.jpg"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax
      :height="$vuetify.breakpoint.smAndDown ? 1000 : 500"
      src="../assets/about2.jpg"
    >
      <v-overlay opacity="0.7" absolute style="max-width: 100vw">
        <v-container style="max-width: 100vw">
          <v-row align="center" justify="center">
            <v-col class="text-center pa-0" cols="12" md="5">
              <LazyYoutubeVideo
                src="https://www.youtube.com/embed/xmCWXOO1XNA"
              />
            </v-col>
            <v-col cols="12" md="5" class="text-center">
              <h1 class="display-1 font-weight-thin mb-4">USA GU University</h1>
              <p>
                Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </v-col>
          </v-row>
          <v-row justify="center" class="theme--dark">
            <v-col
              cols="6"
              md="2"
              xs="6"
              v-for="item in collegeStatistics"
              :key="item.title"
            >
              <v-card width="100%" class="justify-center text-center">
                <v-card-title class="d-flex flex-column text-center">
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.label }}</p>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
    </v-parallax>
    <EndScreen />
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import EndScreen from '@/components/EndScreen.vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'

export default {
  components: {
    StartScreen,
    EndScreen,
    LazyYoutubeVideo
  },
  data() {
    return {
      collegeStatistics: [
        {
          title: '18',
          label: 'Professors'
        },
        {
          title: '401',
          label: 'Students'
        },
        {
          title: '30',
          label: 'Courses'
        },
        {
          title: '50',
          label: 'Awards Won'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/course-1.jpg');
}
</style>
