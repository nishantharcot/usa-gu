<template>
  <v-footer color="grey darken-3" class="white pa-0" padless>
    <v-container class="pt-0">
      <v-row>
        <v-col class="pl-2" cols="12" md="3" xs="12">
          <v-main class="pa-1 mr-3" outlined tile>
            <h3 class="display flexStart ml-3 footer">
              Have a Question?
            </h3>
            <v-col
              class="flexStart footer"
              v-for="item in footerStart"
              :key="item.text"
            >
              <v-icon class="mr-2 footer">{{ item.icon }}</v-icon>
              &nbsp;
              {{ item.text }}
            </v-col>
          </v-main>
        </v-col>
        <v-col
          cols="12"
          md="2"
          xs="12"
          class="flexStart footer"
          v-for="item in footerResources"
          :key="item.heading"
        >
          <div class="pa-2" outlined tile>
            <h3 class="display flexStart pl-2">{{ item.heading }}</h3>
            <v-col class="flexStart" v-for="data in item.data" :key="data">{{
              data
            }}</v-col>
          </div>
        </v-col>
        <v-col class="mt-1" cols="12" md="3" xs="12">
          <v-main class="pa-1 mr-3" outlined tile>
            <h3 class="display flexStart footer">
              Subscribe Us!
            </h3>
            <v-text-field label="Name" type="text"></v-text-field>
            <v-text-field label="Email" type="email"></v-text-field>
            <v-btn color="primary" x-large block>Subscribe</v-btn>
          </v-main>
        </v-col>
      </v-row>
    </v-container>
    <v-card color="grey darken-3" class="flex" flat tile>
      <v-card-title>
        <strong class="subheading footer">&copy; All rights reserved</strong>

        <v-spacer></v-spacer>

        <v-btn
          color="primary"
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          icon
        >
          <v-icon color="white" class="footer" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
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
    icons: ['mdi-facebook', 'fab fa-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>

<style lang="scss" scoped>
.footer {
  color: white;
}
.white {
  color: white;
}
.containerStyle {
  padding: -12px !important;
}

.flexStart {
  display: flex;
  justify-content: flex-start;
}
</style>
