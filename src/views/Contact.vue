<template>
  <div>
    <StartScreen pageHeading="CONTACT US" caption="CONTACT" />
    <!-- use container for propper padding -->
    <!-- <ContactInfo /> -->
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" xl="4" md="6">
          <v-img src="../assets/usflag.jpg" height="375"></v-img>
        </v-col>
        <v-col cols="12" xl="4" md="6">
          <v-card>
            <v-card-title>
              USA
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <span class="font-weight-bold primary--text">Location: </span
              ><br />
              USAG University <br />
              LLC 16192 Coastal Highway <br />
              Lewes <br />
              DE 19958 <br />
              United States of America
            </v-card-text>
            <v-card-text>
              <span class="font-weight-bold primary--text">Email: </span><br />
              info@usagu.org
            </v-card-text>
            <v-card-text>
              <span class="font-weight-bold primary--text">Phone: </span><br />
              +1 302-827-3939
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col class="order-2" cols="12" xl="4" md="6">
          <v-card>
            <v-card-title>
              UK
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <span class="font-weight-bold primary--text">Location: </span
              ><br />
              London College of Technology, <br />
              West Midlands House <br />
              Gipsy Lane, Willenhall
              <br />
              West Midlands, WV13 2HA
              <br />
              United Kingdom
            </v-card-text>
            <v-card-text>
              <span class="font-weight-bold primary--text" color="primary"
                >Email: </span
              ><br />
              info@londoncollegeoftechnology.co.uk
            </v-card-text>
            <v-card-text>
              <span class="font-weight-bold primary--text">Phone: </span><br />
              +44(0)2034752556
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          :class="$vuetify.breakpoint.smAndDown ? 'order-1' : 'order-2'"
          cols="12"
          xl="4"
          md="6"
        >
          <v-img src="../assets/ukflag.jpg" height="375"></v-img>
        </v-col>
      </v-row>
      <!-- <v-col cols="12" class="pb-0">
        <v-img src="../assets/contactPhoto.jpg"></v-img>
      </v-col> -->
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
// import ContactInfo from '@/components/ContactInfo.vue'

export default {
  components: {
    StartScreen
    // ContactInfo
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/image_1.jpg');
}
</style>
