<template>
  <div>
    <StartScreen pageHeading="Contact Us" caption="CONTACT" />
    <v-container>
      <ContactInfo />
      <v-row>
        <v-col cols="12" md="6">
          <l-map
            v-if="showMap"
            :zoom="zoom"
            :center="center"
            :options="mapOptions"
            style="height: 80%"
            @update:center="centerUpdate"
            @update:zoom="zoomUpdate"
          >
            <l-tile-layer :url="url" :attribution="attribution" />
            <l-marker :lat-lng="withPopup">
              <l-popup>
                <div @click="innerClick">
                  I am a popup
                  <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                    sollicitudin nisi. Donec finibus semper metus id malesuada.
                  </p>
                </div>
              </l-popup>
            </l-marker>
            <l-marker :lat-lng="withTooltip">
              <l-tooltip :options="{ permanent: true, interactive: true }">
                <div @click="innerClick">
                  I am a tooltip
                  <p v-show="showParagraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque sed pretium nisl, ut sagittis sapien. Sed vel
                    sollicitudin nisi. Donec finibus semper metus id malesuada.
                  </p>
                </div>
              </l-tooltip>
            </l-marker>
          </l-map>
        </v-col>
        <v-col cols="12" md="6">
          <v-form>
            <v-text-field label="Name" type="text" v-model="name">
            </v-text-field>
            <v-text-field label="Email" type="email" v-model="email">
            </v-text-field>
            <v-text-field label="Subject" type="text" v-model="subject">
            </v-text-field>
            <v-textarea label="Message"></v-textarea>
            <v-btn color="primary" x-large>
              Send Message
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import StartScreen from '@/components/StartScreen.vue'
import ContactInfo from '@/components/ContactInfo.vue'
import { latLng } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from 'vue2-leaflet'

export default {
  components: {
    StartScreen,
    ContactInfo,
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    }
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom
    },
    centerUpdate(center) {
      this.currentCenter = center
    },
    showLongText() {
      this.showParagraph = !this.showParagraph
    },
    innerClick() {
      alert('Click!')
    }
  }
}
</script>

<style lang="scss" scoped>
.screen1 {
  background-image: url('../assets/image_1.jpg');
}
</style>
