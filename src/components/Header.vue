<template>
  <v-container class="pa-0 mx-0 full-width">
    <v-row class="mt-5" v-if="$vuetify.breakpoint.mdAndUp">
      <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="12" md="3">
        <h1 class="text-center">
          <v-img src="../assets/USA-GU2.png" height="120" contain></v-img>
        </h1>
      </v-col>
      <v-col v-else class="d-flex flex-column" cols="12" md="3">
        <h1>
          USA-GU
        </h1>
      </v-col>
      <v-col cols="12" md="3" class="d-flex flex-column justify-center">
        <div class="d-flex flex-row">
          <v-icon color="primary" class="mt-3">
            fas fa-paper-plane
          </v-icon>
          <div class="d-flex flex-column pl-3">
            <strong>Email</strong>
            <p>
              info@usaguniversity.org
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="3" class="d-flex flex-column justify-center">
        <div class="d-flex flex-row">
          <v-icon color="primary" class="mt-3">
            fas fa-phone-alt
          </v-icon>
          <div class="d-flex flex-column pl-2">
            <strong>Call</strong>
            <p>
              Call Us: + 1235 2355 98
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="2" class="d-flex flex-column justify-center">
        <v-btn class="mt-2" color="primary" to="/application">
          Apply Now
        </v-btn>
      </v-col>
    </v-row>
    <v-app-bar
      :class="
        $vuetify.breakpoint.smAndDown ? 'whiteBackground' : 'darkBackground'
      "
      dark
    >
      <v-toolbar-title v-if="$vuetify.breakpoint.smAndDown">
        <v-img
          src="../assets/USA-GU2.png"
          height="50"
          width="50"
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
          <v-list no-action color="white">
            <v-list-item v-for="link in links" :key="link.label" :to="link.url">
              <v-list-item-content>
                <v-list-item-title>{{ link.label }}</v-list-item-title>
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
          color="white"
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
      },
      {
        label: 'Apply Now',
        url: '/application'
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

.darkBackground {
  background-color: #18214d !important;
}

.whiteBackground {
  background-color: white !important;
}
</style>
