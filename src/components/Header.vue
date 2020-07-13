<template>
  <v-container class="pa-0 full-width">
    <v-row align="center" v-if="$vuetify.breakpoint.mdAndUp">
      <v-col cols="12" md="3" class="">
        <v-img src="../assets/USA-GU2-new.png" height="75" contain></v-img>
      </v-col>
      <v-col cols="12" md="3" class="mt-4">
        <div class="d-flex">
          <div>
            <v-icon color="primary" class="mt-3">
              fas fa-paper-plane
            </v-icon>
          </div>
          <div class="d-flex flex-column pl-3">
            <strong>Email</strong>
            <p>
              info@usaguniversity.org
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="mt-4">
        <div class="d-flex">
          <div>
            <v-icon color="primary" class="mt-3">
              fas fa-phone-alt
            </v-icon>
          </div>
          <div class="d-flex flex-column pl-3">
            <strong>Call</strong>
            <p>
              Call Us: + 1235 2355 98
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3">
        <v-btn color="secondary" to="/application">
          Apply Now
        </v-btn>
      </v-col>
    </v-row>
    <v-app-bar
      :class="$vuetify.breakpoint.smAndDown ? 'whiteBackground' : 'primary'"
    >
      <v-toolbar-title v-if="$vuetify.breakpoint.smAndDown">
        <v-img
          src="../assets/USA-GU2-new.png"
          height="55"
          width="55"
          contain
        ></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        color="white"
        @click.stop="drawer = !drawer"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" icon v-bind="attrs" v-on="on">
              <v-icon>fas fa-bars</v-icon>
            </v-btn>
          </template>
          <v-list no-action>
            <v-list-item v-for="link in links" :key="link.label" :to="link.url">
              <v-list-item-content>
                <v-list-item-title>{{ link.label }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/application" v-if="$vuetify.breakpoint.smAndDown">
              <v-list-item-content>
                <v-list-item-title>Apply Now</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar-nav-icon>
      <!-- <v-spacer></v-spacer> -->
      <template v-for="link in links">
        <v-btn
          v-if="$vuetify.breakpoint.mdAndUp"
          :key="link.label"
          active-class="secondary"
          :to="link.url"
          text
          >{{ link.label }}
        </v-btn>
      </template>
      <v-spacer v-if="$vuetify.breakpoint.mdAndUp"></v-spacer>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
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
      },
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
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.full-width {
  width: 100vw !important;
  max-width: 100vw !important;
}

.whiteBackground {
  background-color: white !important;
}
</style>
