<template>
  <div>
    <StartScreen pageHeading="About Us" caption="ABOUT US" />
    <v-container>
      <v-row id="screen2">
        <v-col class="about2" cols="12" sm="12" md="6">
          <h2 class="mb-5">
            Fox University Stablished Since 1960
          </h2>
          <p class="flexStart">
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the
            word.
          </p>
          <p class="flexStart">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p class="flexStart">
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
      <v-row id="screen3"></v-row>
      <!-- <v-row id="screen4" class="theme--dark">
        <v-col cols="1"></v-col>
        <v-col
          cols="12"
          md="2"
          sm="12"
          v-for="item in collegeStatistics"
          :key="item.title"
        >
          <div class="screen4Card">
            <h2 class="centerClass">{{ item.title }}</h2>
            <h4 class="centerClass">{{ item.label }}</h4>
          </div>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row> -->
      <EndScreen />
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import EndScreen from '@/components/EndScreen.vue'
export default {
  components: {
    StartScreen,
    EndScreen
  },
  data() {
    return {
      collegeStatistics: [
        {
          title: '18',
          label: 'Certified Teachers'
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
#screen1 {
  background-image: url('../assets/about-5.jpeg');
  // background-position: top;
}

#start-gap {
  min-width: 20vh;
}

#screen2 {
  min-height: 80vh;
  // height: 80vh;
  // background-color: aqua;
}

#screen3 {
  min-height: 130vh;
  background-image: url('../assets/about2.jpg');
  background-position: center;
  background-size: cover;
}

#screen4 {
  // height: 40vh;
  min-height: 50vh;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  // background-color: #1a237e;
  // color: white;
}

.screen3-content {
  // background: linear-gradient(45deg, #0d1128 0%, #fd6100 100%);
  z-index: 2;
  background-color: rgba(orange, 0.7);
}

.about2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.flexStart {
  display: flex;
  justify-content: flex-start !important;
  align-items: flex-start;
}

.whiteText {
  color: white !important;
}

.screen4Card {
  display: flex;
  height: 15vh;
  flex-direction: column;
  justify-content: space-between;
}

.centerClass {
  text-align: center;
}

.flexCenter {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
