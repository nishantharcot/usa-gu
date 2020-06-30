<template>
  <!-- App.vue -->

  <v-app id="app">
    <Header />
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="pa-0">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- -->
    <Footer />
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { dom } from '@fortawesome/fontawesome-svg-core'
import 'animate.css'
export default {
  components: {
    Header,
    Footer
  },
  mounted() {
    dom.watch()
  }
}
</script>
