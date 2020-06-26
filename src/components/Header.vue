<template>
  <div>
    <div>
      <v-row class="mt-5">
        <v-col v-if="$vuetify.breakpoint.mdAndUp" class="ml-5" cols="12" md="3">
          <h1 class="centerClass">
            USA-GU
          </h1>
        </v-col>
        <v-col v-else class="flexStart ml-5" cols="12" md="3">
          <h1>
            USA-GU
          </h1>
        </v-col>
        <v-col class="ml-5" cols="12" md="3">
          <div class="flexRow">
            <v-icon color="primary" class="mt-3">
              fas fa-paper-plane
            </v-icon>
            <div class="ml-3 flexStart">
              <strong>Email</strong>
              <p>
                youremail@email.com
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="ml-5" cols="12" md="3">
          <div class="flexRow">
            <v-icon color="primary" class="mt-3">
              fas fa-phone-alt
            </v-icon>
            <div class="ml-3 flexStart">
              <strong>Call</strong>
              <p>
                Call Us: + 1235 2355 98
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="flexStart ml-5" cols="12" md="2">
          <v-btn class="mt-2" color="primary">
            Apply Now
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-app-bar class="darkBackground">
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.smAndDown">
        <v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer">
          MENU
        </v-app-bar-nav-icon>
      </div>
      <div v-else>
        <v-btn
          active-class="secondary"
          v-for="link in links"
          :key="link.label"
          :to="link.url"
          text
          color="white"
          >{{ link.label }}</v-btn
        >
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-list
      v-if="$vuetify.breakpoint.smAndDown && drawer"
      app
      no-action
      color="white"
    >
      <v-list-item v-for="link in links" :key="link.label" :to="link.url">
        <v-list-item-content>
          <v-list-item-title>{{ link.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
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
        label: 'About',
        url: '/about'
      },
      {
        label: 'Courses',
        url: '/courses'
      },
      {
        label: 'Staff',
        url: '/staff'
      },
      {
        label: 'Blog',
        url: '/blog'
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
#navbarTop {
  display: flex;
  // flex-direction: row;
  justify-content: space-around;
}

.centerClass {
  text-align: center;
}

.flexRowCenter {
  display: flex;
  justify-content: space-around;
}

.flexRow {
  display: flex;
  // justify-content: center;
}

.flexStart {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.flexCenterColumn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.darkBackground {
  background-color: #18214d !important;
}
</style>
