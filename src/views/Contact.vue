<template>
  <div>
    <StartScreen pageHeading="CONTACT US" caption="CONTACT" />
    <!-- use container for propper padding -->
    <ContactInfo />
    <v-container>
      <v-col cols="12" class="pb-0">
        <v-img src="../assets/contactPhoto.jpg"></v-img>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import ContactInfo from '@/components/ContactInfo.vue'
// import { latLng } from 'leaflet'
// import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'

export default {
  components: {
    StartScreen,
    ContactInfo
    // LMap,
    // LTileLayer,
    // LMarker,
    // LPopup,
    // LTooltip
  },
  data() {
    return {
      name: '',
      email: '',
      subject: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/image_1.jpg');
}
</style>
