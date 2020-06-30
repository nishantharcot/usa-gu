<template>
  <v-footer dark color="grey darken-3">
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-main>
            <h3 class="display pl-3">
              Have a Question?
            </h3>
            <v-col class="d-flex" v-for="item in footerStart" :key="item.text">
              <v-icon>{{ item.icon }}</v-icon>
              <label class="pl-3">
                {{ item.text }}
              </label>
            </v-col>
          </v-main>
        </v-col>
        <v-col
          cols="12"
          md="2"
          v-for="item in footerResources"
          :key="item.heading"
        >
          <div>
            <h3 class="display pl-2">{{ item.heading }}</h3>
            <v-col v-for="data in item.data" :key="data">{{ data }}</v-col>
          </div>
        </v-col>
        <v-col cols="12" md="3">
          <v-main>
            <h3 class="display">
              Subscribe Us!
            </h3>
            <v-text-field label="Name" type="text"></v-text-field>
            <v-text-field label="Email" type="email"></v-text-field>
            <v-btn color="primary" x-large block>Subscribe</v-btn>
          </v-main>
        </v-col>
      </v-row>
      <v-card
        :class="$vuetify.breakpoint.mdAndUp ? 'd-flex' : ''"
        color="grey darken-3"
        flat
      >
        <v-card-title>
          <strong>&copy; All rights reserved</strong>
        </v-card-title>

        <v-spacer></v-spacer>

        <v-card-actions>
          <v-btn v-for="icon in icons" :key="icon" icon>
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-card-actions>
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
        text: 'info@abguniversity.org'
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
