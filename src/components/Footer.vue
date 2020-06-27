<template>
  <v-footer dark color="grey darken-3" class="pa-0" padless>
    <v-container class="pt-0">
      <v-row>
        <v-col class="pl-2" cols="12" md="3" xs="12">
          <v-main class="pa-1" outlined tile>
            <h3 class="display" dark>
              Have a Question?
            </h3>
            <v-col class="d-flex" v-for="item in footerStart" :key="item.text">
              <v-icon>{{ item.icon }}</v-icon>
              &nbsp;
              <label class="pl-3">
                {{ item.text }}
              </label>
            </v-col>
          </v-main>
        </v-col>
        <v-col
          cols="12"
          md="2"
          xs="12"
          class="d-flex"
          v-for="item in footerResources"
          :key="item.heading"
        >
          <div class="pa-2" outlined tile>
            <h3 class="display pl-2">{{ item.heading }}</h3>
            <v-col class="" v-for="data in item.data" :key="data">{{
              data
            }}</v-col>
          </div>
        </v-col>
        <v-col class="mt-1" cols="12" md="3" xs="12">
          <v-main class="pa-1 mr-3" outlined tile>
            <h3 class="display">
              Subscribe Us!
            </h3>
            <v-text-field dark label="Name" type="text"></v-text-field>
            <v-text-field dark label="Email" type="email"></v-text-field>
            <v-btn color="primary" x-large block>Subscribe</v-btn>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-card color="grey darken-3" class="flex" flat tile>
        <v-card-title>
          <strong class="subheading">&copy; All rights reserved</strong>

          <v-spacer></v-spacer>

          <v-btn
            color="primary"
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon color="white" size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-title>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerStart: [
      {
        icon: 'fas fa-phone',
        text: '+2 392 3929 210'
      },
      {
        icon: 'fas fa-envelope',
        text: 'info@yourdomain.com'
      },
      {
        icon: 'fas fa-map-marker-alt',
        text: '203 Fake St. Mountain View, San Francisco, California, USA'
      }
    ],
    footerResources: [
      {
        heading: 'FEATURES',
        data: ['Pricing', 'Education', 'Refer a Friend', 'Updates', 'Beta']
      },
      {
        heading: 'COMPANY',
        data: ['Design', 'Prototype', 'Colloborate', 'Sketch', 'Photoshop']
      },
      {
        heading: 'Links',
        data: ['Home', 'About', 'Services', 'Departments', 'Contact']
      }
    ],
    icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-linkedin']
  })
}
</script>
