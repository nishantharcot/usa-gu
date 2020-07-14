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
        <v-spacer></v-spacer>
        <v-col
          cols="12"
          md="3"
          v-for="item in footerResources"
          :key="item.heading"
        >
          <div>
            <!-- <h3 class="display pl-2">{{ item.heading }}</h3> -->
            <v-col v-for="data in item.data" :key="data.label">
              <v-icon>
                fas fa-angle-double-right
              </v-icon>
              <v-btn text :to="data.url">
                {{ data.label }}
              </v-btn>
            </v-col>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="3"
          v-for="item in footerResources2"
          :key="item.heading"
        >
          <div>
            <!-- <h3 class="display pl-2">{{ item.heading }}</h3> -->
            <v-col v-for="data in item.data" :key="data.label">
              <v-icon>
                fas fa-angle-double-right
              </v-icon>
              <v-btn text :to="data.url">
                {{ data.label }}
              </v-btn>
            </v-col>
          </div>
        </v-col>
      </v-row>
      <v-card
        :class="$vuetify.breakpoint.mdAndUp ? 'd-flex' : ''"
        color="grey darken-3"
        flat
      >
        <v-card-title>
          <strong>&copy; All rights reserved</strong> &nbsp;
        </v-card-title>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>

        <v-card-actions>
          <v-btn v-for="icon in icons" :key="icon" icon>
            <v-icon>{{ icon }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-row justify="center">
        <span>Designed by Digital Bot Solutions</span>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    footerStart: [
      {
        icon: 'fas fa-phone',
        text: '+1 302-827-3939'
      },
      {
        icon: 'fas fa-envelope',
        text: 'info@usagu.org'
      },
      {
        icon: 'fas fa-map-marker-alt',
        text: 'USAG University, LLC 16192 Coastal Highway, Lewes, DE 19958, USA'
      }
    ],
    footerResources: [
      {
        heading: 'Links',
        data: [
          {
            label: 'Home',
            url: '/'
          },
          {
            label: 'About us',
            url: '/about'
          },
          {
            label: 'Programmes',
            url: '/programs'
          },
          {
            label: 'Admissions & Fees',
            url: '/admissions'
          }
        ]
      }
    ],
    footerResources2: [
      {
        heading: 'Links',
        data: [
          {
            label: 'Award Verification',
            url: '/awards'
          },
          {
            label: 'Gallery',
            url: '/gallery'
          },
          {
            label: 'Contact',
            url: '/contact'
          },
          {
            label: 'Apply Now',
            url: '/application'
          }
        ]
      }
    ],
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-linkedin',
      'fab fa-quora',
      'fab fa-youtube'
    ]
  })
}
</script>
